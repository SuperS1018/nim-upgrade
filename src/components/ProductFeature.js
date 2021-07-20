import React, { Component } from 'react'
import HomeHighLights from '../components/HomeHighLights'

import '../stylesheets/components/ProductFeature.css'

class ProductFeature extends Component {
  render () {
    const { title, subtitle, list = [], highlight } = this.props
    return (
      <div className='ProductFeature section'>
        <div className='container'>
          <div className='row'>
            {title && (
              <div className='col-lg-12'><h2 className='text-center text-uppercase w-100 section-title-subtitle'>{title}</h2></div>
            )}
            {subtitle && (
              <div className='col-md-12 section-subtitle'><p className='text-center w-100'>{subtitle}</p></div>
            )}
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12 p-0'>
              {highlight && <div className='screen-height auto bg'><HomeHighLights title={highlight.title} subtitle={highlight.subtitle} list={highlight.list} /></div>}
            </div>
          </div>
        </div>
        <div className='container section'>
          <div className='row'>
            {list.map((i, index) => (
              <div className='ProductFeature--Item' key={i.title + index}>
                <div id={i.title.toLowerCase().replace(/ +/g, '-')} className='anchor-offset' />
                <div className={`col-lg-6 ${(index % 2 !== 0) ? 'fa-pull-left' : 'fa-pull-right'}`}>
                  <h2 className={`title ${(index % 2 !== 0) ? 'text-right' : ''}`}>{i.title}</h2>
                  <p className={`desc ${(index % 2 !== 0) ? 'text-right' : ''}`}>{i.subtitle}</p>
                </div>
                <div className={`col-lg-5 fa-pull-left image-wrap ${(index % 2 !== 0) ? 'offset-lg-1' : ''}`}>
                  <img className='' src={i.featuredImage} alt={i.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ProductFeature
