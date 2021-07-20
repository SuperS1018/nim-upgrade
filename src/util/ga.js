export const googleAnalyticsEvent = (action, cata, label, options) => {
  // console.log(action, label)
  let eventAction = ''
  switch (action) {
    case 0:
      eventAction = 'btn-click'
      break
    case 1:
      eventAction = 'textlink-click'
      break
    case 2:
      eventAction = ''
      break
    case 3:
      eventAction = 'form-submit-click'
      break
    case 4:
      eventAction = 'download-btn-click'
      break
    case 5:
      eventAction = 'social-media-click'
      break
    case 6:
      eventAction = 'popup-textlink-click'
      break
    case 7:
      eventAction = 'external-link-click'
      break
    case 8:
      eventAction = 'internal-link-click'
      break
    case 9:
      eventAction = 'search'
      break
    case 10:
      eventAction = 'subscribe'
      break
    case 11:
      eventAction = 'test-A'
      break
    case 12:
      eventAction = 'test-B'
      break
    default:
      console.log('*** action number is not on the list. please check ga.js')
  }
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventAction, {
      event_category: cata,
      event_label: label
    })
  }
  if (typeof window.fbq === 'function') {
    if (action === 9) {
      window.fbq('track', 'Search', {
        search_string: label,
        content_category: cata,
      })
    }
    if (action === 10) {
      if (options && options.hasOwnProperty('value')) {
        window.fbq('track', 'Subscribe', {
          currency: 'USD',
          value: options.value
        })
      } else {
        console.warn('*** value is missing on facebook pixel tracking')
      }

    }
  }
}
