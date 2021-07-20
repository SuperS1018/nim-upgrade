import React, { Component } from 'react'
import history from '../history'

import HeroBanner1 from '../components/HeroBanner1'
import Features from '../components/Features'
import Current1 from '../components/Current1'
import Testimonial from '../components/Testimonial'
import BannerCTASlack from '../components/BannerCTASlack'
import HomeKubernetes from '../components/HomeKubernetes'
import HomeExperience from '../components/HomeExperience'
import HomeLearnPlatform from '../components/HomeLearnPlatform'
import BannerCTAGetStarted from '../components/BannerCTAGetStarted'
import Alert from '../components/Alert'
import '../stylesheets/views/Home.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      showAlert: false,
      alertContent: {},
    }
    if (window.location.pathname !== '/') {
      history.push('/')
    }
  }

  /******* NOTE: Why have local Alert component *******/
  /** Need to set it to componentDidUpdate but this **/
  /** triggers global state update and causes       **/
  /** infinite loop. The solution is to make Alert  **/
  /** component at local.                           **/
  handleAlertShow = (content) => {
    this.setState({
      showAlert: true,
      alertContent: content
    })
  }

  handleAlertHide = () => {
    this.setState({
      showAlert: false,
    })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      const loginCode = new URLSearchParams(window.location.search).get('loginCode')
      if (loginCode !== null) {
        switch (loginCode) {
          case 'loginSuccess':
            if (this.props.profile) {
              const { email = '' } = this.props.profile
              this.handleLoginAlert(email)
            }
            break
          case 'unauthorized':
            this.handleVerificationAlert()
            break
          case 'invalid_token':
            this.handleInvalidTokenAlert()
            break
          case 'access_denied':
            this.handleInvalidTokenAlert()
            break
          case 'other_error':
            this.handleOtherErrorAlert()
            break
          default:
            console.log('Unknown login code')
        }
      }
    }
  }

  handleOtherErrorAlert = () => {
    this.handleAlertShow({
      title: 'Login Failed',
      message: `<p>Please <a href='mailto:support@nimbella.com'>contact us</a> so we can help.</p>
        <p><strong>Suggested workaround:</strong> click <a href='https://nimbella-apigcp.nimbella.io/api/user/login?redirect=true' target='_blank' rel='noreferrer nofollow noopener'>this link to try another approach</a></p>`,
      btn: 'Ok',
      cb: () => {
        window.history.pushState({}, document.title, '/')
      }
    })
  }

  handleInvalidTokenAlert = () => {
    this.handleAlertShow({
      title: 'Invalid Token',
      message: `<p>Please try again later or <a href='mailto:support@nimbella.com'>contact us</a>.</p>`,
      btn: 'Ok',
      cb: () => {
        window.history.pushState({}, document.title, '/')
      }
    })
  }

  handleVerificationAlert = () => {
    this.handleAlertShow({
      title: 'Verify your email',
      message: `<p>Please check your email inbox and click <strong>Verify Email</strong>. If you don't see the email in your primary inbox, please check your spam folder or promotions folder.</p>`,
      btn: 'Ok',
      cb: () => {
        // this.props.logout()
        window.history.pushState({}, document.title, '/')
      }
    })
  }

  handleEmailExisted = (current, list = '') => {
    return list.split(' ').filter(i => i === current).length > 0 ? true : false
  }

  handleLoginAlert = (currentEmail) => {
    let emailLS = window.localStorage.getItem('new-user') ? window.atob(window.localStorage.getItem('new-user')) : ''
    if(!currentEmail) {
      return
    }
    if (!this.handleEmailExisted(currentEmail, emailLS) || emailLS === null) {
      this.handleAlertShow({
        title: 'Login Success!',
        message: `<p>Thank you for signing up Nimbella. You can go to <a href="https://docs.nimbella.com/" target="_blank" rel="noreferrer nofollow noopener">Docs</a> to learn more about Nimbella Platform.</p><p>When you are ready to develop your application, click <strong>Console</strong> to complete your account provisioning process.</p>`,
        btn: 'Ok',
        cb: () => {
          window.history.pushState({}, document.title, '/')
          emailLS += `${currentEmail} `
          window.localStorage.setItem('new-user', window.btoa(emailLS))
        }
      })
    } else {
      window.history.pushState({}, document.title, '/')
      this.handleAlertHide()
    }
  }

  render () {
    let { current, blog, lock, fields: { heroBannerA, features, kubernetes, experience, integrations, testimonials }, profile, idToken, userMetadata, authChecking } = this.props
    const { showAlert, alertContent } = this.state
    return (
      <main className='Home'>
        <Alert toggle={this.handleAlertHide} show={showAlert} content={alertContent} />
        <div className='screen-height flex-column'>
          {heroBannerA && <HeroBanner1 title={heroBannerA.title} subtitle={heroBannerA.subtitle} note={heroBannerA.note} lock={lock} profile={profile} idToken={idToken} userMetadata={userMetadata} authChecking={authChecking} />}
          {features && <Features title={features.title} list={features.list} cta={features.cta} />}
        </div>

        {kubernetes && <div className='screen-height bg-dark'>
          <HomeKubernetes title={kubernetes.title} content={kubernetes.content} list={kubernetes.list} />
        </div>}

        {experience && <HomeExperience experience={experience} integrations={integrations} />}

        {testimonials && <div className='screen-height'>
          <Testimonial title={testimonials.title} subtitle={testimonials.subtitle} list={testimonials.list} />
        </div>}

        <BannerCTASlack />

        <div className='screen-height auto-height'>
          <HomeLearnPlatform />
        </div>

        <div className='screen-height'>
          <Current1 current={current} blog={blog} />
        </div>

        <BannerCTAGetStarted />
      </main>
    )
  }
}

export default Home
