import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import { payment } from '../action'
import { withRouter } from 'react-router-dom'

import CheckoutForm from '../components/CheckoutForm'
import OrderSummary from '../components/OrderSummary'
import { googleAnalyticsEvent } from '../util/ga'

class Order extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stripe: null,
      billPrice: {},
      workspace: '',
      summary: {
        mode: 'test',
        namespace: '',
        product: '',
        teamId: '',
        price: 0,
        cardExp: false
      }
    }
  }

  async componentDidMount () {
    const history = this.props.history
    const { teamId, mode, namespace } = history.location.state
    if(!teamId || !mode || !namespace) {
      this.props.alert({
        title: 'Error',
        message: '<h5>Bad request.</h5>Please run <code>/nc account_update</code> in Commander to access this page.',
        cb: () => {
          this.props.history.push({
            pathname: '/pricing/commander'
          })
        }
      })
    } else {
      const { summary } = this.state
      Object.assign(summary, { ...history.location.state })
      await this.setState({ summary })
      this.handleStripe()
    }
  }

  componentWillUnmount () {
    this.props.alertCancel()
    this.props.loadingHide()
  }

  handleStripe = () => {
    const key = this.state.summary.mode === 'live' ? process.env.REACT_APP_STRIPE_KEY_PROD : process.env.REACT_APP_STRIPE_KEY_DEV
    if (window.Stripe) {
      this.setState({stripe: window.Stripe(key)});
    } else {
      try {
        document.querySelector('#stripe-js').addEventListener('load', () => {
          // Create Stripe instance once Stripe.js loads
          this.setState({stripe: window.Stripe(key)});
        });
      } catch (error) { console.log(error) }
    }
  }

  handleStateClear = () => { // Remove location state data
    const history = this.props.history
    let state = { ...history.location.state }
    delete state.teamId
    history.replace({ ...history.location, state })
  }

  handleResult = (result) => {
    // console.log('result', result)
    const { teamId, namespace, mode } = this.state.summary
    const { form: { email, name }, token } = result
    this.props.loadingShow()

    payment.createSubscription(teamId, namespace, email, name, token).then(res => {
      if(res) {
        this.props.loadingHide()
      }

      if(res.status === 'success') {
        googleAnalyticsEvent(10, 'Commander for Slack', 'Pro Plan', { value: 4 })
        this.handleStateClear()
        this.props.history.push({
          pathname: '/account-status',
          state: {
            success: true,
            teamId,
            mode,
            namespace
          }
        })
      }

      if(res.status === 'failed') {
        this.handleStateClear()
        if(/declined/.test(res.message)) {
          this.props.alert({
            title: res.status.toUpperCase(),
            message: res.message
          })
        } else {
          this.props.alert({
            title: res.status.toUpperCase(),
            message: res.message,
            cb: () => {
              this.props.history.push({
                pathname: '/account-status',
                state: {
                  success: false,
                  teamId,
                  mode,
                  namespace
                }
              })
            }
          })
        }
      }
    })
  }

  handleWorkspace = s => {
    this.setState({ workspace: s })
  }

  render () {
    const { summary, workspace, stripe } = this.state
    const { loadingShow, loadingHide, alert } = this.props
    return (
      <StripeProvider stripe={stripe}>
        <Elements>
          <div className='container-fluid page'>
            <div className='row flex-row-reverse'>
              {summary.product && <OrderSummary
                summary={summary}
                workspace={workspace}
              />}

              {summary.product && <CheckoutForm
                handleResult={this.handleResult}
                teamId={summary.teamId}
                namespace={summary.namespace}
                cardExp={summary.cardExp}
                handleWorkspace={this.handleWorkspace}
                loadingShow={loadingShow}
                loadingHide={loadingHide}
                alert={alert}
              />}
            </div>
          </div>
        </Elements>
      </StripeProvider>
    )
  }
}
export default withRouter(Order)
