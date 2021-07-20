import React from 'react'

import PageBanner from '../components/PageBanner'
import EnquiryFormContactPageAjax from '../components/EnquiryFormContactPageAjax'
import Content from '../components/Content'

import '../stylesheets/views/Contact.css'

export default ({ fields }) => {
  const { message, body } = fields
  return (
    <div className='Contact page'>
      <PageBanner title={message} />
      <div className='container-fluid h-100'>
        <div className='row h-100 pb-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 section'>
                <Content source={body} />
              </div>
              <div className='col-lg-5 section'>
                <EnquiryFormContactPageAjax />
                {/*<p>You can also email us directly at <a href='mailto:info@nimbella.com'>info@nimbella.com</a></p>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
