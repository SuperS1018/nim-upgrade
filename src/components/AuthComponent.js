import React, { Component } from 'react'

class AuthComponent extends Component {
  handlePanelShow = (type, lock) => {
    if (lock) {
      switch (type) {
        case 'login':
          lock.login()
          break
        case 'signup':
          lock.signup()
          break
        default:
          lock.login()
      }
    }
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.lock !== prevProps.lock) {
      const { type, lock } = this.props
      this.handlePanelShow(type, lock)
    }
  }

  componentDidMount () {
    const { type, lock } = this.props
    this.handlePanelShow(type, lock)
  }
  componentWillUnmount () {
    this.props.lock.hide()
  }

  render () {
    const { authChecking } = this.props
    return (
      <div className='AuthComponent'>
        {/^\/$/i.test(window.location.pathname) && !authChecking && <h2>Go Serverless</h2>}
        <div className='hiw-login-container' id='hiw-login-container'>
          <div data-reactroot='' className='auth0-lock auth0-lock-opened-in-frame auth0-lock-with-terms auth0-lock-with-tabs' lang='en'>
            <div className='auth0-lock-center'>
              <form className='auth0-lock-widget' method='post' noValidate=''>
                <div className='auth0-lock-widget-container'>
                  <div className='auth0-lock-cred-pane auth0-lock-quiet'>
                    <div className='auth0-lock-cred-pane-internal-wrapper'>
                      <div className='auth0-lock-content-wrapper' />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AuthComponent
