import React, { Component } from 'react'
import { stringify } from 'qs'
import { Alert } from 'reactstrap'

import '../stylesheets/components/EnquiryForm.css'
import '../stylesheets/components/EnquiryFormControlled.css'

const fetch = window.fetch

class Form extends Component {
  static defaultProps = {
    name: 'Controlled Form'
  }

  initialState = {
    name: '',
    email: '',
    phone: '',
    job: '',
    company: '',
    message: '',
    subject: `New Submission from ${this.props.siteTitle}!`,
    _gotcha: '',
    disabled: false,
    alert: '',
    success: false,
    action: '/contact/',
    'form-name': this.props.name
  }

  state = {
    ...this.initialState
  }

  form = null
  inputs = []

  componentDidMount () {
    if (!this.form) return
    this.inputs = [...this.form.querySelectorAll('input, textarea')]
    this.addListeners()
  }

  addListeners = () => {
    this.inputs.forEach(input => {
      input.addEventListener('invalid', () => {
        input.dataset.touched = true
      })
      input.addEventListener('blur', () => {
        if (input.value !== '') input.dataset.touched = true
      })
    })
  }

  resetForm = customState => {
    this.setState({ ...this.initialState, ...customState, success: true })
    this.inputs.forEach(input => {
      delete input.dataset.touched
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      job: this.state.job,
      company: this.state.company,
      message: this.state.message,
      subject: this.state.subject,
      _gotcha: this.state._gotcha,
      'form-name': this.state['form-name']
    }
    this.setState({ disabled: true })
    fetch(this.state.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(
        this.resetForm({
          alert: 'Thanks for your enquiry, we will get back to you soon.'
        })
      )
      .catch(err => {
        console.log(err)
        this.setState({
          disabled: false,
          alert:
            '❗️ There is a problem, your message has not been sent, please try contacting us via email',
          success: false
        })
      })
  }

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    })

  render () {
    const { alert, success } = this.state
    return (
      <form
        className='EnquiryForm EnquiryForm-controlled'
        name={this.state['form-name']}
        ref={form => {
          this.form = form
        }}
        action={this.state.action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='_gotcha'
      >
        <label className='EnquiryForm--Label required'>
          <input
            className='EnquiryForm--Input'
            value={this.state.name}
            onChange={this.handleChange}
            type='text'
            placeholder='Name'
            name='name'
            required
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <LineGroup />
        </label>
        <label className='EnquiryForm--Label required'>
          <input
            className='EnquiryForm--Input'
            value={this.state.email}
            onChange={this.handleChange}
            type='email'
            placeholder='Email'
            name='email'
            required
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <LineGroup />
        </label>
        <label className='EnquiryForm--Label required'>
          <input
            className='EnquiryForm--Input'
            value={this.state.phone}
            onChange={this.handleChange}
            type='phone'
            placeholder='Phone Number'
            name='phone'
            required
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <LineGroup />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            value={this.state.job}
            onChange={this.handleChange}
            type='text'
            placeholder='Job Title'
            name='job'
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <LineGroup />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            value={this.state.company}
            onChange={this.handleChange}
            type='text'
            placeholder='Company Name'
            name='company'
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <LineGroup />
        </label>
        <label className='EnquiryForm--Label'>
          <textarea
            className='EnquiryForm--Input EnquiryForm--Textarea'
            value={this.state.message}
            onChange={this.handleChange}
            placeholder='What can we help you?'
            name='message'
            rows='10'
            required
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <LineGroup />
        </label>
        <input
          className='EnquiryForm--Input'
          type='text'
          name='_gotcha'
          style={{ display: 'none' }}
          value={this.state._gotcha}
          onChange={this.handleChange}
        />
        <input
          className='EnquiryForm--Input'
          type='hidden'
          name='subject'
          value={this.state.subject}
        />
        <input
          className='EnquiryForm--Input'
          type='hidden'
          name='form-name'
          value={this.state['form-name']}
        />

        {alert && (
          <Alert color={success ? 'primary' : 'danger'}>{alert}</Alert>
        )}

        <button
          className='Button EnquiryForm--SubmitButton btn btn-app mr-4'
          type='submit'
          value='Send'
          disabled={this.state.disabled ? 'disabled' : ''}
        >
          Submit
        </button>
        <input
          className='btn btn-outline-app'
          type="reset"
          onClick={this.resetForm}
          value='Clear'
        />
      </form>
    )
  }
}

const LineGroup = () => (
  <svg
    className='EnquiryForm--Line'
    viewBox='0 0 40 2'
    preserveAspectRatio='none'
  >
    <path d='M0 1 L40 1' />
    <path d='M0 1 L40 1' className='focus' />
    <path d='M0 1 L40 1' className='invalid' />
    <path d='M0 1 L40 1' className='valid' />
  </svg>
)

export default Form
