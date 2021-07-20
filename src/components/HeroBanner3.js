import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../stylesheets/components/HeroBanner3.css'
import { googleAnalyticsEvent } from '../util/ga'

class HeroBanner extends Component {
  render () {
    const { type, title, subtitle, backgroundImage, bannerHeight } = this.props

    return (
      <div className={`HeroBanner3`}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='HeroBanner--Top col-md-12' style={{
              backgroundImage: `url(${backgroundImage})`,
              paddingTop: `calc(100vh * 0.14 + 82px + ${bannerHeight*20}px)`,
              paddingBottom: `calc(100vh * 0.14 + 32px + ${bannerHeight*20}px)`
            }}>
              <div className='container'>
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
                {type === 2 && <a href='https://apigcp.nimbella.io/wb/' className='btn btn-app' target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(11, 'Hero Banner', 'Try Playground')}>Try Playground</a>}
                {type === 1 && <NavLink className='btn btn-app' to='/signup' onClick={() => googleAnalyticsEvent(0, 'Hero Banner', 'Start for Free')}>Start for <strong>Free</strong></NavLink>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroBanner
