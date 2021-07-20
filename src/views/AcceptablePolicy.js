import React, { Component, Fragment } from 'react'

import Content from '../components/Content'
import TermsSidebar from '../components/TermsSidebar'

import '../stylesheets/views/Terms.css'

class AcceptablePolicy extends Component {
  render () {
    const { sidebar, fields } = this.props
    const { acceptableList, intro } = fields
    return (
      <div className='Terms Acceptable container page'>
        <div className='row pt-5 pb-5'>
          <TermsSidebar list={sidebar} />
          <div className='Terms--Content col-md-9'>
            <h2>Acceptable Use Policy</h2>
            <p>{intro}</p>
            {acceptableList.map((i, index) => (
              <Fragment key={i.title + index}>
                <h2 className='mt-5 mb-3'>
                  {i.title}
                </h2>
                <Content source={i.content} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default AcceptablePolicy
