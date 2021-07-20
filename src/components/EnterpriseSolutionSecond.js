import React, { Component } from 'react'

import '../stylesheets/components/EnterpriseSolutionSecond.css'
import Content from './Content'

class EnterpriseSolutionSecond extends Component {
  render () {
    const { title = '', desc = '', list = [] } = this.props
    return (
      <div className='EnterpriseSolutionSecond section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 EnterpriseSolutionSecond--Left'>
              {title && <h2>{title}</h2>}
              {desc && <div className='col-md-8'><div className='row'><Content source={desc} /></div></div>}
            </div>
            <div className='col-md-6 EnterpriseSolutionSecond--Right'>
              <ul>
                {list.map((i, index) => (
                  <li key={i.item + index}><Content source={i.item} /></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EnterpriseSolutionSecond
