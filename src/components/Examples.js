import React, { Component } from 'react'
import { googleAnalyticsEvent } from '../util/ga'
import PropTypes from 'prop-types'

import '../stylesheets/components/Examples.css'
import { NavLink } from 'react-router-dom'

class Examples extends Component {
  render () {
    const { title = '', subtitle = '', list = [], btnName, btnLink } = this.props
    return (
      <div className='Examples section'>
        <div className='container'>
          <div className='row'>
            {title && <h2 className={`text-center text-uppercase w-100 section-title${subtitle ? '' : ' pb-5'}`}>{title}</h2>}
            {subtitle && <p className='pb-5'>{subtitle}</p>}

            {list.map((i, index) => (
              <div className='Examples--Item col-md-6 col-lg-3' key={i.title + index}>
                <div className={`mb-4`}>
                  <img src={i.featuredImage} alt={i.title} crossOrigin='anonymous' />
                </div>
                <div className={`Examples--Info`}>
                  <h5 className={`runtime mb-2 text-uppercase mt-lg-0`}>{i.runtime}</h5>
                  <h2 className={`title`}><a href={i.demo} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, 'Home', `Demo - ${i.title}`)}>{i.title}</a></h2>
                  <p className={`desc mt-2`}>{i.description}</p>
                </div>

                {/*<div className='btn-wrap text-center'>*/}
                  {/*<a className={`btn btn-app`} href={i.github} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, 'Home', `GitHub - ${i.title}`)}>Fork on Github</a>*/}
                {/*</div>*/}
              </div>
            ))}
            <div className='col-lg-12 text-center'>
              <hr />
              {!/http(s|)/i.test(btnLink) && <NavLink className='btn btn-app mt-5' to={btnLink} onClick={() => googleAnalyticsEvent(0, 'Home', btnName)}>{btnName}</NavLink>}
              {/http(s|)/i.test(btnLink) && <a className='btn btn-app mt-5' href={btnLink} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(0, 'Home', btnName)}>{btnName}</a>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Examples.propTypes = {
  list: PropTypes.array
}

export default Examples;
