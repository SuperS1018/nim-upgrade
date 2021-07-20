import React, { Component } from 'react'
import Content from './Content'
import EnquiryFormForresterAjax from './EnquiryFormForresterAjax'
import Breadcrumb from './Breadcrumb'

import '../stylesheets/components/ForresterBanner.css'

class ForresterBanner extends Component {
  render () {
    const { title, desc, redirect } = this.props
    return (
      <div className='ForresterBanner'>
        <Breadcrumb className='bg-g no-banner top-1' />
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 align-self-center'>
              {title && <h1><Content source={title} /></h1>}
              {desc && <Content source={desc} />}
              <a href='https://www.forrester.com/report/The+Forrester+Wave+FunctionAsAService+Platforms+Q1+2021/-/E-RES161673' className='btn btn-app' target='_blank' rel='noreferrer nofollow noopener'>Find more</a>
            </div>

            {/*<div className='col-md-5'>*/}
            {/*  <div className='ForresterBanner--Form'>*/}
            {/*    <div className='pattern' />*/}
            {/*    <EnquiryFormForresterAjax redirect={redirect} />*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    )
  }
}

export default ForresterBanner
