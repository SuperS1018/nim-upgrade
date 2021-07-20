import React, { Component } from 'react'
import { googleAnalyticsEvent } from '../util/ga'

import '../stylesheets/components/JoinCommunity.css'

class JoinCommunity extends Component {
  handleClick = () => {
    let cata = 'undefined'
    const { pathname } = window.location
    if (pathname === '/') {
      cata = 'Home'
    }
    if (/webinars/i.test(pathname)) {
      cata = 'Webinar'
    }
    googleAnalyticsEvent(7, `Join Community - ${cata}`, 'Join Now')
    window.open('https://nimbella-community.slack.com/join/shared_invite/enQtNjg1NzE1OTE3MDI4LWRmOTE0ODVmYzMzODMxNWQ5MDIyMTMxOWZlOTY4NGMxNWUwMmFkM2E2MjRjYWZlNDE1OTUyMjFhNDAyYjZhZDc')
  }
  render () {
    return (
      <div className='JoinCommunity'>
        <button className='btn btn-app' onClick={this.handleClick}>Join Our Growing Community</button>
      </div>
    )
  }
}

export default JoinCommunity
