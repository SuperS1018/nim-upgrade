import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Content from './Content'
import Breadcrumb from './Breadcrumb'

import '../stylesheets/components/ServerlessCloudBanner.css'

class ServerlessCloudBanner extends Component {
  render () {
    const { title = '', subtitle = '', desc = '', btnLink = '', btnTxt = '', animatedGif = '' } = this.props
    return (
      <div className='ServerlessCloudBanner' id='ServerlessCloudBanner'>
        <Breadcrumb className='bg-g no-banner top-1' />
        <div className='container position-relative'>
          <div className='pattern' />
          <div className='row'>
            <div className='col-md-5 align-self-center'>
              {title && <h1>{title}</h1>}
              {subtitle && <div className='row'><div className='col-md-10'><Content source={subtitle} className='sub-title' /></div></div>}
              {btnTxt && <NavLink className='btn btn-app' to={btnLink}>{btnTxt}</NavLink>}
              {desc && <Content source={desc} className='note' />}
            </div>

            <div className='col-md-7'>
              <Content source={`CMS-ANIMATEDGIF IMAGE=${animatedGif} INDENT=0 WIDTH=100`} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ServerlessCloudBanner
