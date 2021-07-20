import React, { Component } from 'react'

import '../stylesheets/components/ForresterFirst.css'
import Content from './Content'

class ForresterFirst extends Component {
  render () {
    const { title, content, img } = this.props
    return (
      <div className='ForresterFirst section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              { title && <h2>{title}</h2>}
              { content && <div className='row'><div className='col-md-11'><Content source={content} /></div></div>}
            </div>
            <div className='col-lg-5'>
              <img src={img} alt={title} width='100%' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForresterFirst
