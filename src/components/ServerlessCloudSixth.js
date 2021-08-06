import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Content from './Content'

import '../stylesheets/components/ServerlessCloudSixth.css'

class ServerlessCloudSixth extends Component {
  render () {
    const { title = '', list = [] } = this.props
    return (
      <div className='ServerlessCloudSixth section padding-large'>
        <div className='container'>
          <div className='row'>
            {title && <div className='col-lg-12'><h2>{title}</h2></div>}
            {list.map((i, index) => (
              <div className={`pb-5 col-lg-${index === 0 ? '3' : ''}${index === 1 ? '4' : ''}${index === 2 ? '5' : ''}`} key={i.title + index}>
                {i.title && <div className='ServerlessCloudSixth--Item'>
                  {i.icon && (/^\//i.test(i.icon) ? <img src={i.icon} alt={i.title} width='36' height='36' /> : <FontAwesomeIcon icon={faGithub} />)}
                  {i.title && <Content source={i.title} />}
                  {i.link && <a href={i.link} target='_blank' rel='noreferrer nofollow noopener'><FontAwesomeIcon icon={faArrowRight} /></a>}
                </div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default ServerlessCloudSixth
