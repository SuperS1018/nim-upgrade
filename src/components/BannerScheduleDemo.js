import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import EnquiryFormScheduleDemoAjax from '../components/EnquiryFormScheduleDemoAjax'
import Content from './Content'

import '../stylesheets/components/BannerScheduleDemo.css'


class BannerScheduleDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm: false
    }
  }

  handleShowForm = () => {
    this.setState({
      showForm: true
    })
  }

  handleHideForm = () => {
    this.setState({
      showForm: false
    })
  }

  render () {
    const { showForm } = this.state
    const { title, btn, formTitle, formDesc } = this.props.data
    return (
      <div className='BannerScheduleDemo'>
        <div className='banner-wrap'>
          {title && <h3>{title}</h3>}
          {btn && <button className='btn btn-app' onClick={this.handleShowForm}>{btn}</button>}
        </div>
        <div className='BannerScheduleDemo--Form' style={{ left: `${showForm ? '0' : '-9999px'}`}}>
          <div className='mask' onClick={this.handleHideForm} style={{ left: `${showForm ? '0' : '-9999px'}`}} />
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 offset-md-3'>
                <div className='form-wrap'>
                  <FontAwesomeIcon icon={faTimes} onClick={this.handleHideForm} />
                  {formTitle && <h2>{formTitle}</h2>}
                  {formDesc && <Content source={formDesc} />}
                  {!/admin/i.test(window.location.pathname) && <EnquiryFormScheduleDemoAjax showForm={showForm} subject='Sales - Schedule Demo (Commander)' />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BannerScheduleDemo
