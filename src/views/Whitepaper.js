import React, { Component } from 'react'
import PageBanner from '../components/PageBanner'
import Content from '../components/Content'
import EnquiryFormWhitepaperAjax from '../components/EnquiryFormWhitepaperAjax'

import '../stylesheets/views/Whitepaper.css'

class Whitepaper extends Component {
  render () {
    const { title, subtitle, featuredImage, whitepaperImage, content, pdf } = this.props.fields
    return (
      <div className='Whitepaper page'>
        <PageBanner
          title={title}
          subtitle={subtitle}
          featuredImage={featuredImage}
          small={false}
        />
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 section'>
              <div className='row'>
                <div className='col-lg-12'>
                  <Content source={content} />
                </div>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='Whitepaper--Form'>
                <h3>Download the whitepaper</h3>
                <img src={whitepaperImage} alt='White paper' width='100%' />
                <EnquiryFormWhitepaperAjax name='Whitepaper Download Form' pdf={pdf} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Whitepaper
