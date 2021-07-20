import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Content from './Content'

import '../stylesheets/components/HeroBanner2.css'
import { googleAnalyticsEvent } from '../util/ga'

class HeroBanner extends Component {
  render () {
    const { heroTop, heroLeft, heroRight } = this.props

    return (
      <div className='HeroBanner2'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='HeroBanner--Top col-md-12' style={{ backgroundImage: `url(${heroTop.backgroundImage})` }}>
              <h1>{heroTop.title}</h1>
            </div>

            <div className='HeroBanner--Left col-md-6' style={{ backgroundImage: `url(${heroLeft.backgroundImage})` }}>
              <div className='row h-100'>
                <div className='text col-lg-8 h-100'>
                  <h2>{heroLeft.title}</h2>
                  <Content source={heroLeft.subtitle} />

                  <div className='btn-wrap'>
                    {/*<NavLink className='btn btn-app mr-3' to={heroLeft.buttonLink}>{heroLeft.buttonTxt}</NavLink>*/}
                    <div className='dual mt-3'>
                      <a className='btn btn-mobile' href='https://nimbella-apigcp.nimbella.io/login.html' target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(0, 'Hero Banner', 'Sign In')}>Sign Up for <strong>Free</strong></a>

                      {/*<NavLink className='btn btn-mobile' onClick={() => googleAnalyticsEvent(0, 'Hero Banner', 'Sign Up for Free')} to='/request/'>Sign Up for <strong>Free</strong></NavLink>*/}
                      <a href='https://apigcp.nimbella.io/wb/' className='btn btn-mobile' target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(0, 'Hero Banner', 'Try Playground')}>Try Playground</a>
                    </div>
                  </div>
                </div>
                <div className='img col-lg-4' style={{ backgroundImage: `url(${heroLeft.featuredImage})` }} />
              </div>
            </div>

            <div className='HeroBanner--Right col-md-6' style={{ backgroundImage: `url(${heroRight.backgroundImage})` }}>
              <div className='row h-100'>
                <div className='text col-lg-8 h-100'>
                  <h2>{heroRight.title}</h2>
                  <Content source={heroRight.subtitle} />

                  <div className='btn-wrap'>
                    {/*<NavLink className='btn btn-app try-btn d-inline-block mr-3' to={heroRight.buttonLink}>{heroRight.buttonTxt}</NavLink>*/}
                    <div className='mt-3 d-inline-block'>
                      <a className='btn btn-slack' href='/commander/slack/install?version=2' target='_blank' onClick={() => googleAnalyticsEvent(0, 'Hero Banner', 'Add to Slack')} rel='noopener noreferrer nofollow'>
                        <img src='/images/slack-icon-trans.png' alt='Slack' width='30' /> Add to <strong>Slack</strong>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='img col-lg-4' style={{ backgroundImage: `url(${heroRight.featuredImage})` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroBanner
