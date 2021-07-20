import React, { Component } from 'react'

import PageBanner from '../components/PageBanner'
import WebinarSection from '../components/WebinarSection'
import PostCard from '../components/PostCard'
import JoinCommunity from '../components/JoinCommunity'

import '../stylesheets/views/Webinar.css'
import { NavLink } from 'react-router-dom'
import { slugify } from '../util/url'
import { timestampWithGeolocation } from '../util/time'

class Webinar extends Component {
  static defaultProps = {
    limit: 2
  }

  constructor (props) {
    super(props)
    this.state = {
      upcomingWebinars: [],
      pastWebinars: []
    }
  }

  componentDidMount () {
    let upcomingWebinars = [];
    let pastWebinars = [];
    const { webinars } = this.props
    webinars && webinars.forEach(i => {
      if(new Date(timestampWithGeolocation(new Date(new Date(i.date).getTime() + i.duration * 60 * 1000), {date: true, time: true, timezone: true})).getTime() >= Date.now()) {
        upcomingWebinars.unshift(i)
      } else {
        pastWebinars.unshift(i)
      }
    })
    upcomingWebinars.length && upcomingWebinars.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    pastWebinars.length && pastWebinars.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    this.setState({ upcomingWebinars, pastWebinars })
  }

  render () {
    const { webinars, posts, limit, isStaging, speakers, fields: { title, subtitle, featuredImage } } = this.props
    const { upcomingWebinars, pastWebinars } = this.state
    const visiblePosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      // show all unlesss you set a limit.
      .slice(0, limit || posts.length)
    return (
      <main className='Webinar page'>
        <div className='screen-height'>
          <PageBanner
            title={title}
            subtitle={subtitle}
            featuredImage={featuredImage}
            small={false}
          />

          <div className='container mt-5'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2>Upcoming Webinars</h2>
              </div>
              {!!upcomingWebinars.length && <WebinarSection posts={upcomingWebinars} tab={'upcoming'} isStaging={isStaging} speakers={speakers} />}
              {!upcomingWebinars.length && <div className='container'><div className='row'><div className='col-lg-12'><p className='mb-5 pb-5'>Stay tuned: New webinars coming soon</p></div></div></div>}

              <div className='col-lg-12'>
                <h2>Past Webinars</h2>
              </div>
              {!!pastWebinars.length && <WebinarSection posts={pastWebinars} tab={'past'} isStaging={isStaging} speakers={speakers} />}
              {!pastWebinars.length && <div className='container'><div className='row'><div className='col-lg-12'><p className='mt-5'>Currently no past webinar</p></div></div></div>}
            </div>
            {/*<ul className='nav-tabs'>*/}
              {/*<li className={`nav-item${tab === 'past' ? ' active' : ''}`} onClick={() => this.setState({ tab: 'past' })}>Past</li>*/}
              {/*<li className={`nav-item${tab === 'upcoming' ? ' active' : ''}`} onClick={() => this.setState({ tab: 'upcoming' })}>Upcoming</li>*/}
            {/*</ul>*/}
          </div>

          {/*{(!!upcomingWebinars.length || !!pastWebinars.length) && <WebinarSection posts={tab === 'upcoming' ? upcomingWebinars : pastWebinars} tab={tab} isStaging={isStaging} />}*/}
        </div>

        <div className='Webinar--Blog screen-height bg-color'>
          <div className='container'>
            <h2 className='text-center align-bottom'>New blog posts and updates for developers</h2>
            {!!visiblePosts.length && (
              <div className='section'>
                <div className='row'>
                  {visiblePosts.map((postItem, index) => (
                    <PostCard key={postItem.title + index} postItem={postItem} cardIndex={index + 1} className={'col-md-6'} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='snapshot-fix'>
          <ul>
            {webinars.map((i, index) => (
              <li key={i.title + index}>
                {i.title && <NavLink to={slugify(`/webinars/${i.title}`)}>{i.title}</NavLink>}
              </li>
            ))}
          </ul>
        </div>
        <JoinCommunity />
      </main>
    )
  }
}

export default Webinar
