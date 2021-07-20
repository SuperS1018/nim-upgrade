import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import AuthComponent from '../components/AuthComponent'
import Breadcrumb from '../components/Breadcrumb'

import '../stylesheets/views/Login.css'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lock: null,
      forParam: ''
    }
  }

  handleAuthenticatedCondition = () => {
    let forParam = new URLSearchParams(window.location.search).get('for')
    const { isAuthenticated, lock, userMetadata, idToken } = this.props

    if(/netlify\/#auth=/i.test(window.location.href)) {
      forParam += window.location.hash
    }

    if(isAuthenticated === true && userMetadata) {
      if(forParam && idToken) {
        window.location.replace(`https://portal-apigcp.nimbella.io/login.html?for=${forParam}&token=${idToken}`)
      }
    }

    if(forParam) {
      window.localStorage.setItem('_forParam', forParam)
      this.setState({ forParam })
    } else {
      window.localStorage.removeItem('_forParam') // clear _forParam from localStorage
    }

    if(lock) {
      this.setState({ lock })
    }
  }

  componentDidMount () {
    this.handleAuthenticatedCondition()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(prevProps !== this.props) {
      this.handleAuthenticatedCondition()
    }
  }

  render () {
    const { lock, forParam } = this.state
    return (
      <div className='Login page'>
        <Breadcrumb className='bg-g no-banner' />
        <div className='container section'>
          <div className='row'>
            <div className='col-lg-12'>
              <AuthComponent type='login' lock={lock} />
              {forParam && <p className='text-center'>New to Nimbella? Click <NavLink to={`/signup?for=${forParam}`}>here</NavLink> to create an account.</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
