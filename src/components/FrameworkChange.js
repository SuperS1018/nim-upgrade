import React, { Component } from 'react'
import Content from './Content'

import '../stylesheets/components/FrameworkChange.css'

class FrameworkChange extends Component {
  render () {
    const { title, list = [], bottomTxt, content } = this.props
    return (
      <div className='FrameworkChange section'>
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
              <div className='col-md-6' key={i.title + index}>
                <div className='FrameworkChange--Item'>
                  <div className='image-wrap'>
                    <img src={i.img} alt={i.title} width='200' />
                  </div>
                  <Content source={i.title} />
                </div>
              </div>
            ))}
            <div className='col-lg-12'>
              {bottomTxt && (
                <Content className='text-center h3 mt-5' source={bottomTxt} />
              )}
            </div>
            <div className='col-lg-12'>
              {content && (
                <Content className='mt-5' source={content} />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FrameworkChange
