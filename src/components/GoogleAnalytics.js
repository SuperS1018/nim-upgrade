import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class GoogleAnalytics extends Component {
  componentDidMount () {
    const hostname = window.location.hostname;
    const re = /^(www.|)nimbella.com$/i;
    const { location } = this.props

    // Assumes google analytics code already added to index.html (production: 143782416-1 test: 143772668-1)
    if (typeof window.gtag === 'function' && re.test(hostname)) {
      window.gtag('js', new Date());
      window.gtag('config', 'UA-143782416-1', {
        page_path: location.pathname + location.search
      });
    }

    if (typeof window.fbq === 'function' && (re.test(hostname) || /sam-test.netlify.app/i.test(hostname) || /nimbella-test.com/i.test(hostname))) {
      window.fbq('track', 'PageView')
    }
    return null
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(this.props.location.pathname !== prevProps.location.pathname) {
      const hostname = window.location.hostname;
      const re = /^(www.|)nimbella.com$/i;
      const { location } = this.props

      // Assumes google analytics code already added to index.html (production: 143782416-1 test: 143772668-1)
      if (typeof window.gtag === 'function' && re.test(hostname)) {
        window.gtag('js', new Date());
        window.gtag('config', 'UA-143782416-1', {
          page_path: location.pathname + location.search
        });
      }


      if (typeof window.fbq === 'function' && (re.test(hostname) || /sam-test.netlify.app/i.test(hostname) || /nimbella-test.com/i.test(hostname))) {
        window.fbq('track', 'PageView')
      }
      return null
    }
  }

  render() {
    return <div></div>
  }
}

export default withRouter(GoogleAnalytics)
