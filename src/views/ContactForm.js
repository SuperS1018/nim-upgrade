import React, { Component } from 'react'

import EnquiryFormContactAjax from '../components/EnquiryFormContactAjax'
import { googleAnalyticsEvent } from '../util/ga'

class ContactForm extends Component {
  render () {
    return (
      <div className='ContactForm page'>
        <div className='container section'>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <h2>We are looking forward to hearing from you.</h2>
              <EnquiryFormContactAjax state={this.props.history.location.state} />
              <p>You can also email us directly at <a href="mailto:sales@nimbella.com" onClick={() => googleAnalyticsEvent(1, 'Contact Form', 'sales@nimbella.com')}>sales@nimbella.com</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm
