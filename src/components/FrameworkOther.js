import React, { Component } from 'react'
import Content from './Content'
import { NavLink } from 'react-router-dom'

import '../stylesheets/components/FrameworkOther.css'
import { googleAnalyticsEvent } from '../util/ga'

class FrameworkOther extends Component {
  render () {
    const { title, subtitle, list = [], platform } = this.props
    let filtered = []
    const fw = window.location.pathname.split('/').slice(-1).pop()
    try {
      if (fw) {
        filtered = list.filter(i => i.name.toLowerCase() !== fw)
      } else {
        filtered = list
      }
    } catch (err) { console.log(err) }
    return (
      <div className='FrameworkOther section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              {title && (
                <h2 className='text-center w-100 section-title'>
                  <Content source={title} />
                </h2>
              )}
              {subtitle && (
                <Content source={subtitle} className='text-center' />
              )}
            </div>
            <div className={filtered.length < 6 ? 'center-cards' : 'row w-100 mx-auto'}>
              {filtered.map((i, index) => (
                <div className={filtered.length > 6 ? 'col-md-3' : 'col-md-2'} key={i.name + index}>
                  <div className='FrameworkOther--Item'>
                    <NavLink to={i.link} onClick={() => googleAnalyticsEvent(8, `${platform} - Other Framework`, i.name)}>
                      <img src={i.img} alt={i.name} height={50} />
                      <p className='font-weight-bolder'>{i.name}</p>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FrameworkOther
