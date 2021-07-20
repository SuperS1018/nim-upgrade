import React, { Fragment, Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
// eslint-disable-next-line
import { faMicrophone, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import AddToCalendar from 'react-add-to-calendar'
import { googleAnalyticsEvent } from '../util/ga'
import { timestampWithGeolocation } from '../util/time'
import 'moment-timezone'

import { slugify } from '../util/url'
import BackgroundImage from './BackgroundImage'

import 'react-add-to-calendar/dist/react-add-to-calendar.min.css'
import '../stylesheets/components/WebinarCard.css'

const defaultEvents = '/images/uploads/default-events.jpg'

class WebinarCard extends Component {
  handleDuration = (duration) => {
    try {
      const d = parseInt(duration)
      if(d >= 1440) {
        const n = Math.round(d / 60 / 24 * 10) / 10
        return `${n} day${n <= 1 ? '' : 's'}`
      } else {
        if(d <= 120) {
          return `${d} mins`
        } else {
          const n = Math.round(d/60 * 10) / 10
          return `${n} hours`
        }
      }
    } catch (err) { console.log(err) }
  }

  handleClick = () => {
    this.props.history.push({
      pathname: '/tools',
      state: {
        webinar: this.props.postItem
      }
    })
  }

  render () {
    const { className, postItem, backgroundImage, tab, isStaging, speakers } = this.props
    const LinkImageElement = (props) => {
      const { title, type, extlink, duration } = props
      const ImageElement = (
        <div className='Webinar-Card--Image'>
          <BackgroundImage
            src={postItem.externalImage || backgroundImage || defaultEvents}
            lazy='true'
            alt={title}
          />
          {!postItem.externalImage && !postItem.postFeaturedImage && <h2>{title}</h2>}
          <span className='duration'>{this.handleDuration(duration)}</span>
        </div>
      )
      if (extlink) {
        return (
          <a href={extlink} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, type, title)}>{ImageElement}</a>
        )
      } else {
        return (
          <Link to={slugify(`/webinars/${title}`)} {...props} onClick={() => googleAnalyticsEvent(8, type, title)}>{ImageElement}</Link>
        )
      }
    }

    const SpeakerEle = (speaker, index) => {
      let o = {}
      if (speaker.preset && speaker.preset.length) {
        o = speakers && speakers.length > 0 && speakers.filter(i => (i.title === speaker.preset[0].speaker))[0]
      } else {
        o = speaker.customized
      }
      if (o === {} || !o) {
        return (<div></div>)
      }

      return (<Fragment>
        {index === 0 ? '' : ' | '}
        <a href={o.socialMedia && (o.socialMedia.linkedin || o.socialMedia.github || o.socialMedia.twitter)} key={o.speakerName + index} target='_blank' rel='noopener noreferrer nofollow'>{o.speakerName}</a>
      </Fragment>)
    }

    return (
      <div className={`col-md-6 d-flex ${className}`}>
        <div className='Webinar-Card w-100 mb-5'>
          <LinkImageElement
            title={postItem.title}
            intlink={postItem.postFeaturedImage}
            extlink={postItem.link}
            duration={postItem.duration}
          />
          {postItem.category && (
            <div className='Webinar-Card--Category'>{postItem.category}</div>
          )}
          <div className='Webinar-Card--Content'>
            {/*{postItem.title && <LinkTitleElement title={postItem.title} extlink={postItem.link} type={postItem.type} />}*/}
            <span className='text text-midGrey NewsEvents--Info'>
            <div className='info-wrap'>
              <FontAwesomeIcon icon={faCalendarAlt} />&nbsp; {timestampWithGeolocation(new Date(postItem.date), { date: true, time: true, timezone: true })}&nbsp;
              {tab === 'upcoming' && <Fragment>
                |&nbsp;
                <AddToCalendar
                  event={{
                    title: postItem.title,
                    description: postItem.excerpt,
                    location: '',
                    startTime: new Date(timestampWithGeolocation(new Date(postItem.date), { date: true, time: true, timezone: true })),
                    endTime: new Date(new Date(timestampWithGeolocation(new Date(postItem.date), { date: true, time: true, timezone: true })).getTime() + postItem.duration * 1000 * 60)
                  }}
                  listItems={[
                    { apple: 'Apple' },
                    { google: 'Google' },
                    { outlook: 'Outlook' },
                    // { outlookcom: 'Outlook.com' },
                    // { yahoo: 'Yahoo' }
                  ]}
                  buttonLabel="Add to Calendar"
                />
                {isStaging && <span onClick={this.handleClick} style={{cursor:'pointer'}}>
                  &nbsp;
                  {/*<FontAwesomeIcon icon={faInfoCircle} />*/}
                </span>}
              </Fragment>}
              {postItem.speaker && <Fragment>
                <div className='clearfix' />
              <FontAwesomeIcon icon={faMicrophone} />&nbsp;
                {postItem.speaker.map((i, index) => (
                  <Fragment key={i.customized && i.customized.speakerName ? (i.customized.speakerName + index) : (i.hasOwnProperty('preset') && i.preset.length > 0 && i.preset[0].speaker + index)}>
                    {SpeakerEle(i, index)}
                  </Fragment>
                ))}
              </Fragment>}
            </div>
          </span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(WebinarCard)
