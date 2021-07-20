import React, { Component } from 'react'
import Content from './Content'
import Breadcrumb from './Breadcrumb'

import '../stylesheets/components/CaseStudyBanner.css'

class CaseStudyBanner extends Component {
  render () {
    const { title, desc, img, btnTxt, btnLink } = this.props
    return (
      <div className='CaseStudyBanner'>
        <Breadcrumb className='bg-g no-banner top-0' />
        <div className='container-fluid pt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                {img && <img src={img} alt={title} width='228' height='126' />}
              </div>
            </div>
          </div>
        </div>

        <div className='container-fluid bg-color'>
          <div className='pattern' />
          <div className='container'>
            <div className='row'>
              <div className='col-md-7'>
                {title && <h1><Content source={title} /></h1>}
                {btnTxt && <a className='btn btn-app' href={btnLink} download>{btnTxt}</a>}
              </div>

              <div className='col-md-5'>
                {desc && <Content className='description' source={desc} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CaseStudyBanner
