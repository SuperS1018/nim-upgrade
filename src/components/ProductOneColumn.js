import React, { Component } from 'react'

import Content from '../components/Content'

class ProductOneColumn extends Component {
  render () {
    const { title = '', subtitle = '', image = '', smallImg = false } = this.props
    return (
      <div className='ProductOneColumn section'>
        <div className='container'>
          <div className='row'>
            {title && (
              <h2 className='text-center text-uppercase w-100 section-title'>{title}</h2>
            )}

            {subtitle && (
              <Content className='mt-5 mb-5' source={subtitle} />
            )}

            {image && (
              <div className={smallImg ? 'col-lg-6 offset-lg-3' : 'col-lg-12'}><img src={image} alt={title} className='w-100' /></div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ProductOneColumn
