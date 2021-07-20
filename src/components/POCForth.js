import React, { Component } from 'react'

import EnquiryFormPOCAjax from './EnquiryFormPOCAjax'

import '../stylesheets/components/POCForth.css'
import Content from './Content'

class POCForth extends Component {
  render () {
    const { form, reset, title, subtitle, list, pattern } = this.props
    return (
      <div className='POCForth'>
        <div className='container'>
          {pattern && <div className='pattern' />}
          <div className='row'>
            <div className={pattern ? 'col-lg-12' : 'col-md-6 offset-md-3'}>
              {title && <h2>{title}</h2>}
            </div>
            {subtitle && <div className={pattern ? 'col-lg-10 offset-lg-1' : 'col-md-6 offset-md-3'}><Content source={subtitle} /></div>}
            <div className='col-md-6 offset-md-3'>
              <EnquiryFormPOCAjax form={form} reset={reset} questions={list} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default POCForth
