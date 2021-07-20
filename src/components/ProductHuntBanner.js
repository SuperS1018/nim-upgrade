import React, { Component, Fragment } from 'react'
import { googleAnalyticsEvent } from '../util/ga'
import { isMobile } from '../util/misc'

import '../stylesheets/components/ProductHuntBanner.css'

class ProductHuntBanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      interval: 0
    }
  }

  componentDidMount () {
    let i = 0
    this.interval = setInterval(() => {
      if(i <= 100) {
        this.setState({ interval: i })
        i++
      } else {
        clearInterval(this.interval)
      }
    }, 3)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const { interval } = this.state
    return (
      <Fragment>
        {/(^\/$)/i.test(window.location.pathname) && !/teams-app/i.test(window.location.pathname) && <div className='ProductHuntBanner'><a href='https://www.producthunt.com/posts/nimbella' target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, 'Product Hunt Banner', 'Product Hunt - Nimbella')}>
          <div className='ProductHuntBanner--Content'>
            <img src='/images/producthunt-logo.png' width='74' alt='Product Hunt' />
            <div className='text-wrap text-white'>
              {!isMobile() && <div className='mask' style={{left: `${interval}%`}} />}
              <strong>Nimbella is on Product Hunt today!</strong> <span>— Meet the makers and Join the discussion.</span>
            </div>
          </div>
        </a></div>}
      </Fragment>
    )
  }
}

export default ProductHuntBanner
