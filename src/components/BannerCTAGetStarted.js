import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../stylesheets/components/BannerCTAGetStarted.css'
import { googleAnalyticsEvent } from '../util/ga'

class BannerCTAGetStarted extends Component {
  render () {
    return (
      <div className='BannerCTAGetStarted section'>
        <div className='container'>
          <div className='row'>
            <div className='logo-wrap' />
            <div className='col-lg-12'>
              <h2>Ready to get started?</h2>
            </div>
            <div className='btn-wrap'>
              <NavLink className='btn btn-app' to='/signup' onClick={() => { googleAnalyticsEvent(0, 'Homepage', 'Get started') }}>Get Started</NavLink>
              <NavLink className='btn btn-white' to='/proof-of-concept' onClick={() => { googleAnalyticsEvent(0, 'Homepage', 'Online Demo') }}>Request Demo</NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BannerCTAGetStarted
