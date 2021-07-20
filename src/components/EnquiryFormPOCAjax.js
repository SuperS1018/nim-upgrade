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
    formName: 'POC Submit Form',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks you, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  constructor (props) {
    super(props)
    this.state = {
      alert: '',
      success: false,
      disabled: true,
      form: {
        name: '',
        email: '',
        company: '',
        role: '',
        country: '',
        agreement: false
      }
    }
  }

  componentDidMount () {
    fetch('https://get.geojs.io/v1/ip/country.json').then(data => data.json()).then(res => {
      try {
        this.setState(prevState => {
          prevState.form.country = res.name
          return { form: prevState.form }
        })
      } catch (err) {}
    })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(prevProps !== this.props) {
      let { form } = this.props
      this.setState(prevState => {
        form.country = prevState.form.country
        return { form, disabled: !this.props.form.agreement }
      })
    }
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
        this.props.reset()
        this.setState({
          alert: this.props.successMessage,
          success: true,
          disabled: true
        })
        googleAnalyticsEvent(0, 'POC Form', 'form submit')
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
    const { formName, subject, action, questions } = this.props
    const { alert, success, form: { name, company, email, role, agreement, country } } = this.state
    return (
      <form
        className='EnquiryForm'
        name={formName}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='_gotcha'
      >
        <div className='top-wrap'>
          <label className='EnquiryForm--Label'>
            <input
              className='EnquiryForm--Input'
              type='text'
              placeholder='Your name'
              name='name'
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className='EnquiryForm--Label'>
            <input
              className='EnquiryForm--Input'
              type='email'
              placeholder='E-mail'
              name='email'
              value={email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className='EnquiryForm--Label'>
            <input
              className='EnquiryForm--Input'
              type='text'
              placeholder='Company name'
              name='company'
              onChange={this.handleChange}
              value={company}
              required
            />
          </label>
          <label className='EnquiryForm--Label'>
            <input
              className='EnquiryForm--Input'
              type='text'
              placeholder='Your role'
              name='role'
              onChange={this.handleChange}
              value={role}
              required
            />
          </label>
        </div>

        <div className='bottom-wrap'>
          <label className='EnquiryForm--Label EnquiryForm--Select1'>
            Is your organization using Kubernetes?
            <select name='Is your organization using Kubernetes?' defaultValue='Yes'>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
              <option value='Thinking about it'>Thinking about it</option>
            </select>
          </label>

          <label className='EnquiryForm--Label EnquiryForm--Select1'>
            Are you familiar with Serverless Development?
            <select name='Are you familiar with Serverless Development?' defaultValue='Yes'>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
          </label>

          {questions.map((i, index) => (
            <label className='EnquiryForm--Label' key={i.question + index}>
              {i.question}
              <textarea
                className='EnquiryForm--Input'
                placeholder='Your answer'
                cols='30'
                rows='5'
                name={i.question}
                required
              />
            </label>
          ))}
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
        </div>

        {alert && (
          <Alert color={success ? 'primary' : 'danger'}>{alert}</Alert>
        )}

        <input type='text' name='_gotcha' style={{ display: 'none' }} />
        {!!subject && <input type='hidden' name='subject' value={subject} />}
        <input type='hidden' name='form-name' value={formName} />
        <input type='hidden' name='country' value={country} />
        <input
          className='btn btn-app'
          type='submit'
          value='GET STARTED >'
          disabled={this.state.disabled}
        />
        {/*<input*/}
        {/*  className='btn btn-outline-light'*/}
        {/*  type="reset"*/}
        {/*  value='Clear'*/}
        {/*/>*/}
      </form>
    )
  }
}

export default withRouter(Form)

