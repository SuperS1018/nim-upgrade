import React, { Component } from 'react'
import PageBanner from '../components/PageBanner'
import { withRouter } from 'react-router-dom'
import { googleAnalyticsEvent } from '../util/ga'

import '../stylesheets/views/Whitepaper.css'

class Whitepaper extends Component {
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      if(this.props.history.location.state) {
        const { success } = this.props.history.location.state
        if (success !== true) {
          this.props.history.push('/')
        }
      } else {
        this.props.history.push('/')
      }
    }
  }

  render () {
    const { featuredImage, whitepaperImage, pdf } = this.props.sharedData
    return (
      <div className='Whitepaper page'>
        <PageBanner
          title='Thank You'
          subtitle='Click the button below to download your whitepaper.'
          featuredImage={featuredImage}
          small={false}
        />
        <div className='container section'>
          <div className='row'>
            <div className='col-md-4 offset-md-4 text-center'>
              <img src={whitepaperImage} alt='White paper' width='100%' />
              <a className='btn btn-app mt-5' href={pdf} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(0, 'Whitepaper Thank You', `Download PDF - ${pdf}`)}>Download PDF</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Whitepaper)
