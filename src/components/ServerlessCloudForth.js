import React, { Component } from 'react'
import Content from './Content'

import '../stylesheets/components/ServerlessCloudForth.css'

class ServerlessCloudForth extends Component {
  render () {
    const { title = '', subtitle = '', content = '', img = '' } = this.props
    return (
      <div className='ServerlessCloudForth section'>
        <div className='container'>
          <div className='row'>
            {title && <div className='col-lg-12'><h2 className='text-center w-100'>{title}</h2></div>}
            {subtitle && <div className='col-lg-12'><h3 className='text-center w-100'><Content source={subtitle} /></h3></div>}
            {content && <div className='col-lg-6'><Content source={content} className='ServerlessCloudForth--Content' /></div>}
            {img && <div className='col-lg-6'><div className='row h-100 align-items-center'><div className='ServerlessCloudForth--Image'><img src={img} alt='subtitle' width='100%' /></div></div></div>}
          </div>
        </div>
      </div>
    )
  }
}

export default ServerlessCloudForth
