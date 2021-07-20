import React, { Component } from 'react'

import EnquiryFormRequestAjax from '../components/EnquiryFormRequestAjax'
import Content from '../components/Content'

import '../stylesheets/views/Sales.css'

class Request extends Component {
  componentDidMount () {
    // window.location.replace('https://nimbella-apigcp.nimbella.io/login.html')
    window.location.replace('/signup')
  }
  render () {
    const { body, backgroundImage } = this.props.fields
    return (
      <div className='Sales page'>
        <div className='container-fluid'>
          <div className='row pb-5'>
            <div className='container'>
              <div className='row pt-5'>
                <div className='loader-wrap'>
                  <img src='/images/loading_nim.gif' alt='' width='240' height='180' />
                  <div className='mask' />
                </div>
                <div className='col-lg-6'>
                  <div className='info-wrap' style={{backgroundImage: `url(${backgroundImage})`}}>
                    <div className='mask' />
                    <Content source={body} />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <EnquiryFormRequestAjax name='Request Access Form' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Request
