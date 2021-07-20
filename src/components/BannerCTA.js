import React, { Component } from 'react'
import Content from '../components/Content'
import { googleAnalyticsEvent } from '../util/ga'

import '../stylesheets/components/BannerCTA.css'

class BannerCTA extends Component {
  render () {
    const { title, btn } = this.props
    const b = btn.replace(/playground/ig, '<strong>Playground</strong>')
    return (
      <div className='BannerCTA'>
        <div className='banner-wrap'>
          {title && <Content source={title} />}
          {btn && <a href='https://apigcp.nimbella.io/wb/?command=playground' target='_blank' rel='noopener noreferrer nofollow' className='btn btn-app' onClick={() => googleAnalyticsEvent(0, 'CTA Banner', btn)} dangerouslySetInnerHTML={{__html: b}} />}
        </div>
      </div>
    )
  }
}

export default BannerCTA
