import React, { Component } from 'react'

import Content from '../components/Content'
import TermsSidebar from '../components/TermsSidebar'

import '../stylesheets/views/Terms.css'

class Trademark extends Component {
  render () {
    const { sidebar, fields } = this.props
    const { content } = fields
    return (
      <div className='Terms container page'>
        <div className='row pt-5 pb-5'>
          <TermsSidebar list={sidebar} />
          <div className='Terms--Content col-md-9'>
            <h2>Trademark Usage</h2>
            <Content source={content} />
          </div>
        </div>
      </div>
    )
  }
}

export default Trademark
