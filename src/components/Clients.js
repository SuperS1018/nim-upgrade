import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../stylesheets/components/Clients.css'

class Clients extends Component {
  render () {
    const { list } = this.props
    return (
      <div className='Clients'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h5 className='text-center pd-0 text-uppercase'>Our Clients</h5>
            </div>
            <div className='Clients--List'>
              {list.map((i, index) => (
                <div className='Clients--Item' key={i.name + index}>
                  <div className='brand' style={{backgroundImage: `url(${i.image})`}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Clients.propTypes = {
  list: PropTypes.array
}
export default Clients
