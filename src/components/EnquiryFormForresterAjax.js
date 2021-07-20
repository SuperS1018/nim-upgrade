import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'
import { Alert } from 'reactstrap'
import { NavLink, withRouter } from 'react-router-dom'

import '../stylesheets/components/EnquiryForm.css'
import { googleAnalyticsEvent } from '../util/ga'

const fetch = window.fetch

class Form extends React.Component {
  static defaultProps = {
    name: 'Forrester Report Download Form',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks you, redirecting to the report page...',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    success: false,
    disabled: true,
    form: {
      email: '',
      role: '',
      agreement: false
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return
    const { redirect } = this.props
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
        googleAnalyticsEvent(0, 'Forrester Report Form', 'form submit')
        window.open(redirect, '_self')
        this.setState({
          alert: this.props.successMessage,
          success: true,
          disabled: true
        })
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

  handleChange = e => {
    const { name, value } = e.target
    this.setState(prevState => {
      prevState.form[name] = value
      return { form: prevState.form }
    })
  }

  handleCheckboxChange = e => {
    const { checked, name } = e.target
    this.setState(prevState => {
      prevState.form[name] = checked
      return { form: prevState.form, disabled: !checked }
    })
  }

  render () {
    const { name, subject, action } = this.props
    const { alert, success, agreement } = this.state

    return (
      <form
        className='EnquiryForm'
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='_gotcha'
      >
        <h2 className='mb-5'>Download the report</h2>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='name'
            placeholder='Name'
            name='name'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='email'
            placeholder='Business Email'
            name='business email'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Company'
            name='company'
            required
          />
        </label>
        <label className='EnquiryForm--Label checkbox-wrap'>
          <input
            className='EnquiryForm--Checkbox'
            type='checkbox'
            name='agreement'
            checked={agreement}
            onChange={this.handleCheckboxChange}
            required
          />
          <span>I agree to the <NavLink to='/terms'>Terms of Use</NavLink> and <NavLink to='/privacy'>Privacy Policy</NavLink>.</span>
        </label>

        {alert && (
          <Alert color={success ? 'primary' : 'danger'}>{alert}</Alert>
        )}

        {/*<p className='note'><span className='text text-red'>*</span> = required</p>*/}
        <input type='text' name='_gotcha' style={{ display: 'none' }} />
        {!!subject && <input type='hidden' name='subject' value={subject} />}
        <input type='hidden' name='form-name' value={name} />
        <input
          className='btn btn-app mt-5'
          type='submit'
          value='SUBMIT'
          disabled={this.state.disabled}
        />
        {/*<input*/}
        {/*  className='btn btn-outline-app'*/}
        {/*  type="reset"*/}
        {/*  value='Clear'*/}
        {/*/>*/}
      </form>
    )
  }
}

export default withRouter(Form)

