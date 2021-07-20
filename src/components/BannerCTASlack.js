import React, { Component } from 'react'

import '../stylesheets/components/BannerCTASlack.css'
import { googleAnalyticsEvent } from '../util/ga'

class BannerCtaSlack extends Component {
  render () {
    return (
      <div className='BannerCTASlack'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>
                Join our serverless community & ask your questions on&nbsp;
                <img src='/images/icons/slack-icon-full.svg' alt='Slack' />
              </h2>
            </div>

            <div className='col-lg-12'>
              <p>Get responses from our engineers and community experts quickly</p>
            </div>

            <div className='col-lg-12'>
              <a className='btn btn-app' href='https://nimbella-community.slack.com/join/shared_invite/enQtNjg1NzE1OTE3MDI4LWRmOTE0ODVmYzMzODMxNWQ5MDIyMTMxOWZlOTY4NGMxNWUwMmFkM2E2MjRjYWZlNDE1OTUyMjFhNDAyYjZhZDc#/' target='_blank' rel='noreferrer nofollow noopener' onClick={() => { googleAnalyticsEvent(0, 'Homepage', 'Join on Slack') }}>Join Our Community</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BannerCtaSlack
