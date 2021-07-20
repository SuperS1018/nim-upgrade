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
    name: 'Whitepaper Download Form',
    subject: '', // optional subject of the notification email
    action: '',
    // successMessage: 'Thanks you, email has sent',
    successMessage: 'Thanks you, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    success: false,
    disabled: false
  }

  // handleSendEmail = (to, name) => {
  //   const d = {
  //     to,
  //     subject: `${name} download from Nimbella`,
  //     text: 'Thank you for being insterested in Nimbella. Please click the button below to download whitepaper.',
  //     url: window.location.origin + this.props.pdf
  //   }
  //   fetch('https://apigcp.nimbella.io/api/v1/web/samchao-m2z6icgqih8e/default/sendDownloadEmail', {
  //     method: 'POST',
  //     body: JSON.stringify(d)
  //   }).then(res => res.json())
  //     .then(() => {})
  // }

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
        let pathname = ''
        let cata = ''
        switch(this.props.name) {
          case 'Whitepaper Download Form':
            pathname = '/whitepaper-thank-you'
            cata = 'Whitepaper Form'
            // this.handleSendEmail(data['business email'], 'Whitepaper')
            break
          case 'New Whitepaper Download Form':
            pathname = '/make-serverless-frictionless-and-portable-whitepaper-thank-you'
            cata = 'New Whitepaper Form'
            // this.handleSendEmail(data['business email'], 'Technical whitepaper')
            break
          default:
            pathname = '/whitepaper-thank-you'
            cata = 'Whitepaper Form'
            // this.handleSendEmail(data['business email'], 'Whitepaper')
        }
        form.reset()
        googleAnalyticsEvent(0, cata, 'form submit')
        this.props.history.push({
          pathname,
          state: {
            success: true
          }
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
            placeholder='Business Email'
            name='business email'
            required
          />
        </label>
        <label className='EnquiryForm--Label required'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Company'
            name='company'
            required
          />
        </label>
        <label className='EnquiryForm--Label Checkbox'>
          <input
            className='EnquiryForm--Checkbox'
            type='checkbox'
            name='agreement'
            required
          />
          <span>I agree to the <NavLink to='/terms'>Terms of Use</NavLink> and <NavLink to='/privacy'>Privacy Policy</NavLink>.</span>
        </label>

        {alert && (
          <Alert color={success ? 'primary' : 'danger'}>{alert}</Alert>
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

export default withRouter(Form)

