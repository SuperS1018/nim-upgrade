import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMap, faClock } from '@fortawesome/free-regular-svg-icons'

import Content from '../components/Content'
import { timestampWithGeolocation } from '../util/time'
import '../stylesheets/views/NewsEventsPage.css'
import SocialMediaShare from '../components/SocialMediaShare'
import Breadcrumb from '../components/Breadcrumb'
import { slugify } from '../util/url'

export default ({ fields, ...props }) => {
  const { title, date, duration, location, type, body, excerpt } = fields

  const handleSup = s => {
    return s.replace(/[\u00AE]/ig, '^®^')
  }

  const breadcrumb = [
    { name: 'Home', link: '/' },
    { name: 'News & Events', link: '/newsevents' },
    { name: title, link: `/newsevents/${slugify(title)}`}
  ]
  return (
    <article className='NewsEventsPage page pb-5'>
      <Breadcrumb items={breadcrumb} className='bg-g' />
      <div className='container'>
        <div className='NewsEventsPage--Content'>
          {/* Only show the image for CRN® Names Nimbella as One of the 20 Coolest Cloud Infrastructure Companies to Watch in 2021 */}
          {/crn-names-nimbella-as-one-of-the-20-coolest-cloud-infrastructure-companies-to-watch-in-2021/i.test(window.location.pathname) && <div className='col-md-6 offset-md-3 mt-5'><img src='/images/img/crn-100-coolest-cloud-companiese-2021.png' alt={title} width='100%' className='mx-auto d-block' /></div>}

          {title && <h1 className={`NewsEventsPage--Meta--Title mt-5 ${type === 'Events' ? 'mb-5' : ''}`}><Content source={handleSup(title)} /></h1>}

          {date && (
            <span className={`NewsEventsPage--Meta--Date ${type === 'Events' ? 'events' : ''}`}>
              <span><FontAwesomeIcon icon={faCalendarAlt} /> {timestampWithGeolocation(date, { date: true })}</span>
              <SocialMediaShare
                title={title}
                url={`${window.location.origin}${window.location.pathname}`}
                body={excerpt}
                align='right'
                showFacebook={false}
                showTwitter={true}
                showLinkedin={true}
              />
            </span>
          )}

          {type === 'Events' && duration && (
            <span className={`NewsEventsPage--Meta--Time ${type === 'Events' ? 'events' : ''}`}>
              <FontAwesomeIcon icon={faClock} /> {timestampWithGeolocation(date, { time: true, duration, timezone: true })}
            </span>
          )}

          {location && (
            <span className={`NewsEventsPage--Meta--Location ${type === 'Events' ? 'events' : ''}`}>
              <FontAwesomeIcon icon={faMap} /> {location}
            </span>
          )}

          <div className='NewsEventsPage--InnerContent'>
            {body && <Content source={body} />}
          </div>

        </div>
      </div>
    </article>
  )
}
