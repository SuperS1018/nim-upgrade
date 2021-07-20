import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../stylesheets/components/HomeLearnPlatform.css'
import { googleAnalyticsEvent } from '../util/ga'

class HomeLearnPlatform extends Component {
  render () {
    return (
      <div className='HomeLearnPlatform section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>Want to learn more about Nimbella Serverless Platform?</h2>
            </div>
            <div className='btn-wrap'>
              <a className='btn btn-green' href='https://docs.nimbella.com' target='_blank' rel='noreferrer nofollow noopener' onClick={() => { googleAnalyticsEvent(0, 'Homepage', 'Documentation') }}>Documentation</a>
              <NavLink className='btn btn-green' to='/blog' onClick={() => { googleAnalyticsEvent(0, 'Homepage', 'Blog') }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeLearnPlatform
