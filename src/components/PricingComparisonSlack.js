import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { payment } from '../action'
import { googleAnalyticsEvent } from '../util/ga'
import { params } from '../util/url'

import Content from '../components/Content'

import '../stylesheets/components/PricingComparison.css'

class PricingComparison extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: -1,
      isMobile: false,
      teamId: '',
      mode: 'test',
      namespace: '',
      showButton: false,
    }
  }

  componentDidMount () {
    const search = this.props.history.location.search || this.props.history.location.hash

    const ifPound = search.indexOf('#') !== -1
    const ifQuestion = search.indexOf('?') !== -1
    const param = ifQuestion ? ifPound ? `?${search.split('?')[1]}` : search : ''

    const teamId = params(param, 'team_id')
    const mode = params(param, 'mode')
    const namespace = params(param, 'namespace')
    // console.log(teamId, mode, namespace, param)
    if (teamId && mode && namespace) {
      this.setState({ teamId, mode, namespace, showButton: true })
    }

    if(this.isMobileDevice()) {
      this.setState({ index: param ? 1 : 0, isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }
  }

  componentWillUnmount () {
    this.props.alertCancel()
  }

  handleLinkBreak = s => {
    if(s.indexOf('(') === -1) {
      return s
    } else {
      return (
        <span>{s.split('(')[0]}<br />({s.split('(')[1]}</span>
      )
    }
  }

  handleTableFilter = (data, index) => {
    if(index !== -1) {
      let a = { ...data[index], index }
      return [a]
    }
    return data
  }

  handleComparisonFilter = (data = [], index) => {
    try {
      if(data.length <= 0) {
        return data
      }
      const a = Object.keys(data[0]).filter(i => i !== 'features')
      let arr = ['playground', 'starter', 'pro', 'enterprise']
      arr = arr.filter(j => a.includes(j))
      const name = arr[index]
      if(index !== -1) {
        return data.map(i => ({ [name]: i[name], features: i.features }))
      } else {
        return data
      }
    } catch (err) { console.log(err) }
  }

  handleChange = e => {
    this.setState({ index: e.target.value })
  }

  isMobileDevice = () => {
    return (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent));
  };

  handleClick = (index, upgrade) => {
    const { teamId, mode, namespace } = this.state
    switch(index) {
      case 0:
        window.open('/commander/slack/install?version=2', '_blank')
        break
      case 1:
        if(upgrade) {
          const price = this.props.tableList[index].value
          const item = this.props.tableList[index].note
          payment.customerIdValidation(teamId, namespace).then(res => {
            googleAnalyticsEvent(0, 'Pricing Commander', 'Upgrade')
            if(res.statusCode === 400) {
              this.props.alert({
                title: 'Error',
                message: res.error,
              })
              return false
            }
            if(res.hasOwnProperty('status') && res.status === 'failed') {
              this.props.alert({
                title: res.status.toLocaleUpperCase(),
                message: res.message
              })
            } else {
              if(res.card === 'active' && res.subscription === 'active') {
                this.props.alert({
                  title: 'Welcome',
                  message: '<p>You have subscribed for Pro Plan. <br />Heading to <strong>Account Status</strong> page now...</p>',
                  cb: () => {
                    this.props.history.push({
                      pathname: '/account-status',
                      state: {
                        success: false,
                        teamId,
                        namespace,
                        mode
                      }
                    })
                  }
                })
              } else {
                if(res.card === 'expired' && res.subscription === 'active') {
                  this.props.alert({
                    title: 'Warning',
                    message: 'Your card is expired. Please update your credit card information.',
                    cb: () => {
                      this.props.history.push({
                        pathname: '/order',
                        state: { teamId, mode, namespace, product: 'Commander Pro Plan', price, item, cardExp: true  }
                      })
                    }
                  })
                } else {
                  this.props.history.push({
                    pathname: '/order',
                    state: { teamId, mode, namespace, product: 'Commander Pro Plan', price, item, cardExp: false  }
                  })
                }
              }
            }
          })
        } else {
          window.open('/commander/slack/install?version=2', '_blank')
        }
        break
      case 2:
        this.props.history.push({
          pathname: '/contact-form',
          state: {
            subject: 'Sales - Commander Slack'
          }
        })
        break
      default:
        console.log('*** pricing button total is not 3?')
    }
  }

  render () {
    const { tableList, comparisonList } = this.props
    const { index, isMobile, showButton } = this.state
    const filteredTableList = this.handleTableFilter(tableList, index)
    const filteredComparisonList = this.handleComparisonFilter(comparisonList, index)
    const buttonElem = (o, index) => {
      if(o.index === undefined) {
        if(index === 0 || index === 2) {
          return <button className='btn btn-app' onClick={() => this.handleClick(isMobile ? parseInt(o.index) : index)}>{o.button }</button>
        }
        if(index === 1) {
          if (showButton) {
            return <Fragment>{o.button && <button className='btn btn-app' onClick={() => this.handleClick((isMobile ? parseInt(o.index) : index), true)}>Upgrade</button>}</Fragment>
          }
          if (!showButton) {
            return <Fragment>
              {o.description && <Content className='btn-message' source={o.description} />}
              <button className='btn btn-app' onClick={() => this.handleClick(isMobile ? parseInt(o.index) : index)}>{o.button}</button>
            </Fragment>
          }
        }
      } else {
        if (showButton) {
          return <Fragment>{o.button && <button className='btn btn-app' onClick={() => this.handleClick((isMobile ? parseInt(o.index) : index), true)}>Upgrade</button>}</Fragment>
        }
        if (!showButton) {
          return <Fragment>
            {o.description && <Content className='btn-message' source={o.description} />}
            <button className='btn btn-app' onClick={() => this.handleClick(isMobile ? parseInt(o.index) : index)}>{o.button}</button>
          </Fragment>
        }
      }
    }

    return (
      <div className='PricingComparison section' id='slack'>
        <div className='container'>
          <div className='row'>
            {(filteredTableList.length > 0 || filteredComparisonList.length > 0) && <div className='col-lg-12'>
              <h2 className='text-capitalize'>Nimbella Commander For Slack</h2>
              <hr className='mb-5' />
              {isMobile && !showButton && <div className='d-flex'>
                Select a plan:&nbsp;
                <div className='select-wrap select-mobile'>
                  <select name="" id="" value={index} onChange={this.handleChange}>
                    {tableList.map((i, index) => (
                      <option key={i.level + index} value={index}>{i.level}</option>
                    ))}
                  </select>
                </div>
              </div>}

              <table width='100%'>
                <tbody>
                <tr>
                  {!isMobile && <th style={{width: `${100/(filteredTableList.length + 1)}%`}} />}
                  {filteredTableList.map((i, index) => (
                    <th colSpan={isMobile ? 2 : 1} key={i.level + index} style={{width: `${100/(filteredTableList.length + 1)}%`}}>{i.level}</th>
                  ))}
                </tr>
                <tr className='table'>
                  {!isMobile && <td style={{width: `${100/(filteredTableList.length + 1)}%`}} />}
                  {filteredTableList.map((i, index) => (
                    <td colSpan={isMobile ? 2 : 1} key={i.level + index} style={{width: `${100/(filteredTableList.length + 1)}%`}}>
                      <h2>
                        {i.value && !isNaN(i.value) ? (<span>${i.value} USD</span>) : i.value}
                        <p className='note'>{i.unit}</p>
                      </h2>
                    </td>
                  ))}
                </tr>

                <tr className='table button'>
                  {!isMobile && <td />}
                  {filteredTableList.map((i, index) => (
                    <td colSpan={isMobile ? 2 : 1} valign='middle' key={i.level + index}>
                      { buttonElem(i, index) }
                    </td>
                  ))}
                </tr>

                {filteredComparisonList.map((i, index) => (
                  <tr key={i.features + index} className='comparison'>
                    <td>
                      {this.handleLinkBreak(i.features)}
                    </td>
                    {i.playground && <td>
                      {(i.playground === 'true') && <FontAwesomeIcon icon={faCheck} /> }
                      {(i.playground === 'false') && <FontAwesomeIcon icon={faTimes} /> }
                      {(i.playground !== 'true' && i.playground !== 'false') && <Content source={i.playground} />}
                    </td>}
                    {i.starter && <td>
                      {(i.starter === 'true') && <FontAwesomeIcon icon={faCheck} /> }
                      {(i.starter === 'false') && <FontAwesomeIcon icon={faTimes} /> }
                      {(i.starter !== 'true' && i.starter !== 'false') && <Content source={i.starter} />}
                    </td>}
                    {i.pro && <td>
                      {(i.pro === 'true') && <FontAwesomeIcon icon={faCheck} /> }
                      {(i.pro === 'false') && <FontAwesomeIcon icon={faTimes} /> }
                      {(i.pro !== 'true' && i.pro !== 'false') && <Content source={i.pro} />}
                    </td>}
                    {i.enterprise && <td>
                      {(i.enterprise === 'true') && <FontAwesomeIcon icon={faCheck} /> }
                      {(i.enterprise === 'false') && <FontAwesomeIcon icon={faTimes} /> }
                      {(i.enterprise !== 'true' && i.enterprise !== 'false') && <Content source={i.enterprise} />}
                    </td>}
                  </tr>
                ))}
                </tbody>
              </table>
            </div>}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PricingComparison)
