import React, { Component } from 'react'
import Content from './Content'

import '../stylesheets/components/FrameworkContent.css'

class FrameworkContent extends Component {
  render () {
    const { title, content, className } = this.props
    return (
      <div className={`FrameworkContent section${className ? ` ${className}` : ''}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              {title && (
                <h2 className='text-center w-100 section-title'>
                  <Content source={title} />
                </h2>
              )}
            </div>
            <div className='col-lg-12'>
              <Content source={content} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FrameworkContent
