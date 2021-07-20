import React, { Component, Fragment } from 'react'

import Content from '../components/Content'
import TermsSidebar from '../components/TermsSidebar'

import '../stylesheets/views/Terms.css'

class Terms extends Component {
  render () {
    const { sidebar, fields } = this.props
    const { termList, intro } = fields
    return (
      <div className='Terms container page'>
        <div className='row pt-5 pb-5'>
          <TermsSidebar list={sidebar} />
          <div className='Terms--Content col-md-9'>
            <h2>Terms & Conditions</h2>
            <Content source={intro} />
            <ol className='first-ol'>
              {termList.map((i, index) => (
                <Fragment key={i.title + index}>
                  <li className='title'>{i.title}</li>
                  <Content source={i.content} />
                </Fragment>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Terms
