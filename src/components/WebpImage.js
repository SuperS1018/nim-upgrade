import React, { Component } from 'react'

class WebpImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      webp: '',
      img: '',
      alt: '',
      ext: '',
      className: ''
    }
  }

  componentDidMount () {
    const { url, ext, alt, className } = this.props
    const re = /(?:\.([^.]+))?$/
    const ex = re.exec(url)[1]
    if (ex === 'webp') {
      const filename = url.split(re.exec(url)[0])[0]
      this.setState({ webp: url, img: `${filename}.${ext}`, alt, className, ext })
    } else {
      this.setState({ img: url, alt, className })
    }
  }

  render () {
    const { webp, img, alt, className, ext } = this.state
    return (<>
      {webp && <picture>
        <source srcSet={webp} type='image/webp' />
        <source srcSet={img} type={`image/${ext}`} />
        <img src={img} alt={alt} className={className} />
      </picture>}
      {!webp && <img src={img} alt={alt} className={className} />}
    </>)
  }
}

export default WebpImage