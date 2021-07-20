import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub, faSlack, faFacebook, faMeetup, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons/faMap'
import { googleAnalyticsEvent } from '../util/ga'
import { HashLink } from 'react-router-hash-link'

import Logo from './Logo'
import NavLink from './NavLink'
import '../stylesheets/components/Footer2.css'

export default class Footer2 extends Component {
  render() {
    const { globalSettings } = this.props
    return <Fragment>
      {!/teams-app/i.test(window.location.pathname) && !/microsoft-teams\?/i.test(window.location.hash) && !/microsoft-teams/i.test(window.location.pathname) && <footer className={`Footer`}>
        <div className='container taCenter'>
          <div className='row'>
            <div className='header w-100'>
              <div className='w-100'>
                <div className='col-md-2'>
                  <Link to='/'>
                    <Logo />
                  </Link>
                </div>
                <div className='col-md-4'>
                  <p>Quick Links</p>
                </div>
                <div className='col-md-3'>
                  <p>Resources</p>
                </div>
                <div className='col-md-3'>
                  <p>Featured Blogs</p>
                </div>
              </div>
            </div>

            <div className='col-md-2'>
              <div className='row'>
                <NavLink className='col-lg-12' to='/about'>
                  About Us
                </NavLink>
                <NavLink className='col-lg-12' to='/contact'>
                  Contact
                </NavLink>
                <NavLink className='col-lg-12' to='/webinars'>
                  Webinars
                </NavLink>
                <NavLink className='col-lg-12' to='/newsevents'>
                  News & Events
                </NavLink>
                <NavLink className='col-lg-12' to='/open-source'>
                  Open Source
                </NavLink>
                <HashLink className={`NavLink col-lg-12 ${(window.location.hash === '#investors') ? 'active' : ''}`} to='/about#investors'>
                  Investors
                </HashLink>
                <NavLink className='col-lg-12' to='/join-us'>
                  Join Us
                </NavLink>
              </div>
            </div>

            <div className='col-md-4 lower-hierarchy'>
              <div className='row'>
                <div className='header-mobile'>
                  <p>Quick Links</p>
                </div>

                <NavLink className='col-lg-12' to='/platform'>
                  Serverless App Development Platform
                </NavLink>
                <NavLink className='col-lg-12' to='/integrations/commander/slack'>
                  Commander for Slack
                </NavLink>
                <NavLink className='col-lg-12' to='/pricing/platform'>
                  Pricing Nimbella Platform
                </NavLink>
                <NavLink className='col-lg-12' to='/pricing/commander'>
                  Pricing Nimbella Commander for Slack
                </NavLink>
              </div>
            </div>

            <div className='col-md-3 lower-hierarchy'>
              <div className='row'>
                <div className='header-mobile'>
                  <p>Resources</p>
                </div>

                <NavLink className='col-lg-12' to='/resources/platform/examples-and-use-cases/ocr-tutorial'>
                  OCR Demo Tutorial
                </NavLink>
                <NavLink className='col-lg-12' to='/resources/platform/examples-and-use-cases/qr-code-tutorial'>
                  QR Code Demo Tutorial
                </NavLink>
                <NavLink className='col-lg-12' to='/resources/platform/examples-and-use-cases/page-visit-counter-tutorial'>
                  Page Visit Counter Tutorial
                </NavLink>
                <NavLink className='col-lg-12' to='/resources/commander/slack/overview#what-is-commander'>
                  Slack Commands Resources
                </NavLink>
              </div>
            </div>

            <div className='col-md-3 lower-hierarchy'>
              <div className='row'>
                <div className='header-mobile'>
                  <p>Featured Blogs</p>
                </div>

                <NavLink className='col-lg-12' to='/blog/what-is-serverless-computing-3-reasons-to-start-now'>
                  What is Serverless Computing?
                </NavLink>
                <NavLink className='col-lg-12' to='/blog/how-to-build-a-serverless-slack-app-in-minutes'>
                  How to Build Serverless Slack App?
                </NavLink>
                <NavLink className='col-lg-12' to='/blog/how-to-use-slack-effectively-with-nimbella-commander'>
                  How to use Slack Effectively?
                </NavLink>
                <NavLink className='col-lg-12' to='/blog/how-to-manage-your-netlify-website-from-slack'>
                  How to manage Netlify website?
                </NavLink>
              </div>
            </div>

            <div className='col-md-12'>
              <p className='text-left contact-wrap'>
                {globalSettings.address && (
                  <Fragment>
                    {globalSettings.address},&nbsp;
                    {globalSettings.city && (<span className='mb-3'>{globalSettings.city}&nbsp;&nbsp;<a className='address-icon' href={`https://www.google.com/maps/search/${encodeURI(globalSettings.address + ', ' + globalSettings.city)}`} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(1, 'Footer', globalSettings.address + ', ' + globalSettings.city)}><FontAwesomeIcon icon={faMap} /></a></span>)}
                  </Fragment>
                )}
                <span className='d-block'><a className='NavLink app-color text-center' href={`mailto:${globalSettings.siteEmail}`} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(1, 'Footer', globalSettings.siteEmail)}>{globalSettings.siteEmail}</a></span>
              </p>
              <div className='social-media'>
                <ul>
                  {globalSettings.socialMedia.linkedinUrl && <li>
                    <a href={globalSettings.socialMedia.linkedinUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Linkedin Button')}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>}
                  {globalSettings.socialMedia.twitterUrl && <li>
                    <a href={globalSettings.socialMedia.twitterUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Twitter Button')}>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>}
                  {globalSettings.socialMedia.facebookUrl && <li>
                    <a href={globalSettings.socialMedia.facebookUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Facebook Button')}>
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>}
                  {globalSettings.socialMedia.meetupUrl && <li>
                    <a href={globalSettings.socialMedia.meetupUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Meetup Button')}>
                      <FontAwesomeIcon icon={faMeetup} />
                    </a>
                  </li>}
                  {globalSettings.socialMedia.githubUrl && <li>
                    <a href={globalSettings.socialMedia.githubUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'GitHub Button')}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>}
                  {globalSettings.socialMedia.slackUrl && <li>
                    <a href={globalSettings.socialMedia.slackUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Slack Button')}>
                      <FontAwesomeIcon icon={faSlack} />
                    </a>
                  </li>}
                  {globalSettings.socialMedia.youtubeUrl && <li>
                    <a href={globalSettings.socialMedia.youtubeUrl} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(5, 'Footer', 'Youtube Button')}>
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>}
                </ul>
              </div>
            </div>

            <div className='col-md-12 copyright'>
        <span>Copyright © Nimbella, Inc { new Date().getFullYear() }. All rights reserved.&nbsp;
          <NavLink className='app-color drk-bg' to='/terms' exact>Terms</NavLink>&nbsp;|&nbsp;
          <NavLink className='app-color drk-bg' to='/privacy' exact>Privacy</NavLink>
        </span>
            </div>
          </div>
        </div>
      </footer>}
    </Fragment>
  }
}

