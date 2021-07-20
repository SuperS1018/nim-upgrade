import React, { Component } from 'react'
import { googleAnalyticsEvent } from '../util/ga'
import { slugify } from '../util/url'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop'
import { timestampWithGeolocation } from '../util/time'

import '../stylesheets/components/UpcomingWebinarBanner.css'

class UpcomingWebinarBanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timeleft: ''
    }
  }

  componentDidMount () {
    this.countdownInterval = setInterval(() => {
      this.handleCountdown()
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.countdownInterval)
  }

  handleCountdown = () => {
    const { webinar: { date = 0 } } = this.props
    const now = new Date().getTime()
    const webinarDate = new Date(timestampWithGeolocation(new Date(date), {date: true, time: true, timezone: true})).getTime()
    const left = webinarDate - now
    const d = 60 * 60 * 24 * 1000
    const h = 60 * 60 * 1000
    const m = 60 * 1000
    const s = 1000
    const days = Math.floor(left / d) || 0
    const hours = Math.floor(left%d / h) || 0
    const minutes = Math.floor(left%d%h / m) || 0
    const seconds = Math.floor(left%d%h%m / s) || 0

    if(left >= 0) {
      this.setState({ timeleft: `${days > 0 ? `<b>${days}</b> Days` : ''} ${hours > 0 ? `<b>${hours}</b> Hours` : ''} <b>${minutes}</b> Minutes <b>${seconds}</b> Seconds` })
    } else {
      // this.props.refreshWebinarFunc() // Commented out due to Webinar banner is not going to show
    }
  }

  render () {
    const { timeleft } = this.state
    const { webinar } = this.props
    return (
      <div className='UpcomingWebinarBanner'>
        {!/(^\/docs|\/resources|teams-app|^\/pricing\/commander|^\/integrations\/commander\/microsoft-teams|^\/terms|^\/privacy|^\/trademark|^\/acceptable-use|^\/contact)/i.test(window.location.pathname) && webinar.title && <div>
          <div className='UpcomingWebinarBanner--Content'>
            <span className='title'><FontAwesomeIcon icon={faLaptop} />&nbsp;<strong>Upcoming Webinar&nbsp; - &nbsp;</strong><a href={`/webinars/${slugify(webinar.title)}`} onClick={() => googleAnalyticsEvent(0, 'Upcoming Webinar Banner', webinar.title)} title={webinar.title}>{webinar.title}</a></span>
            <span>
              <span dangerouslySetInnerHTML={{__html: timeleft}} />&nbsp;&nbsp;
              <a className='btn btn-danger btn-small' href={`/webinars/${slugify(webinar.title)}`} onClick={() => googleAnalyticsEvent(0, 'Upcoming Webinar Banner', webinar.title)}>Register</a>
            </span>
          </div>
        </div>}
      </div>
    )
  }
}

export default UpcomingWebinarBanner
