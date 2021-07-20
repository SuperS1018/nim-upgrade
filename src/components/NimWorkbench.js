import React, { Component } from 'react'
import Content from './Content'

import '../stylesheets/components/NimWorkbench.css'

class NimWorkbench extends Component {
  render () {
    const { title = '', subtitle = '', img = '' } = this.props
    return (
      <div className='NimWorkbench section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              {title && <h2>{title}</h2>}
              {subtitle && <Content source={subtitle} />}
            </div>
            <div className='col-md-4'>
              {img && <img src={img} alt={title} width='100%'/>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NimWorkbench
