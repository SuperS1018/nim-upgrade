export const scrollToElement = (id, index, smooth, os) => {
  if(!/admin/.test(window.location.pathname)) {
    let offset = os ? os : index === 0 ? -10 : 0
    const element = document.getElementById(id)
    let scroll = !!element
    if (scroll) {
      const elemPos = element.offsetTop
      // console.log(element, elemPos + offset)
      const target = document.querySelector(_handleSafariEdgeBrowser() ? 'body' : 'html')
      if(smooth) {
        target.scrollTo({ top: elemPos + offset, left: 0, behavior: 'smooth' })
      } else {
        target.scrollTo({ top: elemPos + offset, left: 0, behavior: 'auto' })
      }
    } else {
      console.log(`Element not found: ${id}`)
    }
  }
}

const _handleSafariEdgeBrowser = () => {
  const ua = navigator.userAgent.toLowerCase()
  if((/safari/.test(ua) && !/chrome/.test(ua)) || /edge/.test(ua)) {
    return true
  } else {
    return false
  }
}
