import React, { Component, Fragment } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import '../stylesheets/views/Tools.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

class Tools extends Component {
  constructor (props) {
    super(props)
    this.state = {
      webinar: {},
      webinarLink: '',
      copied: false,
      isLoading: true
    }
  }

  componentDidMount () {
    if(/nimbella\.com/i.test(window.location.hostname)) {
      this.props.history.replace('/')
    } else {
      if(this.props.history.location.state) {
        const { webinar } = this.props.history.location.state
        this.setState({ webinar, isLoading: false })
      } else {
        this.props.history.replace('/')
      }
    }
  }

  handleDate = (date, duration) => {
    if(date) {
      let d = duration ? new Date(date).getTime() + duration * 60 * 1000 : date
      const D = new Date(d)
      const a = D.toISOString().split('-')
      return `${a[0]}${a[1]}${D.getDate()}T${D.getHours()}${D.getMinutes() < 10 ? '0' + D.getMinutes() : D.getMinutes()}00Z`
    }
  }

  handleText = s => {
    if(s) {
      return encodeURI(s).indexOf('#') === -1 ? encodeURI(s) : encodeURI(s).replace(/#/ig, '%23')
    } else {
      return s
    }
  }

  handleWebinarLink = e => {
    const v = e.target.value
    // this.setState({ webinarLink: v ? '%20' + encodeURI(v) : '' })
    this.setState({ webinarLink: v || '' })
  }

  handleAllDay = s => {
    const parse = s ? parseInt(s) : 0
    return (parse >= 60 * 24) ? true : false
  }

  handleDuration = duration => {
    if(duration) {
      const h = Math.floor(duration/60)
      const m = duration%60
      return `${h}:${m}`
    }
    return duration
  }

  handleCopied = () => {
    this.setState({copied: true})
    let tmr = setTimeout(() => {
      this.setState({copied: false})
      clearTimeout(tmr)
    }, 1000)
  }

  render () {
    const { webinar, webinarLink, isLoading } = this.state
    return (
      <Fragment>
        {isLoading && <div className='loader-wrap'>
          <img src='/images/loading_nim.gif' alt='' width='240' height='180' />
          <div className='mask' />
        </div>}
        {!isLoading && <div className='Tools page'>
          <div className='container section'>
            <div className='row'>
              <p className={`Content--Copied ${this.state.copied ? 'show-msg' : ''}`}>copied</p>
              <div className='col-lg-12'>
                <h1>Tools</h1>
              </div>
              <div className='col-lg-12'>
                <form action='' className='border p-5'>
                  <h2>Add to Calendar</h2>
                  <label htmlFor='link'>
                    Webinar Link&nbsp;
                    <input name='link' type="text" className='w-100' placeholder='' onChange={this.handleWebinarLink} />
                  </label>
                  <h5>Add Outlook to Calendar</h5>
                  <code>
                    {`https://samchao-m2z6icgqih8e-apigcp.nimbella.io/api/ics/download?url=${webinarLink}&fromDate=${this.handleDate(webinar.date)}&toDate=${this.handleDate(webinar.date, webinar.duration)}&title=${this.handleText(webinar.title)}&desc=${webinar.excerpt}`}
                  </code>
                  <CopyToClipboard text={`https://samchao-m2z6icgqih8e-apigcp.nimbella.io/api/ics/download?url=${webinarLink}&fromDate=${this.handleDate(webinar.date)}&toDate=${this.handleDate(webinar.date, webinar.duration)}&title=${this.handleText(webinar.title)}&desc=${webinar.excerpt}`} onCopy={() => this.handleCopied()}>
                    <span className='copy-to-clipboard-btn'><FontAwesomeIcon icon={faCopy}/></span></CopyToClipboard>
                  <h5>Add Google to Calendar</h5>
                  <code>
                    {`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${this.handleDate(webinar.date)}/${this.handleDate(webinar.date, webinar.duration)}&location=&text=${this.handleText(webinar.title)}&details=${this.handleText(webinar.excerpt)}%20${webinarLink}`}</code> <CopyToClipboard text={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${this.handleDate(webinar.date)}/${this.handleDate(webinar.date, webinar.duration)}&location=&text=${this.handleText(webinar.title)}&details=${this.handleText(webinar.excerpt)}%20${webinarLink}`} onCopy={() => this.handleCopied()}>
                  <span className='copy-to-clipboard-btn'><FontAwesomeIcon icon={faCopy}/></span></CopyToClipboard>

                  <h5>Add Yahoo to Calendar</h5>
                  <code>
                    {`https://calendar.yahoo.com/?v=60&view=d&type=20&title=${this.handleText(webinar.title)}&st=${this.handleDate(webinar.date)}&dur=${this.handleDuration(webinar.duration)}&desc=${this.handleText(webinar.excerpt)}%20${webinarLink}&in_loc=`}
                  </code>
                  <CopyToClipboard text={`https://calendar.yahoo.com/?v=60&view=d&type=20&title=${this.handleText(webinar.title)}&st=${this.handleDate(webinar.date)}&dur=${this.handleDuration(webinar.duration)}&desc=${this.handleText(webinar.excerpt)}%20${webinarLink}&in_loc=`} onCopy={() => this.handleCopied()}>
                    <span className='copy-to-clipboard-btn'><FontAwesomeIcon icon={faCopy}/></span></CopyToClipboard>
                </form>
              </div>
            </div>
          </div>
        </div>}
      </Fragment>
    )
  }
}

export default Tools
