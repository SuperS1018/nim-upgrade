import React, { Component } from 'react'

import ProductBanner from '../components/ProductBanner'
import WhyAddCommander from '../components/WhyAddCommander'
import Content from '../components/Content'

import '../stylesheets/views/ProductNimbellaCommander.css'

class ProductCommanderMattermost extends Component {
  render () {
    const { commanderMattermost: { pageBanner, tableComparison, content } } = this.props.fields
    return (
      <div className='Product Commander Mattermost page'>
        {pageBanner && <ProductBanner title={pageBanner.title} subtitle={pageBanner.subtitle} image={pageBanner.backgroundImage} />}
        {tableComparison && <WhyAddCommander data={tableComparison} />}
        <div className='Commander--Content pb-5'>
          <div className='container'>
            <div className='row'>
              <div className='WhyAddCommander--Head col-lg-12'>
                {content.title && <h2>{content.title}</h2>}
                {content.subtitle && <p>{content.subtitle}</p>}
              </div>
              <div className='col-lg-12'>
                {content.body && <Content source={content.body}></Content>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductCommanderMattermost
