import React, { Component } from 'react'
import AuthComponent from '../components/AuthComponent'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { isCMS } from '../util/misc'

import '../stylesheets/components/HeroBanner1.css'
import { googleAnalyticsEvent } from '../util/ga'
import Content from './Content'

class HeroBanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lock: null,
      newUser: false,
      setupLink: ''
    }
  }

  handleAuthenticatedCondition = () => {
    let forParam = new URLSearchParams(window.location.search).get('for')
    const { lock } = this.props

    if(/netlify\/#auth=/i.test(window.location.href)) {
      forParam += window.location.hash
    }

    forParam && this.setState({ forParam })
    lock && this.setState({ lock })
  }

  handleEmailExisted = (current, list = '') => {
    return list.split(' ').filter(i => i === current).length > 0
  }

  handleConsoleLink = () => {
    const { idToken, userMetadata } = this.props

    let forParam = window.localStorage.getItem('_forParam')
    if(/netlify\/#auth=/i.test(forParam)) {
      forParam = `netlify,${forParam.split('=')[1]}`
    }

    const baseURL = 'https://portal-apigcp.nimbella.io'

    if(idToken) {
      if(userMetadata) {
        const _for = userMetadata.for
        if(_for) {
          this.setState({ setupLink: `${baseURL}/login.html${_for ? `?for=${_for}` : ''}${idToken ? `&token=${idToken}` : ''}` })
        }
      } else if(forParam) {
        this.setState({ setupLink: `${baseURL}/login.html${forParam ? `?for=${forParam}` : ''}${idToken ? `&token=${idToken}` : ''}` })
      } else {
        this.setState({ setupLink: `${baseURL}/login.html${idToken ? `?token=${idToken}` : ''}` })
      }
    }
  }

  componentDidMount () {
    this.handleAuthenticatedCondition()
    this.handleConsoleLink()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(prevProps !== this.props) {
      this.handleAuthenticatedCondition()

      // Check if new user
      if (this.props.profile) {
        const emailList = window.localStorage.getItem('new-user') ? window.atob(window.localStorage.getItem('new-user')) : ''
        const { email = '' } = this.props.profile
        this.setState({ newUser: !this.handleEmailExisted(email, emailList)})
      }

      // Define Console link
      this.handleConsoleLink()
    }
  }

  render () {
    const { title, subtitle, note, authChecking, profile = {} } = this.props
    const { lock, newUser, setupLink } = this.state
    return (
      <div className={`HeroBanner1`}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-7 align-self-center'>
              {title && <div className='row'><div className='col-lg-11'><h1>{title}</h1></div></div>}
              {subtitle && <div className='row'><div className='col-lg-10'><Content source={subtitle} /></div></div>}
              {note && <p className='note'>{note}</p>}
              <NavLink className='btn btn-app mt-5' to='/proof-of-concept' onClick={ () => {googleAnalyticsEvent(0, 'Hero Banner', 'Request a demo')} }>Request Demo</NavLink>
            </div>

            <div className='col-md-6 col-lg-5 noPadding'>
              {!isCMS() && <div className='HeroBanner--Form'>
                {profile.nickname && <div className='logged-in'>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <h2>Welcome {newUser ? '' : 'back'}<br />{profile.nickname}</h2>
                  <h3>You are logged into Nimbella's Cloud</h3>
                  <p>If you are in the process of setting up your account or if you are returning and want to get to the Cloud Management Console, please click the Console button below.</p>
                  <button className='btn btn-app' onClick={() => {googleAnalyticsEvent(7, 'Hero Banner', 'Console'); window.open(setupLink)}}>Console</button>
                </div>}
                {!profile.nickname && <AuthComponent type='signup' lock={lock} authChecking={authChecking} />}
              </div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroBanner
