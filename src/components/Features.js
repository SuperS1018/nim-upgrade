import React, { Component } from 'react'
import Content from './Content'
import { NavLink } from 'react-router-dom'

import '../stylesheets/components/Features.css'
import { googleAnalyticsEvent } from '../util/ga'

class Features extends Component {
  render () {
    const { title, list = [], cta = {} } = this.props
    return (
      <div className='Features section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 mb-5'>
              {title && <h2 className='text-center'>{title}</h2>}
            </div>
            {list.map((i, index) => (
              <div className='col-lg-4 text-center' key={i.btn + index}>
                <div className='Features--Item'>
                  <img src={i.img} alt={i.btn} />
                  <Content source={i.desc} />
                  {i.btn && i.btnLink && !i.btnLink.match(/http/i) && <NavLink to={i.btnLink} className='btn btn-sub btn-small btn-5' onClick={() => { googleAnalyticsEvent(0, 'Homepage', i.btn) }}>{i.btn}</NavLink>}
                  {i.btn && i.btnLink && i.btnLink.match(/http/i) && <a href={i.btnLink} target='_blank' rel='noreferrer nofollow noopener' className='btn btn-sub btn-small btn-5' onClick={() => { googleAnalyticsEvent(0, 'Homepage', i.btn) }}>{i.btn}</a>}
                </div>
              </div>
            ))}
            <div className='col-lg-12'>
              <div className='Features--CTA'>
                {cta.title && <h2>{cta.title}</h2>}
                <Content source={cta.content} />
                {cta.btn && cta.btnLink && <NavLink to={cta.btnLink} className='btn btn-app' onClick={() => { googleAnalyticsEvent(0, 'Homepage', cta.btn) }}>{cta.btn}</NavLink>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Features
