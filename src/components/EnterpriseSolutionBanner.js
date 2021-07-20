import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Content from './Content'
import Breadcrumb from './Breadcrumb'

import '../stylesheets/components/EnterpriseSolutionBanner.css'

class EnterpriseSolutionBanner extends Component {
  render () {
    const { title = '', subtitle = '', desc = '', note = '', btnLink = '', btnTxt = '' } = this.props
    const breadcrumb = [
      { name: 'Home', link: '/' },
      { name: 'Enterprise Solution', link: '/enterprise-solution' }
    ]
    return (
      <div className='EnterpriseSolutionBanner'>
        <Breadcrumb className='bg-g no-banner top-1' items={breadcrumb} />
        <div className='container position-relative'>
          <div className='pattern' />
          <div className='row'>
            <div className='col-md-8 align-self-center'>
              {subtitle && <p className='font-weight-bold'>{subtitle}</p>}
              {title && <h1>{title}</h1>}
              {desc && <Content source={desc} />}
              {btnTxt && <NavLink className='btn btn-app' to={btnLink}>{btnTxt}</NavLink>}
              {note && <div className='col-md-9'><div className='row'><p className='note'>{note}</p></div></div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EnterpriseSolutionBanner
