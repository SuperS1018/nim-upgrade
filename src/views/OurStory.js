import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'

import Content from '../components/Content'
import SocialMediaShare from '../components/SocialMediaShare'
import { dateFormatted } from '../util/date'
import '../stylesheets/views/SinglePost.css'

class OurStory extends Component {
  render () {
    const { title, date, content, fbAppId, meta: { description } } = this.props.fields
    return (
      <article className='SinglePost light page'>
        <div className='container-fluid'>
          <div className='row SinglePost--Banner'>
            {title && <div className='container'><h1 className='SinglePost--Title'>{title}</h1></div>}
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='SinglePost--Content col-md-9 pt-5'>
              <span className='text text-midGrey Date'>
                <FontAwesomeIcon icon={faCalendarAlt} /> {date && dateFormatted(date)}
              </span>
              <div className='SinglePost--InnerContent'>
                {content && <Content source={content} />}
              </div>
              <SocialMediaShare
                title={title}
                url={`${window.location.origin}${window.location.pathname}`}
                body={description}
                align={'left'}
                fbAppId={fbAppId}
                showFacebook={false}
                showTwitter={true}
                showLinkedin={true}
              />
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default OurStory
