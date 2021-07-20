import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import '../stylesheets/components/SocialMediaShare.css'

class SocialMediaShare extends Component {
  handleFacebookShare (url, title, fbAppId) {
    const params = `?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`
    window.open(`https://www.facebook.com/sharer/sharer.php${params}&display=popup&ref=plugin&src=like&kid_directed_site=0${fbAppId ? `&app_id=${fbAppId}` : ''}`, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
  }

  handleTwitterShare (url, title) {
    const params = `?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    window.open('https://twitter.com/share' + params, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
  }

  handleLinkedInShare (url, title, content) {
    const params = `&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(content)}&source=Nimbella`
    window.open('https://www.linkedin.com/shareArticle?mini=true' + params, '', 'left=0,top=0,width=650,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
  }

  render () {
    const { title, url, body, align, showFacebook, showTwitter, showLinkedin, fbAppId } = this.props
    return (
      <div className='SocialMediaShare'>
        <ul className={`social-share${align ? ` ${align}` : ''}`}>
          {showFacebook && <li>
            <button className='btn btn-social btn-facebook mr-3' onClick={() => this.handleFacebookShare(url, title, fbAppId)}>
              <FontAwesomeIcon icon={faFacebookSquare} />
              <span className='social-text'>Share</span>
            </button>
          </li>}
          {showTwitter && <li>
            <button className='btn btn-social btn-twitter mr-3' onClick={() => this.handleTwitterShare(url, title)}>
              <FontAwesomeIcon icon={faTwitter} />
              <span className='social-text'>Tweet</span>
            </button>
          </li>}
          {showLinkedin && <li>
            <button className='btn btn-social btn-linkedin' onClick={() => this.handleLinkedInShare(url, title, body)}>
              <FontAwesomeIcon icon={faLinkedin} />
              <span className='social-text'>Share</span>
            </button>
          </li>}
        </ul>
      </div>
    )
  }
}

export default SocialMediaShare
