import React, { Component } from 'react'
import Content from './Content'

import '../stylesheets/components/HomeKubernetes.css'

class HomeKubernetes extends Component {
  render () {
    const { title = '', content = '', list = [] } = this.props
    return (
      <div className='HomeKubernetes section'>
        <div className='container'>
          <div className=''>

            <div className='col-lg-6 float-md-right'>
              {title && <h2><Content source={title} /></h2>}
              <Content className='list' source={content} />
            </div>

            <div className='col-lg-6 float-md-left'>
              {list.map((i, index) => (
                <div className='HomeKubernetes--Item' key={i.alt + index}>
                  <img src={i.img} alt={i.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeKubernetes
