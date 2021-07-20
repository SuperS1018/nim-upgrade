import React, { Component } from 'react'

import Content from '../components/Content'

import '../stylesheets/components/BannerPlayground.css'
import { googleAnalyticsEvent } from '../util/ga'

class BannerCTAPlatformSignup extends Component {
  render () {
    const { title, btn } = this.props
    return (
      <div className='BannerPlayground'>
        <div className='banner-wrap'>
          {title && <Content source={title} />}
          {btn && <a href='/signup' target='_blank' rel='noopener noreferrer nofollow' className='btn btn-app' onClick={() => googleAnalyticsEvent(0, 'Platform Signup Banner', btn)}>{btn}
          </a>}
        </div>
      </div>
    )
  }
}

export default BannerCTAPlatformSignup
