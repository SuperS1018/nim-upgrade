import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { googleAnalyticsEvent } from '../util/ga'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { pixelBugs } from '../util/pixel-bugs'
import { isMobile } from '../util/misc'

import Logo from './Logo'
import NavLink from './NavLink'

import '../stylesheets/components/Nav.css'


class Navigation extends Component {
  static defaultProps = {
    handleIfHome: () => /(^\/$|^\/proof-of-concept|\/forrester-report)|\/case-study|\/enterprise-solution/i.test(window.location.pathname)
  }
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
      showBackground: {
        background: '1'
      },
      isLoggedIn: 'true',
      logout: null,
      authChecking: false,
      isMobile: false,
      isLoading: true,
      setupLink: '',
      showPanel: false,
      isHomepage: props.handleIfHome() // add POC to isHomepage
    }
    this.timeout = null
  }

  componentDidMount () {
    this.handleNavBackground()
    this.unlisten = this.props.history.listen(() => {
      this.props.handleNoticeBanner()
      this.handleNavBackground()
      pixelBugs()

      this.setState({
        isOpen: false
      })

      // for debugging - if thte link is ended with "/"
      if(/\/$/i.test(window.location.pathname) && window.location.pathname !== '/') {
        console.log('*** the link is ended with a "/"', window.location.href)
      }

      // remove dropdown list so after clicking dropdown item, dropdown menu will be closed
      document.querySelectorAll('.navbar .dropdown').forEach(i => {
        i.classList.add('no-hover')
      })

      this.timeout = setTimeout(() => {
        document.querySelectorAll('.navbar .dropdown').forEach(i => {
          i.classList.remove('no-hover')
          clearTimeout(this.timeout)
        })
      }, 100)

      this.setState({ isHomepage: this.props.handleIfHome() })
    })

    window.addEventListener('scroll', function() {
      this.handleNavBackground()
    }.bind(this))

    const isLoggedIn = window.localStorage.getItem('isLoggedIn')
    this.setState({ isLoggedIn })

    this.handleDimensions()
    window.addEventListener('resize', this.handleDimensions)

    // document.querySelector('#login_wrap .dropdown').setAttribute('style', 'display: block')
    const { logout } = this.props
    if(logout) {
      this.setState({ logout })
    }

    this.setState({ isLoading: false, isHomepage: this.props.handleIfHome() })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(prevProps !== this.props) {
      this.handleNavBackground()

      const { logout, authChecking, idToken, userMetadata } = this.props

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

      if(logout) {
        this.setState({ logout, authChecking })
      }
    }
  }

  handleDimensions = () => {
    const { isOpen } = this.state
    if(isOpen) {
      this.setState({ isOpen: false })
    }
    if (window.innerWidth <= 991) {
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: isMobile()})
    }
    this.props.handleNoticeBanner()
  }

  isSafari = () => {
    return /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini|Safari/i.test(window.navigator.userAgent) && !/Chrome/i.test(window.navigator.userAgent)
  }

  handleNavBackground = () => {
    // eslint-disable-next-line
    const { positionTop, producthuntBanner } = this.props
    const { isHomepage } = this.state
    const body = window.document.body; //IE 'quirks'
    let document = window.document.documentElement; //IE with doctype
    document = (document.clientHeight && (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini|Safari|Firefox/i.test(window.navigator.userAgent) || isMobile())) ? document : body;
    if (!isHomepage) {
      // console.log(positionTop, window.document.documentElement.scrollTop, this.isSafari())
      this.setState({ showBackground: { top: 0 } })
    } else {
      if (document.scrollTop <= (positionTop * 50 || 1)) {
        this.setState({ showBackground: { top: `${positionTop > 0 ? positionTop * 50 - document.scrollTop : 0}px` } })
      } else {
        this.setState({ showBackground: { borderBottom: '1px solid #b2b2b2' } })
      }
    }
  }

  resetToggle = () => {
    document.querySelector('.navbar-nav').childNodes.forEach(i => {
      if(i.childNodes.length > 1) {
        i.childNodes[1].childNodes.forEach(j => j.removeAttribute('checked'))
      }
      i.removeAttribute('checked')
    })
  }

  toggle = () => {
    this.resetToggle()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleLoginOpen = () => {
    this.setState({
      isLoginOpen: !this.state.isLoginOpen
    })
  }

  handleHover = async evt => {
    evt.preventDefault()
    // console.log(evt.target.parentNode)
    evt.target.parentNode.parentNode.childNodes.forEach(i => {
      if(i !== evt.target.parentNode) {
        i.removeAttribute('checked')
      }
    })
    evt.target.parentNode.toggleAttribute('checked')
  }

  handleAvatarClick = () => {
    this.setState(prevState => ({ showPanel: !prevState.showPanel }) )
  }

  componentWillUnmount () {
    this.unlisten()
    window.removeEventListener('resize', this.handleDimensions)
    window.removeEventListener('scroll', function() {
      this.handleNavBackground()
    }.bind(this))
    clearInterval(this.interval)
  }

  render () {
    const { profile, history } = this.props
    const { isOpen, showBackground, logout, authChecking, isMobile, isLoading, setupLink, showPanel, isHomepage } = this.state

    return (
      <nav className={`navbar navbar-expand-md navbar-dark fixed-top${isMobile ? ' mobile' : '' }${isHomepage ? ' home' : ''}`} style={showBackground}>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <Logo />
          </Link>

          {!isLoading && <button className='navbar-toggler' type='button' onClick={this.toggle}>
            {!isOpen && <FontAwesomeIcon icon={faBars} />}
            {isOpen && <FontAwesomeIcon icon={faTimes} />}
          </button>}

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/platform'>
                  Platform
                </NavLink>
              </li>

              {/*<li className='nav-item dropdown' onClick={e => this.handleHover(e)}>*/}
              {/*  <button className={`dropbtn ${/pricing/.test(window.location.pathname) ? 'active' : ''}`}>Frameworks</button>*/}
              {/*  <div className='dropdown-content'>*/}
              {/*    <NavLink className='nav-link' to='/react'>*/}
              {/*      React*/}
              {/*    </NavLink>*/}
              {/*  </div>*/}
              {/*</li>*/}

              <li className='nav-item dropdown'>
                <button className={`dropbtn ${/integrations/.test(window.location.pathname) ? 'active' : ''}`} onClick={e => this.handleHover(e)}>Integrations</button>

                <div className='dropdown-content'>
                  {/*<NavLink className='nav-link ' to='/integrations/commander'>Commander</NavLink>*/}
                  <div className='NavLink nav-link sub-indicator'>
                    {/*<NavLink className='nav-link ' to='/integrations/commander' onClick={e => this.handleHover(e)}>Commander</NavLink>*/}
                    <div onClick={e => {this.handleHover(e); history.push('/integrations/commander')}}>Collaboration - Commander<sup>TM</sup></div>

                    <ul className='navbar-nav mr-auto sub'>
                      <li className='nav-item'>
                        <NavLink className='nav-link' to='/integrations/commander/slack'>
                          Slack
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink className='nav-link' to='/integrations/commander/microsoft-teams'>
                          Microsoft Teams
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink className='nav-link' to='/integrations/commander/mattermost'>
                          Mattermost
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink className='nav-link' to='/integrations/commander/cli'>
                          CLI
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <NavLink className='nav-link' to='/integrations/postman'>
                    Postman
                  </NavLink>
                  <NavLink className='nav-link' to='/integrations/netlify'>
                    Netlify
                  </NavLink>
                  {/*<div className='NavLink nav-link disabled'>Kafka (upcoming)</div>*/}
                </div>
              </li>

              <li className='nav-item dropdown' onClick={e => this.handleHover(e)}>
                <button className={`dropbtn ${/pricing/.test(window.location.pathname) ? 'active' : ''}`}>Pricing</button>
                <div className='dropdown-content'>
                  <NavLink className='nav-link' to='/pricing/platform'>
                    Platform
                  </NavLink>
                  <NavLink className='nav-link' to='/pricing/commander' exact={true}>
                    Commander
                  </NavLink>
                </div>
              </li>

              <li className='nav-item dropdown'>
                <button className={`dropbtn ${/docs/.test(window.location.pathname) ? 'active' : ''}`} onClick={e => this.handleHover(e)}>Docs</button>
                <div className='dropdown-content'>
                  <a className='NavLink nav-link' href='https://docs.nimbella.com' target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(0, 'Top Nav Bar', 'Docs Platform Click')}>Platform</a>
                  <div className='NavLink nav-link sub-indicator'>
                    <div onClick={e => {this.handleHover(e)}}>Commander</div>

                    <ul className='navbar-nav mr-auto sub'>
                      <li className='nav-item'>
                        <NavLink className='nav-link' to='/docs/commander/slack/overview'>
                          Slack
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink className='nav-link' to='/docs/commander/microsoft-teams/overview'>
                          Microsoft Teams
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink className='nav-link' to='/docs/commander/mattermost/overview'>
                          Mattermost
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className='nav-item'>
                <NavLink className='nav-link' to='/proof-of-concept'>
                  Request Demo
                </NavLink>
              </li>
            </ul>

            {!/^\/integrations\/commander/i.test(window.location.pathname) && !isLoading && <Fragment>
              {!profile.name && authChecking === false && !/^\/integrations\/commander/i.test(window.location.pathname) && <div className='auth-wrap'>
                <div className='mt-2 mt-md-0 button'>
                  <NavLink className={`btn mr-3${/^\/$|\/proof-of-concept|\/forrester-report|\/case-study|\/enterprise-solution/i.test(window.location.pathname) ? ' btn-outline-white' : ' btn-outline-light'}`} to='/login' onClick={this.handleLoginOpen}>
                    Login
                  </NavLink>
                  <NavLink className='btn btn-app mr-5' to='/signup' onClick={this.handleLoginOpen}>
                    Get Started
                  </NavLink>
                </div>
              </div>}


              {profile.name && authChecking === false && <div className='text-white ml-3 mr-5 login-wrap' id='login_wrap'>
                <button className={`btn mr-3 ${isHomepage ? ' btn-app' : ' btn-outline-light'}`} onClick={() => {googleAnalyticsEvent(7, 'Header', 'Console'); window.open(setupLink)}}>Console</button>
                <div className='profile-wrap'>
                  <img src={profile.picture} alt={profile.name} onClick={this.handleAvatarClick}/>
                  <div className={`panel${showPanel ? ' show' : ''}`}>
                    <FontAwesomeIcon icon={faTimes} onClick={this.handleAvatarClick}/>
                    <div className='img-wrap'><img src={profile.picture} alt={profile.name} /></div>
                    <h3>{profile.nickname}</h3>
                    <p className='profile-name'>{profile.name}</p>
                    <button className={`btn${isMobile ? ' btn-outline-white' : ' link-style'}`} onClick={() => {googleAnalyticsEvent(7, 'Header', 'Visit Console'); window.open(setupLink)}}>Visit Console</button>
                    <hr />
                    <button className='btn btn-app' onClick={logout}>Sign Out</button>
                  </div>
                </div>
              </div>}

              {authChecking === true && <div className='spinning-wrap'><div className='spinning-loader' /></div>}

            </Fragment>}
          </div>


        </div>
      </nav>
    )
  }
}

export default withRouter(Navigation)
