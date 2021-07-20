import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMap } from '@fortawesome/free-regular-svg-icons'
import { googleAnalyticsEvent } from '../util/ga'

import { handleExtIcon, handleExtTitle, slugify } from '../util/url'
import { timestampWithGeolocation } from '../util/time'
import BackgroundImage from './BackgroundImage'
import '../stylesheets/components/NewsEventsCard.css'
import Content from './Content'

const defaultNews = '/images/uploads/default-news.jpg'
const defaultEvents = '/images/uploads/default-events.jpg'

const NewsEventsCard = ({ postItem, className = '', ...props }) => {
  const handleDuration = (duration) => {
    try {
      const d = parseInt(duration)
      if (d >= 1440) {
        const n = Math.round(d / 60 / 24 * 10) / 10
        return `${n} day${n <= 1 ? '' : 's'}`
      } else {
        if (d <= 120) {
          return `${d} mins`
        } else {
          const n = Math.round(d/60 * 10) / 10
          return `${n} hour${n <= 1 ? '' : 's'}`
        }
      }
    } catch (err) { console.log(err) }
  }

  const LinkImageElement = (props) => {
    const { title, type, extimg, intlink, extlink, duration } = props
    const ImageElement = (
      <div className='NewsEvents-Card--Image relative'>
        <span className={`NewsEvents-Card--Type ${type}`}>{type}</span>
        <BackgroundImage
          src={extimg || intlink || ((type === 'News') ? defaultNews : defaultEvents)}
          lazy='true'
          alt={title}
        />
        {duration > 0 && type === 'Events' && <span className='duration'>{handleDuration(duration)}</span>}
      </div>
    )
    if (extlink) {
      return (
        <a href={extlink} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, type, title)}>{ImageElement}</a>
      )
    } else {
      return (
        <Link to={slugify(`/newsevents/${title}`)} {...props} onClick={() => googleAnalyticsEvent(8, type, title)}>{ImageElement}</Link>
      )
    }
  }

  const handleSup = s => {
    return s.replace(/[\u00AE]/ig, '^®^')
  }

  const LinkTitleElement = (props) => {
    const { title, extlink, type } = props
    if (extlink) {
      return (
        <a href={extlink} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, type, title)}>
          <h5 className='NewsEvents-Card--Title'>{title}</h5>
        </a>
      )
    } else {
      return (
        <Link
          to={slugify(`/newsevents/${title}`)}
          {...props}
          onClick={() => googleAnalyticsEvent(8, type, title)}
        >
          <h5 className='NewsEvents-Card--Title'><Content source={handleSup(title)} /></h5>
        </Link>
      )
    }
  }

  return (
    <div className={`col-lg-4 d-flex ${className}`}>
      <div className='NewsEvents-Card w-100 mb-5'>
        <LinkImageElement
          title={postItem.title}
          type={postItem.type}
          intlink={postItem.postFeaturedImage}
          extimg={postItem.externalImage}
          extlink={postItem.link}
          duration={postItem.duration}
        />
        {postItem.category && (
          <div className='NewsEvents-Card--Category'>{postItem.category}</div>
        )}
        <div className='NewsEvents-Card--Content'>
          {postItem.title && <LinkTitleElement title={postItem.title} extlink={postItem.link} type={postItem.type} />}
          <span className='text text-midGrey NewsEvents--Date'>
            <div className='date-wrap'>
              <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;
              {timestampWithGeolocation(postItem.date, { date: true, time: postItem.type.toLowerCase() === 'events' && postItem.duration <= 24 * 60 ? true : false, timezone: postItem.type.toLowerCase() === 'events' ? true : false })}
              {postItem.type.toLowerCase() === 'events' && postItem.location && <Fragment><FontAwesomeIcon className='ml-4' icon={faMap} /> {postItem.location}</Fragment>}
            </div>

            {postItem.link && handleExtIcon(postItem.link) && <img src={handleExtIcon(postItem.link)} alt='external link' height='15' title={`Source from ${handleExtTitle(postItem.link)}`} />}
          </span>
          {postItem.excerpt && (
            <Content source={postItem.excerpt.length > 140 ? postItem.excerpt.slice(0, 137) + '...' : postItem.excerpt} className='NewsEvents-Card--Excerpt' />
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsEventsCard
