import React, { Component } from 'react'

import PageBanner from '../components/PageBanner'
import Content from '../components/Content'

import '../stylesheets/views/Support.css'

class Support extends Component {
  render () {
    const { fields } = this.props
    const { title, subtitle, backgroundImage, body } = fields

    return (
      <div className='Support'>
        <PageBanner title={title} subtitle={subtitle} featuredImage={backgroundImage} />

        <div className='Support--Form section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <Content source={body} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Support
