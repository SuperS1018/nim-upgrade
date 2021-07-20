import _kebabCase from 'lodash/kebabCase'

export const slugify = (string = '') =>
  // keeps forward slashes
  string
    .toLowerCase()
    .split('/')
    .map(_kebabCase)
    .join('/')

export const slugifyAnchor = (string = '') =>
  // keeps forward slashes
  string
    .toLowerCase()
    .split(/^\//)
    .map(_anchorCase)
    .join('/')

const _anchorCase = (s) => {
  return s.replace(/\s|\//g, '-').replace(/:|’|\?/g, '')
}

export const params = (params, key) => {
  const arr = (params.indexOf('?') !== -1 ? params.substr(1) : params).split('&')
  let s = ''
  arr.forEach(i => {
    const k = i.split('=')[0]
    const v = i.split('=')[1]
    if (k === key) {
      s = v
    }
  })
  return s || false
}

export const handleExtIcon = (url) => {
  const base = '/images/icons/'
  if (/dev\.to/i.test(url)) {
    return `${base}dev-icon.png`
  }
  if (/medium\.com/i.test(url)) {
    return `${base}medium-icon.png`
  }
  if (/techgenix\.com/i.test(url)) {
    return `${base}techgenix-icon.png`
  }
  if (/ibm\.com/i.test(url)) {
    return `${base}ibm-icon.png`
  }
  if (/appdevelopermagazine\.com/i.test(url)) {
    return `${base}appdevelopermagazine-icon.jpeg`
  }
  if (/devops\.com/i.test(url)) {
    return `${base}devops-icon.png`
  }
  if (/thenewstack\.io/i.test(url)) {
    return `${base}thenewstack-icon.png`
  }
  if (/mattermost\.com/i.test(url)) {
    return `${base}mattermost-icon.png`
  }
  if (/cio\.economictimes\.indiatimes\.com/i.test(url)) {
    return `${base}etcio-icon.png`
  }
  if (/apievangelist\.com/i.test(url)) {
    return `${base}api-evangelist-icon.png`
  }
  if (/business-standard\.com/i.test(url)) {
    return `${base}business-standard-icon.png`
  }
  if (/opencoresummit\.com/i.test(url)) {
    return `${base}opencoresummit-icon.png`
  }
  if (/accelevents\.com/i.test(url)) {
    return `${base}accelevents-icon.jpg`
  }
  if (/news\.yahoo\.com/i.test(url)) {
    return `${base}yahoo-news-icon.jpg`
  }
  if (/intellyx\.com/i.test(url)) {
    return `${base}intellyx-icon.png`
  }
  if (/devopsdigest\.com/i.test(url)) {
    return `${base}devopsdigest-icon.png`
  }
  if (/containerjournal\.com/i.test(url)) {
    return `${base}containerjournal-icon.jpg`
  }
  if (/vmblog\.com/i.test(url)) {
    return `${base}vmblog-icon.gif`
  }
  if (/youtube\.com/i.test(url)) {
    return `${base}youtube-icon.jpeg`
  }
  if (/serverlesschats\.com/i.test(url)) {
    return `${base}serverlesschats-icon.svg`
  }
  if (/apmdigest\.com/i.test(url)) {
    return `${base}apmdigest-icon.png`
  }
  console.error('*** external icon image is missing for ' + url)
  return false
}

export const handleExtTitle = (href) => {
  const re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
  if (href && re.test(href)) {
    let a = document.createElement('a')
    a.href = href
    return a.origin
  } else {
    return false
  }
}

export const getParameterFromURL = (name, url = window.location.href) => {
  name = name.replace(/[[\]]/g, '\\$&')
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
