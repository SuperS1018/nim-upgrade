import React, { Component } from 'react'
import Content from './Content'

import '../stylesheets/components/EnterpriseSolutionThird.css'

class EnterpriseSolutionThird extends Component {
  render () {
    const { title = '', citeTitle = '', citeContent = '', downloadTxt = '', downloadLink = '' } = this.props
    return (
      <div className='EnterpriseSolutionThird section padding-large'>
        <div className='container'>
          <div className='row'>
            {title && <div className='col-lg-12'><h2 className='text-center w-100'>{title}</h2></div>}
            {citeTitle && <div className='col-lg-12'><h3 className='text-center w-100'>{citeTitle}</h3></div>}
            {citeContent && <div className='col-md-10 offset-md-1'><Content source={citeContent} /></div>}
            {downloadTxt && <div className='col-lg-12 mt-4'><a href={downloadLink} className='download-link' target='_blank' rel='noreferrer nofollow noopener'>{downloadTxt}</a></div>}
          </div>
        </div>
      </div>
    )
  }
}

export default EnterpriseSolutionThird
