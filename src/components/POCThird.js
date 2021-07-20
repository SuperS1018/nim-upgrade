import React, { Component } from 'react'

import '../stylesheets/components/POCThird.css'
import Content from './Content'

class POCThird extends Component {
  render () {
    const { title, list, img } = this.props
    return (
      <div className='POCThird section'>
        <div className='container'>
          <div className='row'>
            <div className='pattern' />
            {title && <div className='col-lg-12'><h2>{title}</h2></div>}
            <div className='col-md-6 POCThird--Left'>
              <div className='row'>
                {list.map((i, index) => (
                  <div className='col-md-6' key={i.title + index}>
                    {i.title && <h3>{i.title}</h3>}
                    {i.desc && <div className='row'><div className='col-md-10'><Content source={i.desc} /></div></div>}
                  </div>
                ))}
              </div>
            </div>

            <div className='col-md-6 POCThird--Right'>
              {img && <img src={img} alt={title} width='100%' />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default POCThird
