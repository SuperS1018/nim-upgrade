import React, { Component } from 'react'

import '../stylesheets/components/EnterpriseSolutionFifth.css'
import Content from './Content'

class EnterpriseSolutionFifth extends Component {
  render () {
    const { title = '', content = '', img = '' } = this.props
    return (
      <div className='EnterpriseSolutionFifth section'>
        <div className='container'>
          <div className='row'>
            {title && <div className='col-lg-12'><h2>{title}</h2></div>}
            <div className='col-lg-6'>
              <img src={img} alt={title} width='100%' />
            </div>
            <div className='col-lg-6'>
              {content && <div className='row'><div className='col-md-11'><Content source={content} /></div></div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EnterpriseSolutionFifth
