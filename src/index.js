import 'core-js/es6'
import React from 'react'
import { render } from 'react-snapshot'
import { BrowserRouter } from 'react-router-dom'

import 'modern-normalize/modern-normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import './globalStyles.css'

import App from './App'

import registerServiceWorker, { unregister } from './registerServiceWorker'

import data from './data.json'

const rootEl = document.getElementById('root')
render(<BrowserRouter><App /></BrowserRouter>, rootEl)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<BrowserRouter><NextApp /></BrowserRouter>, rootEl)
  })
}

if (process.env.REACT_APP_SITE_URL && 'localStorage' in window) {
  window.localStorage.setItem('netlifySiteURL', process.env.REACT_APP_SITE_URL)
}

const globalSettings =
  data.settings && data.settings.filter(doc => doc.name === 'global')[0]

if (globalSettings) {
  globalSettings.enableServiceWorker ? registerServiceWorker() : unregister()
}
