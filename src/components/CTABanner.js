import React, { Component } from 'react'
import { slugify } from '../util/url'

import '../stylesheets/components/CTABanner.css'

class CtaBanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ctaBanner: {}
    }
  }

  componentDidMount () {
    this.handleCTABanner()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(prevProps !== this.props) {
      this.handleCTABanner()
    }
  }

  handleCTABanner = () => {
    const { selected, list } = this.props
    if(selected && selected.length > 0) {
      const data = list.filter(i => i.title === selected[0].banner)
      if(data && data.length > 0) {
        this.setState({ ctaBanner: data[0] })
      } else {
        this.setState({ ctaBanner: {} })
        console.warn('*** no matched cta banner found')
      }
    } else {
      this.setState({ ctaBanner: {} })
    }
  }

  render () {
    const { title, source } = this.props
    const { ctaBanner } = this.state
    return (
      <div className='CTABanner'>
        {ctaBanner && ctaBanner.img && title && <a
          href={`${window.location.origin}${ctaBanner.link}?utm_source=${source}&utm_medium=banner&utm_campaign=${slugify(title)}`}
          target='_blank'
          rel='noopener noreferrer nofollow'
        >
          <img
            src={ctaBanner.img}
            alt='CTA banner'
            width='100%'
          />
        </a>}
      </div>
    )
  }
}

export default CtaBanner
