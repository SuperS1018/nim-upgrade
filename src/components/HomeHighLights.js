import React, { Component } from 'react'

import '../stylesheets/components/HomeHighLights.css'

class HomeHighLights extends Component {
  render () {
    const { list } = this.props
    return (
      <div className='HomeHighLights'>
        <div className='container'>
          <div className='row'>
            {list.map((i, index) => (
              <div className='col-md-4 text-center' key={i.title + index}>
                <img src={i.icon} alt={i.title} />
                <h3>{i.title}</h3>
                <p>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHighLights
