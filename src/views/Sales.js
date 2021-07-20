import React from 'react'

import EnquiryFormSalesAjax from '../components/EnquiryFormSalesAjax'
import Content from '../components/Content'

import '../stylesheets/views/Sales.css'

export default ({ fields }) => {
  const { body, message, backgroundImage } = fields
  return (
    <div className='Sales'>
      <div className='container-fluid h-100'>
        <div className='row h-100 pb-5'>
          <div className='container'>
            <div className='row pt-5'>
              <div className='col-lg-6'>
                <div className='info-wrap' style={{backgroundImage: `url(${backgroundImage})`}}>
                  <div className='mask' />
                  <Content source={body} />
                </div>
              </div>
              <div className='col-lg-6 p-5'>
                {message && (
                  <h3>{message}</h3>
                )}
                <EnquiryFormSalesAjax name='Sales Contact Form' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
