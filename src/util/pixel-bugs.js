export const pixelBugs = () => {
  const img = new Image()
  const host = /^(www.|)nimbella.com$/i
  const track = /^\/$|product\/commander|product\/platform|signup|pricing\/platform|pricing\/commander/i
  img.onload = () => {
    // console.log('image loaded')
  }
  if(host.test(window.location.hostname) && track.test(window.location.pathname)) {
    img.src = `https://tracker.nimbella.io/t.gif?v=${new Date().getTime().toString().substring(8)}`
  }
}
