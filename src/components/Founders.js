import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ModalComponent from '../components/Modal'
import { googleAnalyticsEvent } from '../util/ga'
import PropTypes from 'prop-types'

import '../stylesheets/components/Founders.css'

class Founders extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false,
      name: '',
      intro: ''
    }
  }

  handleToggle = (name = '', intro = '') => {
    this.setState({
      modal: true,
      name,
      intro
    })
    googleAnalyticsEvent(6, 'Founders', name)
  }

  handleClose = modal => {
    this.setState({
      modal
    })
  }

  render() {
    const { list } = this.props
    const { modal, name, intro } = this.state
    return (
      <div className='Founders section thin'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='text-center text-uppercase section-title'>Our Founders</h2>
            </div>
            <ModalComponent modal={modal} name={name} intro={intro} close={this.handleClose} />
            {list.map((i, index) => (
              <div className={`Founders--Item col-md-${12%list.length === 0 ? (12/list.length) : '3'}`} key={i.name + index}>
                <div className='avatar d-flex align-items-center' style={{backgroundImage: `url(${i.avatar})`}}>
                  {/*<a className='link' href={i.linkedin} rel='noopener noreferrer nofollow' target='_blank' onClick={() => googleAnalyticsEvent(5, 'Founders', i.name)}>*/}
                    {/*<FontAwesomeIcon icon={faLinkedin} />*/}
                  {/*</a>*/}
                </div>
                <button className='btn link-style' onClick={() => this.handleToggle(i.name, i.intro)}><h6 className='text-center mb-0'>{i.name}</h6></button>
                <p className='text-center'>{i.title}</p>
                <ul className='list-unstyled'>
                  {i.linkedin && <li><a className='link' href={i.linkedin} rel='noopener noreferrer nofollow' target='_blank' onClick={() => googleAnalyticsEvent(5, 'Founders', i.name + ' - LinkedIn')}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a></li>}
                  {i.twitter && <li><a className='link' href={i.twitter} rel='noopener noreferrer nofollow' target='_blank' onClick={() => googleAnalyticsEvent(5, 'Founders', i.name + ' - Twitter')}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a></li>}
                  {i.github && <li><a className='link' href={i.github} rel='noopener noreferrer nofollow' target='_blank' onClick={() => googleAnalyticsEvent(5, 'Founders', i.name + ' - Github')}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a></li>}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

Founders.propTypes = {
  list: PropTypes.array
}

export default Founders
