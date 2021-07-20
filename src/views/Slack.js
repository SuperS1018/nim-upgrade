import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { googleAnalyticsEvent } from '../util/ga'

import '../stylesheets/views/Slack.css'

class Slack extends Component {
  render () {
    return (
      <div className='Slack h-100 page'>
        <div className='container section'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='icons'>
                <img src='/images/nimbella-logo-short.svg' alt='Nimbella' />
                <FontAwesomeIcon icon={faPlus} />
                <img src='/images/uploads/slack-logo-tran.svg' alt='Slack' />
              </div>
              <h1 className='w-100 text-center h1'>Join <span className='text text-uppercase font-weight-bold'>Nimbella Community</span> on Slack</h1>
              <a href='https://nimbella-community.slack.com/join/shared_invite/enQtNjg1NzE1OTE3MDI4LWRmOTE0ODVmYzMzODMxNWQ5MDIyMTMxOWZlOTY4NGMxNWUwMmFkM2E2MjRjYWZlNDE1OTUyMjFhNDAyYjZhZDc' target='_blank' rel='noopener noreferrer nofollow' className='btn btn-app m-auto d-block' onClick={() => googleAnalyticsEvent(0, 'Slack', 'signup button click')}>Sign Up</a>
              <p className='text-center'>Already joined? <a href='https://nimbella-community.slack.com/' target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(0, 'Slack', 'login button click')}>Sign in</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Slack
