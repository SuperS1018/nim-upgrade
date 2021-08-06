import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faSlack,
  faFacebook,
  faMeetup,
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons/faMap'
import { faRss } from '@fortawesome/free-solid-svg-icons'
import { googleAnalyticsEvent } from '../util/ga'
import NavLink from './NavLink'

import '../stylesheets/components/Footer.css'

export default ({ globalSettings }) => (
  <footer className='Footer'>
    <div className='container taCenter'>
      <div className='row'>
        <div className='header w-100'>
          <div className='w-100'>
            <div className='col-md-3'>
              <p>Product</p>
            </div>
            <div className='col-md-3'>
              <p>Resources</p>
            </div>
            <div className='col-md-3'>
              <p>Company</p>
            </div>
            <div className='col-md-3'>
              <p>Contact us</p>
            </div>
          </div>
        </div>

        <div className='col-md-3 lower-hierarchy'>
          <div className='row'>
            <div className='header-mobile'>
              <p>Product</p>
            </div>

            <NavLink className='col-lg-12' to='/platform'>
              Nimbella Serverless Platform
            </NavLink>
            <NavLink className='col-lg-12' to='/integrations/commander'>
              Nimbella Commander
            </NavLink>
            <NavLink className='col-lg-12' to='/integrations/postman'>
              Postman Integration
            </NavLink>
            <NavLink className='col-lg-12' to='/integrations/netlify'>
              Nimbella add-on for Netlify
            </NavLink>
          </div>
        </div>

        <div className='col-md-3 lower-hierarchy'>
          <div className='row'>
            <div className='header-mobile'>
              <p>Resources</p>
            </div>

            {/*<NavLink className='col-lg-12' to='/resources/platform/setting-up'>*/}
            {/*  Documentation*/}
            {/*</NavLink>*/}
            <NavLink className='col-lg-12' to='/blog'>
              Blog
            </NavLink>
            {/*<NavLink className='col-lg-12' to='/resources/platform/examples-and-use-cases'>*/}
            {/*  Use Cases*/}
            {/*</NavLink>*/}
            <NavLink className='col-lg-12' to='/webinars'>
              Webinars
            </NavLink>
            <NavLink className='col-lg-12' to='/newsevents'>
              News & Events
            </NavLink>
            <NavLink className='col-lg-12' to='/whitepaper'>
              Business Whitepaper
            </NavLink>
            <NavLink className='col-lg-12' to='/make-serverless-frictionless-and-portable-whitepaper'>
              Technical Whitepaper
            </NavLink>
            <NavLink className='col-lg-12' to='/open-source'>
              Open Source
            </NavLink>
            <NavLink className='col-lg-12' to='/case-study'>
              Case Study
            </NavLink>
            <div className='dropdown'>
              <button className={`NavLink col-lg-12 ${/react/.test(window.location.pathname) ? 'active' : ''}`}>Frameworks</button>
              <div className='dropdown-content'>
                <NavLink className='nav-link' to='/react'>
                  React
                </NavLink>
                <NavLink className='nav-link' to='/python'>
                  Python
                </NavLink>
                <NavLink className='nav-link' to='/node'>
                  Node
                </NavLink>
                <NavLink className='nav-link' to='/go'>
                  Go
                </NavLink>
                <NavLink className='nav-link' to='/scala'>
                  Scala
                </NavLink>
                <NavLink className='nav-link' to='/java'>
                  Java
                </NavLink>
                <NavLink className='nav-link' to='/ruby'>
                  Ruby
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-3  lower-hierarchy'>
          <div className='row'>
            <div className='header-mobile'>
              <p>Company</p>
            </div>

            <NavLink className='col-lg-12' to='/' exact>
              Home
            </NavLink>
            <NavLink className='col-lg-12' to='/about'>
              About
            </NavLink>
            <NavLink className='col-lg-12' to='/contact'>
              Support
            </NavLink>
            <NavLink className='col-lg-12' to='/join-us'>
              Careers
            </NavLink>
          </div>
        </div>

        <div className='col-md-3 lower-hierarchy'>
          <div className='row'>
            <div className='header-mobile'>
              <p>Contact us</p>
            </div>

            <div className='col-lg-12'>
              <p className='text-left contact-wrap'>
                {globalSettings.address && (
                  <Fragment>
                    {globalSettings.address},&nbsp;
                    {globalSettings.city && (<span className='mb-3'>{globalSettings.city}&nbsp;&nbsp;<a className='address-icon' href={`https://www.google.com/maps/search/${encodeURI(globalSettings.address + ' ' + globalSettings.city)}`} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(1, 'Footer', globalSettings.address + ' ' + globalSettings.city)}><FontAwesomeIcon icon={faMap} /></a></span>)}
                  </Fragment>
                )}
                <a className='NavLink app-color d-block' href={`mailto:${globalSettings.siteEmail}`} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(1, 'Footer', globalSettings.siteEmail)}>{globalSettings.siteEmail}</a>
              </p>
            </div>
          </div>
        </div>

        <div className='copyright-wrap'>
          <div className='col-sm-6 col-md-5 pull-right'>
            <div className='social-media'>
              <ul>
                {globalSettings.socialMedia.linkedinUrl && <li>
                  <a href={globalSettings.socialMedia.linkedinUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Linkedin' +
                    ' Button')} title='LinkedIn'>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>}
                {globalSettings.socialMedia.twitterUrl && <li>
                  <a href={globalSettings.socialMedia.twitterUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Twitter' +
                    ' Button')} title='Twitter'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>}
                {globalSettings.socialMedia.instagramUrl && <li>
                  <a href={globalSettings.socialMedia.instagramUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Instagram Button')} title='Instagram'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>}
                {globalSettings.socialMedia.facebookUrl && <li>
                  <a href={globalSettings.socialMedia.facebookUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Facebook' +
                    ' Button')} title='Facebook'>
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>}
                {globalSettings.socialMedia.meetupUrl && <li>
                  <a href={globalSettings.socialMedia.meetupUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Meetup' +
                    ' Button')} title='Meetup'>
                    <FontAwesomeIcon icon={faMeetup} />
                  </a>
                </li>}
                {globalSettings.socialMedia.githubUrl && <li>
                  <a href={globalSettings.socialMedia.githubUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'GitHub' +
                    ' Button')} title='GitHub'>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>}
                {globalSettings.socialMedia.slackUrl && <li>
                  <a href={globalSettings.socialMedia.slackUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Slack' +
                    ' Button')} title='Slack'>
                    <FontAwesomeIcon icon={faSlack} />
                  </a>
                </li>}
                {globalSettings.socialMedia.youtubeUrl && <li>
                  <a href={globalSettings.socialMedia.youtubeUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Youtube' +
                    ' Button')} title='YouTube'>
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>}
                <li>
                  <a href='/rss.xml' target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'RSS Feed')} title='RSS Feed'>
                    <FontAwesomeIcon icon={faRss} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-sm-6 col-md-7 copyright pull-left'>
            <span>Copyright © Nimbella, Inc {new Date().getFullYear()}. All rights reserved.&nbsp;
              <NavLink className='app-color drk-bg' to='/terms' exact>Terms</NavLink>&nbsp;|&nbsp;
              <NavLink className='app-color drk-bg' to='/privacy' exact>Privacy</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
