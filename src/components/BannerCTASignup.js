import React, { Component } from 'react'

import Content from '../components/Content'

import '../stylesheets/components/BannerCTASignup.css'
import { googleAnalyticsEvent } from '../util/ga'

class BannerCTASignup extends Component {
  render () {
    const { title, btn } = this.props.data
    return (
      <div className='BannerCTASignup'>
        <div className='banner-wrap'>
          {title && <Content source={title} />}
          {btn && <a href='/commander/slack/install?version=2' target='_blank' rel='noopener noreferrer nofollow' className='btn btn-app' onClick={() => googleAnalyticsEvent(0, 'Product Commander', btn)}>{btn}
          </a>}
        </div>
      </div>
    )
  }
}

export default BannerCTASignup
