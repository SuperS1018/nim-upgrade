import React, { Component } from 'react'

import '../stylesheets/components/POCSecond.css'
import Content from './Content'

class POCSecond extends Component {
  render () {
    const { title, desc, subtitle, list } = this.props
    return (
      <div className='POCSecond section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 POCSecond--Left'>
              {title && <h2>{title}</h2>}
            </div>
            <div className='col-md-6 POCSecond--Right'>
              {desc && <Content source={desc} />}

              {subtitle && <div className='row'><div className='col-md-8'><h3>{subtitle}</h3></div></div>}

              <ul className='row'>
                {list.map((i, index) => (
                  <li className='col-md-6' key={i.item + index}>{i.item}</li>
                ))}
              </ul>

              <p className='note'>*Available On Google Cloud and AWS.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default POCSecond
