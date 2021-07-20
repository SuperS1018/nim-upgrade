import React, { Component } from 'react'
import { googleAnalyticsEvent } from '../util/ga'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import Content from '../components/Content'

import '../stylesheets/views/Employee.css'

class Employee extends Component {
  render () {
    const { avatar, name, phone, email, address1, address2, title, intro, linkedin, twitter, github } = this.props.fields
    return (
      <div className='Employee page'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='Employee--Head'>
              {title && <h2>{title}</h2>}
              {intro && <Content source={intro} />}
              <div className='avatar' style={{ backgroundImage: `url(${avatar})`}} />
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='Employee--Content'>
              <h3>{name}</h3>
              <ul className='list-unstyled'>
                {address1 && address2 && <li>
                  <FontAwesomeIcon icon={faMap} />&nbsp;
                  <a
                    className='address-icon'
                    href={`https://www.google.com/maps/search/${encodeURI(address1 + ' ' + address2)}`}
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                    onClick={() => googleAnalyticsEvent(1, 'Employee', name)}
                  >
                    {address1},<br />{address2}
                  </a>
                </li>}
                {phone && <li>
                  <FontAwesomeIcon icon={faPhoneAlt} /> <a href={`tel:${phone}`}>{phone}</a>
                </li>}
                {email && <li>
                  <FontAwesomeIcon icon={faEnvelope} /> <a href={`mailto:${email}`}>{email}</a>
                </li>}
              </ul>

              <ul className='list-unstyled social-media'>
                {linkedin && <li><a className='link' href={linkedin} rel='noopener noreferrer nofollow' target='_blank' onClick={() => googleAnalyticsEvent(5, 'Employees', name + ' - LinkedIn')}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a></li>}
                {twitter && <li><a className='link' href={twitter} rel='noopener noreferrer nofollow' target='_blank' onClick={() => googleAnalyticsEvent(5, 'Employees', name + ' - Twitter')}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a></li>}
                {github && <li><a className='link' href={github} rel='noopener noreferrer nofollow' target='_blank' onClick={() => googleAnalyticsEvent(5, 'Employees', name + ' - Github')}>
                  <FontAwesomeIcon icon={faGithub} />
                </a></li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Employee
