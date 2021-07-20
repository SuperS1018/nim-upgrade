import React, { Component } from 'react'

import Content from '../components/Content'

class ProductTwoColumn extends Component {
  render () {
    const { title = '', subtitle = '', content1 = '', content2 = '', image = '' } = this.props
    return (
      <div className='ProductTwoColumn section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              {title && (
                <h2 className='text-center text-uppercase w-100 section-title'>{title}</h2>
              )}
            </div>

            <div className='col-md-12'>
              {content1 && (
                <Content source={content1} />
              )}
              {image && (
                <img className='img-hidden' src={image} alt={title} />
              )}
            </div>

            <div className='col-md-12'>
              {subtitle && (
                <h2>{subtitle}</h2>
              )}
              {image && (
                <img className='img-show' src={image} alt={title} />
              )}

              {content2 && (
                <Content source={content2} />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductTwoColumn
