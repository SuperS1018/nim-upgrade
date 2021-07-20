import React, { Component } from 'react'

import Content from '../components/Content'

import '../stylesheets/components/HomeProblems.css'

class HomeProblems extends Component {
  render () {
    const { title = '', subtitle = '', list = [] } = this.props
    return (
      <div className='HomeProblems'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='text-center w-100 section-title'>{title}</h2>
            </div>
            {list.map((i, index) => (
              <div className='col-md-4 text-center' key={i.title + index}>
                <img src={i.image} alt={i.title} />
                <h3>{i.title}</h3>
                <p>{i.desc}</p>
              </div>
            ))}
            <div className='col-lg-12'>
              <Content className='text-center' source={subtitle} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeProblems
