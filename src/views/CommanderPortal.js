import React, { Component } from 'react'

import '../stylesheets/views/CommanderPortal.css'

class CommanderPortal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      _for: '',
      forParam: '',
      idToken: '',
      authChecking: false
    }
  }

  componentDidMount () {
    let forParam = ''
    if(/netlify\/#auth=/i.test(window.location.href)) {
      forParam = this.handleNetlifyUsers(window.location.hash)
    } else {
      forParam = new URLSearchParams(window.location.search).get('for')
    }
    this.setState({ forParam })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(prevProps.authChecking !== this.props.authChecking) {
      const { idToken, authChecking, userMetadata } = this.props
      const { forParam } = this.state
      const { search, hash } = window.location
      this.setState({ authChecking })
      if(authChecking === false) {
        if(idToken) {
          if(forParam === null) {
            if(userMetadata !== undefined) {
              if(/netlify\/#auth=/i.test(userMetadata)) {
                window.location.replace(`https://portal-apigcp.nimbella.io/login.html?for=${this.handleNetlifyUsers(userMetadata.for)}&token=${idToken}`)
              } else {
                window.location.replace(`https://portal-apigcp.nimbella.io/login.html?for=${userMetadata.for}&token=${idToken}`)
              }
            } else {
              window.location.replace(`https://portal-apigcp.nimbella.io/login.html?token=${idToken}`)
            }
          } else {
            window.location.replace(`https://portal-apigcp.nimbella.io/login.html?for=${forParam}&token=${idToken}`)
          }
        } else {
          this.props.history.push(`/login${search}${hash}`)
        }
      }
    }
  }

  handleNetlifyUsers = param => {
    return `netlify,${param.split('#auth=')[1]}`
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  render () {
    const { profile } = this.props
    const { _for, idToken, authChecking, forParam } = this.state
    return (
      <div className='CommanderPortal page'>
        {(!idToken || !_for) && authChecking === true && <div className='loader-wrap'>
          <img src='/images/loading_nim.gif' alt='' width='240' height='180' />
          <div className='mask' />
        </div>}

        {authChecking === false && <div className='CommanderPortal--Banner' style={{ height: '60vh'}}>
          <div className='container'>
            {!idToken && authChecking === false && <p>Redirect ...</p>}

            {idToken && authChecking === false && <div className='row'>
              {profile && <h1>Hi {profile.nickname},</h1>}
              <p>Welcome to Nimbella Portal</p>
              <div className='btn-wrap'>
                {idToken && _for && !forParam && authChecking === false && <a href={`https://portal-apigcp.nimbella.io/login.html?for=${_for}&token=${idToken}`} className='btn btn-app' target='_blank' rel='noopener noreferrer nofollow'>Go to portal</a>}
                {idToken && forParam && authChecking === false && <a href={`https://portal-apigcp.nimbella.io/login.html?for=${forParam}&token=${idToken}`} className='btn btn-app' target='_blank' rel='noopener noreferrer nofollow'>Go to portal</a>}
                {idToken && !_for && !forParam && authChecking === false && <a href={`https://portal-apigcp.nimbella.io/login.html?token=${idToken}`} className='btn btn-app' target='_blank' rel='noopener noreferrer nofollow'>Go to Portal</a>}
              </div>
            </div>}
          </div>
        </div>}
      </div>
    )
  }
}

export default CommanderPortal
