import React, { Component } from 'react'
import { googleAnalyticsEvent } from '../util/ga'
import { NavLink } from 'react-router-dom'

import '../stylesheets/components/PromotionBanner.css'

class PromotionBanner extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     interval: 0
  //   }
  // }
  //
  // componentDidMount () {
  //   let i = 0
  //   this.interval = setInterval(() => {
  //     if(i <= 100) {
  //       this.setState({ interval: i })
  //       i++
  //     } else {
  //       clearInterval(this.interval)
  //     }
  //   }, 3)
  // }
  //
  // componentWillUnmount () {
  //   clearInterval(this.interval)
  // }

  render () {
    return (
      <div className='PromotionBanner'>
        {/(^\/$)/i.test(window.location.pathname) && !/teams-app/i.test(window.location.pathname) && <div>
          <div className='PromotionBanner--Content'>
            <span className='title'>
              {/*<span className='animated-container' />*/}

              <NavLink
                to='/forrester-report'
                onClick={() => googleAnalyticsEvent(0, 'Forrester Report Banner', 'Forrester Logo')}
              >
                <span className='logo' />
              </NavLink>

              <NavLink
                to='/forrester-report'
                onClick={() => googleAnalyticsEvent(0, 'Forrester Report Banner', 'Forrester Logo')}
              >
                <p className='truncate'><strong>Nimbella named a Strong Performer</strong> in The Forrester Wave™</p>
              </NavLink>
            </span>
            <span className='btn-wrap'>
              <NavLink
                to='/forrester-report'
                className='btn btn-small'
                onClick={() => googleAnalyticsEvent(0, 'Forrester' +
                ' Report Banner', 'Download Now')}
              >
                Download<span className='text-mobile'> Report</span>
              </NavLink>
            </span>
          </div>
        </div>}
      </div>
    )
  }
}

export default PromotionBanner
