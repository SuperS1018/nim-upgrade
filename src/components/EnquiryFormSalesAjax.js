import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'
import { Alert } from 'reactstrap'

import '../stylesheets/components/EnquiryForm.css'
import { googleAnalyticsEvent } from '../util/ga'

const fetch = window.fetch

class Form extends React.Component {
  static defaultProps = {
    name: 'Sales Contact Form',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks you, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    success: false,
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          success: true,
          disabled: false
        })
        googleAnalyticsEvent(3, 'Sales', 'form submit')
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage,
          success: false
        })
      })
  }

  handleClose = () => {
    this.setState({alert: ''})
  }

  render () {
    const { name, subject, action } = this.props
    const { alert, success } = this.state

    return (
      <form
        className='EnquiryForm'
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='_gotcha'
      >
        <label className='EnquiryForm--Label required'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Name'
            name='name'
            required
          />
        </label>
        <label className='EnquiryForm--Label required'>
          <input
            className='EnquiryForm--Input'
            type='email'
            placeholder='Work Email'
            name='work email'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Company (optional)'
            name='company'
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Job Title (optional)'
            name='jobTitle'
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='phone'
            placeholder='Phone Number (optional)'
            name='phone'
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='City/State (optional)'
            name='city'
          />
        </label>
        <label className='EnquiryForm--Label required'>
          <textarea
            className='EnquiryForm--Input EnquiryForm--Textarea'
            placeholder='Message'
            name='message'
            rows='10'
            required
          />
        </label>

        {alert && (
          <Alert color={success ? 'primary' : 'danger'} isOpen={alert} toggle={this.handleClose}>{alert}</Alert>
        )}

        <p className='note'><span className='text text-red'>*</span> = required</p>
        <input type='text' name='_gotcha' style={{ display: 'none' }} />
        {!!subject && <input type='hidden' name='subject' value={subject} />}
        <input type='hidden' name='form-name' value={name} />
        <input
          className='btn btn-app mr-4'
          type='submit'
          value='Submit'
          disabled={this.state.disabled}
        />
        <input
          className='btn btn-outline-app'
          type="reset"
          value='Clear'
        />
      </form>
    )
  }
}

export default Form
