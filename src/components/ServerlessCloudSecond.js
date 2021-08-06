import React, { Component } from 'react'
import Content from './Content'

import '../stylesheets/components/ServerlessCloudSecond.css'

class ServerlessCloudSecond extends Component {
  render () {
    const { title = '', tags = [], content = '' } = this.props
    return (
      <div className='ServerlessCloudSecond section'>
        <div className='container'>
          <div className='row'>
            {title && <div className='col-lg-12'><h2 className='text-center w-100'><Content source={title} /></h2></div>}
            {tags && tags.length > 0 && <div className='col-lg-12'>
              {tags.map((i, index) => (
                <div className='tags' key={i.title + index}>
                  {i.link ? <a href={i.link} className='link-blk'>{i.title}</a> : i.title}
                </div>
              ))}
            </div>}
            {content && <Content source={content} className='note' />}
          </div>
        </div>
      </div>
    )
  }
}

export default ServerlessCloudSecond
