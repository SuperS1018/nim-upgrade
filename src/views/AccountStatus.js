import React, { Component, Fragment } from 'react'
import { payment } from '../action'
import { dateFormatted } from '../util/date'
import { params } from '../util/url'
import { googleAnalyticsEvent } from '../util/ga'

import '../stylesheets/views/AccountStatus.css'

class AccountStatus extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showResult: false,
      showSuccess: false,
      upcomingInvoice: {},
      history: [],
      subscription: [],
      teamId: '',
      mode: 'test',
      namespace: '',
      workspace: ''
    }
  }

  async componentDidMount () {
    const state = this.props.history.location.state || this.props.history.location.search

    const __fetchData = () => {
      const { teamId, namespace } = this.state
      if(teamId && namespace) {
        this.props.loadingShow()
        this.fetchSubscriptionData(teamId, namespace)
      }
    }

    const __redirect = () => {
      this.props.alert({
        title: 'ERROR',
        message: '<h5>Bad request.</h5>Please run <code>/nc account_info</code> in Commander to access this page.',
        cb: () => {
          this.props.history.replace({
            pathname: '/'
          })
        }
      })
    }

    if(state) {
      if(typeof state === 'string') {
        const teamId = params(state, 'team_id')
        const mode = params(state, 'mode')
        const namespace = params(state, 'namespace')
        if(teamId && mode && namespace) {
          await this.setState({ teamId, mode, namespace })
          __fetchData()
        } else {
          __redirect()
        }
      }

      if(typeof state === 'object') {
        const { success, teamId, mode, namespace } = this.props.history.location.state
        await this.setState({ teamId, mode, namespace })
        if(success) {
          this.handleSuccessMessage().then(() => {
            __fetchData()
          })
        } else {
          __fetchData()
        }
      }
    } else {
      __redirect()
    }
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
    this.props.alertCancel()
    this.props.loadingHide()
  }

  handleSuccessMessage = async () => {
    this.setState({ showSuccess: true })
    this.timeout = setTimeout(() => {
      this.setState({ showSuccess: false })
    }, 2000)
  }

  fetchSubscriptionData = (teamId, namespace) => {
    payment.fetchCustomerHistory(teamId, namespace).then(res => {
      // console.log(res)
      if(res) {
        this.props.loadingHide()
      }
      if(res.status === 'success') {
        const { invoices, subscriptions, workspace, upcomingInvoice } = res.data
        const filteredInvoices = invoices.data.filter(i => i.billing_reason !== 'subscription_create')
        this.setState({
          history: invoices ? filteredInvoices : [],
          subscription: (subscriptions.data && subscriptions.data.length > 0)  ? subscriptions.data : [],
          upcomingInvoice,
          showResult: true,
          workspace
        })
      } else {
        if(res.status) {
          this.props.alert({
            title: res.status.toUpperCase(),
            message: res.message,
            cb: () => {
              this.props.history.replace({
                pathname: '/'
              })
            }
          })
        }

        if(res.error) {
          this.props.alert({
            title: 'Error',
            message: res.error,
            cb: () => {
              this.props.history.replace({
                pathname: '/'
              })
            }
          })
        }
      }
    })
  }

  handleUnscription = () => {
    this.setState({ loading: true })
    const { teamId, namespace } = this.state
    payment.unsubscribe(teamId, namespace).then(res => {
      if(res.status) {
        googleAnalyticsEvent(0, 'Account Status', 'Cancel Subscription')

        this.props.alert({
          title: res.status.toUpperCase(),
          message: res.message,
          cb: this.fetchSubscriptionData(teamId, namespace)
        })
      } else {
        console.warning('Unsubscribe API does not return expected message')
      }

    })
  }

  handleUnit = product => { // map plan unit by product id
    switch (product) {
      case 'prod_GVCHUNIjtOe9p9':
        return 'per active user per month'
      default:
        return 'per active user per month'
    }
  }

  handleAmountAdjustment = (amount, planAmount) => {
    if(amount > 0) {
      return amount / 100
    } else {
      return planAmount / 100
    }
  }

  handleActiveUsersAdjustment = users => {
    if(users > 0) {
      return <Fragment><strong>{users}</strong> active users</Fragment>
    } else {
      return <Fragment><strong>1</strong> minimum user</Fragment>
    }
  }

  render () {
    const { showResult, showSuccess, history, subscription, workspace, upcomingInvoice } = this.state
    return (
      <div className='AccountStatus section page'>
        <div className='container'>
          <div className='row'>
            {showSuccess && <div className='mask'><h1 className='text text-app'>Thank you for using Commander</h1></div>}
            <div className='col-md-12 mb-5'>
              <h1>Account Status and History</h1>
            </div>

            {showResult &&
            <div className='col-md-12 mb-5'>
              <h2>Active Subscriptions</h2>
              {subscription.length <= 0 && <p>You don't have any active subscription.</p>}

              {subscription.length > 0 && subscription.map((i, index) => (
                <div className='AccountStatus--Subscriptions' key={index}>
                  <p>Your workspace is <strong>{workspace}</strong>, and you are currently on <strong>{i.plan.nickname} Plan</strong> (${i.plan.amount/100} {this.handleUnit(i.plan.product)} with a minimum of 1 user). We will automatically renew your monthly subscription.<br /><br />Your next payment is going to be <strong>{dateFormatted(upcomingInvoice.billing_date * 1000)}</strong>.</p>
                  {/*<div className='btn-wrap pl-5'>*/}
                    {/*<button className='btn btn-app' onClick={this.handleUnscription}>Unsubscribe</button>*/}
                  {/*</div>*/}
                </div>
              ))}
            </div>}

            {showResult &&
            <div className='col-md-12 mt-5'>
              <h2>Payment History</h2>
              <table width="100%">
                <tbody>
                  <tr height='40' valign='top'>
                    <th>Date</th>
                    <th>Description</th>
                    <th align='center' className='text-center'>Total</th>
                    <th align='center' className='text-center'>Receipt</th>
                  </tr>
                  {history.map((i, index) => (
                    <tr height='35' key={i.description + index}>
                      <td>{dateFormatted(i.created * 1000)}</td>
                      <td>{i.lines.data[0].description}</td>
                      <td align='center'>${i.total/100}</td>
                      <td align='center'><a href={i.invoice_pdf}>{i.invoice_pdf ? 'Download PDF' : 'Pending'}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>}

            <div className='col-md-12 mt-5'>
              <p>If you want to cancel the subscription click <span className='btn link-style d-inline align-baseline' onClick={this.handleUnscription}>here</span> and you will be charged $4 (prorated) for 1 minimum user and other active users.</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default AccountStatus
