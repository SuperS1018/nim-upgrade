import React from 'react'

import '../stylesheets/components/Logo.css'

export default ({ inverted }) => (
  <div
    className='Logo'
    style={{
      backgroundImage: /(^\/$|\/proof-of-concept|\/forrester-report)|\/case-study|\/enterprise-solution/i.test(window.location.pathname) ? 'url(/images/nimbella-logo-full-color.svg)' : 'url(/images/logo.svg)'
    }}
  />
)
