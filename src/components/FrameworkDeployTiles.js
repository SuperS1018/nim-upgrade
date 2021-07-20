import React, { Component } from 'react'

import Content from './Content'

import '../stylesheets/components/FrameworkDeployTiles.css'
import { googleAnalyticsEvent } from '../util/ga'

class FrameworkDeployTiles extends Component {
  render () {
    const { title, list = [], content = '', platform } = this.props
    return (
      <div className='FrameworkDeployTiles section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              {title && (
                <h2 className='text-center w-100 section-title'>
                  <Content source={title} />
                </h2>
              )}
            </div>

            {list.map((i, index) => (
              <div className='col-md-6 mb-4' key={i.title + index}>
                <div className='FrameworkDeployTiles--Item'>
                  <img src={i.img} alt={i.title} height='80' />
                  <h3>{i.title}</h3>
                  <div className='btn-wrap center'>
                    <a className='btn btn-app' href={i.link} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, `Framework ${platform}`, i.btn)}>{i.btn}</a>
                  </div>
                </div>
              </div>
            ))}

            {content && <div className='col-lg-12'><Content className='content-bottom' source={content} /></div>}
          </div>
        </div>
      </div>
    )
  }
}

export default FrameworkDeployTiles