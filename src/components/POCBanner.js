import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Content from './Content'
import Breadcrumb from './Breadcrumb'

import '../stylesheets/components/POCBanner.css'
import { serialize } from 'dom-form-serializer'

class POCBanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      disabled: true,
      checkbox: false
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    if(data.agreement && data.name && data.email && data.company && data.role) {
      this.props.submit(data)
      form.reset()
      this.setState({ disabled: true, checkbox: false })
    }
  }
  handleChange = e => {
    this.setState({
      disabled: !e.target.checked,
      checkbox: e.target.checked
    })
  }
  render () {
    const { title, subtitle, desc, list } = this.props
    const { disabled, checkbox } = this.state
    const breadcrumb = [
      { name: 'Home', link: '/' },
      { name: 'Request Demo', link: '/proof-of-concept' }
    ]
    return (
      <div className='POCBanner'>
        <Breadcrumb className='bg-g no-banner top-1' items={breadcrumb} />
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 align-self-center'>
              <div className='row'>
                <div className='col-md-8'>
                  <h1>{title}</h1>
                </div>
              </div>

              {desc && <Content source={desc} />}

              {subtitle && <p className='note'>{subtitle}</p>}

              <ul className='row'>
                {list.map((i, index) => (
                  <li className='col-md-6' key={i.item + index}>{i.item}</li>
                ))}
              </ul>
            </div>

            <div className='col-md-5'>
              <div className='POCBanner--Form'>
                <div className='pattern' />
                <form onSubmit={this.handleSubmit}>
                  <h2>Ready?</h2>
                  <label>
                    <input type='text' name='name' placeholder='Your name' required />
                  </label>
                  <label>
                    <input type='email' name='email' placeholder='E-mail' required />
                  </label>
                  <label>
                    <input type='text' name='company' placeholder='Company name' required />
                  </label>
                  <label>
                    <input type='text' name='role' placeholder='Your role' required />
                  </label>
                  <label className='checkbox-wrap'>
                    <input type='checkbox' name='agreement' onChange={this.handleChange} checked={checkbox} />
                    <span>I agree to the <NavLink to='/terms'>terms of servicee</NavLink> and <NavLink to='/privacy'>privacy policy</NavLink>.</span>
                  </label>
                  <button className='btn btn-app' disabled={disabled}>GET STARTED ></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default POCBanner
