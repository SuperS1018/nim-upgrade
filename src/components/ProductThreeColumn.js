import React, { Component } from 'react'

import Content from '../components/Content'

import '../stylesheets/components/ProductThreeColumn.css'

class ProductThreeColumn extends Component {
  render () {
    const { data: { title, desc, list } } = this.props
    return (
      <div className='ProductThreeColumn section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              {title && <h2>{title}</h2>}
              {desc && <Content source={desc} />}
            </div>

            {list && list.map((i, index) => (
              <div className='col-md-4' key={i.title + index}>
                <div className='ProductThreeColumn--Item'>
                  {i.img && <img src={i.img} alt={i.title} />}
                  {i.title && <h3 className='text-center'>{i.title}</h3>}
                  {i.desc && <Content source={i.desc} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ProductThreeColumn
