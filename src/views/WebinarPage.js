import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMap, faClock } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { googleAnalyticsEvent } from '../util/ga'
import { timestampWithGeolocation } from '../util/time'
import 'moment-timezone'
import AddToCalendar from 'react-add-to-calendar'
import Breadcrumb from '../components/Breadcrumb'

import NavLink from '../components/NavLink'
import Content from '../components/Content'
import JoinCommunity from '../components/JoinCommunity'
import CTABanner from '../components/CTABanner'
import SocialMediaShare from '../components/SocialMediaShare'

import '../stylesheets/views/WebinarPage.css'
import { slugify } from '../util/url'

class WebinarPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isExpired: false,
    }
  }

  componentDidMount () {
    const { date, duration } = this.props.fields
    const end = new Date(new Date(date).getTime() + duration * 60 * 1000)
    const endTimestamp = new Date(timestampWithGeolocation(end, { date: true, time: true, timezone: true })).getTime()
    this.setState({
      isExpired: new Date().getTime() > endTimestamp
    })

    if(!/admin/.test(window.location.pathname)) {
      const hash = window.location.hash.substring(1)
      if(hash) {
        this.handleScroll(hash)
      }
    }
    const mainEle = document.querySelector('#containerElement')
    if(mainEle) {
      mainEle.addEventListener('click', this.handleAnchorLinkClick)
    }
  }

  componentWillUnmount () {
    if(!/admin/.test(window.location.pathname)) {
      document.querySelector('#containerElement').removeEventListener('click', this.handleAnchorLinkClick)
    }
  }

  handleScroll = (id) => {
    const { scrollTop } = this.props
    let offset = 420 + scrollTop * 50
    const element = document.getElementById(id)
    let scroll = !!element
    if (scroll) {
      const elemPos = element.offsetTop
      // console.log(element, elemPos + offset)
      const target = document.querySelector(this.handleSafariEdgeBrowser() ? 'body' : 'html')
      target.scrollTo({ top: elemPos + offset, left: 0, behavior: 'smooth' })
    } else {
      console.log(`Element not found: ${id}`)
    }
  }

  handleAnchorLinkClick = e => {
    e.preventDefault()
    let { hash, href, target, pathname, parentElement, tagName } = e.target
    // console.log(hash, href, target, pathname)
    if(tagName === 'STRONG' || tagName === 'B' || tagName === 'I' || tagName === 'EM') {
      if(parentElement.tagName === 'A') {
        hash = parentElement.hash
        href = parentElement.href
        target = parentElement.target
        pathname = parentElement.pathname
      }
    }
    if((tagName === 'A' || parentElement.tagName === 'A') && href) {
      if(target) {
        // external links in content
        window.open(href, target)
      } else {
        // internal links in content
        if (pathname === window.location.pathname) {
          // in page link
          const id = hash.split('#')[1]
          this.props.history.replace({
            pathname: pathname,
            hash
          })
          this.handleScroll(id)
        } else {
          if (/^mailto:/i.test(href)) {
            let mail = document.createElement('a');
            mail.href = href;
            mail.click();
            return
          }
          // out page link
          this.props.history.replace({
            pathname: pathname,
            hash
          })
        }
      }
    }
  }

  handleSafariEdgeBrowser = () => {
    const ua = navigator.userAgent.toLowerCase()
    if((/safari/.test(ua) && !/chrome/.test(ua)) || /edge/.test(ua)) {
      return true
    } else {
      return false
    }
  }

  render () {
    const { fields: { title, date, duration, location, type, body, speaker, googleForm, excerpt, ctaBanner }, ctaBanners, fbAppId, speakers } = this.props
    const { isExpired } = this.state
    const time = () => {
      const end = new Date(new Date(date).getTime() + duration * 60 * 1000)
      const label = timestampWithGeolocation(date, { time: true, duration, timezone: true })
      return (
        <Fragment>
          {!isExpired && <AddToCalendar
            event={{
              title: title,
              description: excerpt,
              location: '',
              startTime: new Date(timestampWithGeolocation(new Date(date), { date: true, time: true, timezone: true })),
              endTime: new Date(timestampWithGeolocation(new Date(end), { date: true, time: true, timezone: true }))
            }}
            listItems={[
              { apple: 'Apple' },
              { google: 'Google' },
              { outlook: 'Outlook' },
              // { outlookcom: 'Outlook.com' },
              // { yahoo: 'Yahoo' }
            ]}
            buttonLabel={`${label}`}
            buttonWrapperClass='btn link-style'
          />}

          {isExpired && label}
        </Fragment>

      )
    }
    const SpeakerEle = speaker => {
      let o = {}
      if (speaker.preset && speaker.preset.length) {
        o = speakers && speakers.length > 0 && speakers.filter(i => (i.title === speaker.preset[0].speaker))[0]
      } else {
        o = speaker.customized
      }
      if (o === {} || !o) {
        return (<div></div>)
      }
      return (<div className='intro-wrap'>
        <div className='speaker-wrap'>
          <div className='avatar-wrap'>
            {o.image && <div className='avatar d-flex align-items-center' style={{backgroundImage: `url(${o.image})`}} />}
          </div>
          {o.speakerName && <p>
            <a href={o.socialMedia && (o.socialMedia.linkedin||o.socialMedia.github||o.socialMedia.twitter)} onClick={() => googleAnalyticsEvent(5, 'Webinar Page Name', o.name)} target='_blank' rel='noreferrer noopener nofollow'>{o.speakerName}</a>
            <span className='position'>{o.position}</span>
          </p>}
        </div>

        <Content className='introduction' source={o.intro}/>

        {o.socialMedia !== {} && o.socialMedia && <ul className='list-unstyled'>
          {!!o.socialMedia.linkedin && <li><a className='link' href={o.socialMedia.linkedin} rel='noopener noreferrer nofollow' target='_blank' onClick={() => googleAnalyticsEvent(5, 'Webinar Page Social Link', o.name + ' - LinkedIn')}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a></li>}
          {!!o.socialMedia.twitter && <li><a className='link' href={o.socialMedia.twitter} rel='noopener noreferrer nofollow' target='_blank' onClick={() => googleAnalyticsEvent(5, 'Webinar Page Social Link', o.name + ' - Twitter')}>
            <FontAwesomeIcon icon={faTwitter} />
          </a></li>}
          {!!o.socialMedia.github && <li><a className='link' href={o.socialMedia.github} rel='noopener noreferrer nofollow' target='_blank' onClick={() => googleAnalyticsEvent(5, 'Webinar Page Social Link', o.name + ' - Github')}>
            <FontAwesomeIcon icon={faGithub} />
          </a></li>}
        </ul>}
      </div>)
    }
    const breadcrumb = [
      { name: 'Home', link: '/' },
      { name: 'Webinars', link: '/webinars' },
      { name: title, link: `/blog/${slugify(title)}`}
    ]
    return (
      <article className='WebinarPage page'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='WebinarPage--Info col-md-12'>
              <Breadcrumb items={breadcrumb} className='bg-tran banner top-0' />
              <div className='container'>

                <div className='WebinarPage--Meta col-lg-12'>
                  <div className='info'>
                    <NavLink className='btn btn-back' to='/webinars' onClick={() => {googleAnalyticsEvent(8, 'Webinar', 'Go Back to Webinar')}}>Go Back to Webinar</NavLink>
                    <div className='info-top'>
                      <div>
                        {date && (
                          <span className={`WebinarPage--Meta--Date`}>
                          <FontAwesomeIcon icon={faCalendarAlt} /> {timestampWithGeolocation(date, { date: true })}
                        </span>
                        )}

                        {date && (
                          <span className={`WebinarPage--Meta--Time`}>
                          <FontAwesomeIcon icon={faClock} /> {time()}
                        </span>
                        )}

                        {location && (
                          <span className={`WebinarPage--Meta--Location`}>
                          <FontAwesomeIcon icon={faMap} /> {location}
                        </span>
                        )}
                      </div>
                    </div>

                  </div>

                  {title && <h1 className={`WebinarPage--Meta--Title ${type === 'Events' ? ' mb-5' : ''}`}>{title}</h1>}
                </div>

                <div className='col-lg-12 register-wrap'>
                  {!isExpired && <div>
                    {/*<a href='#register-widget' className='btn btn-app'>Register</a>*/}
                    <a
                      href={googleForm}
                      className='btn btn-app'
                      target='_blank'
                      rel='noopener noreferrer nofollow'
                      onClick={googleAnalyticsEvent(7, 'Webinar Top', title)}
                    >Register</a>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-sm-8 col-md-9'>
              <div className='WebinarPage--Content row'>
                <div className='WebinarPage--InnerContent col-md-12' id='containerElement'>
                  <SocialMediaShare
                    title={title}
                    url={`${window.location.origin}${window.location.pathname}`}
                    body={excerpt}
                    align={'left'}
                    fbAppId={fbAppId}
                    showFacebook={true}
                    showTwitter={true}
                    showLinkedin={true}
                  />
                  {body && <Content source={body} />}
                  {ctaBanner && ctaBanner.length > 0 && <CTABanner source={'webinar'} list={ctaBanners} selected={ctaBanner} title={title} />}

                  {!isExpired && <div className={`widget-wrap`}>
                    {/*<a name='register-widget' href='#foo' style={{ position: 'absolute', top: '-90px', marginBottom: '90px'}} />*/}
                    <a
                      href={googleForm}
                      className='btn btn-app'
                      target='_blank'
                      rel='noopener noreferrer nofollow'
                      onClick={googleAnalyticsEvent(7, 'Webinar Bottom', title)}
                    >Register</a>
                  </div>}
                </div>
              </div>
            </div>

            <div className='col-sm-4 col-md-3'>
              <div className='WebinarPage--Speaker row'>
                {speaker && speaker.length && speaker.map((i, index) => (
                  <div className='WebinarPage--Speaker-Item col-md-12' key={i.customized && i.customized.speakerName ? i.customized.speakerName : (i.hasOwnProperty('preset') && i.preset.length > 0 && i.preset[0].speaker)}>
                    {i !== {} && SpeakerEle(i)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <JoinCommunity />
      </article>
    )}
}
export default WebinarPage
