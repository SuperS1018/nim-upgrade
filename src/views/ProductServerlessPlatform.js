import React, { Component } from 'react'

import ProductBanner from '../components/ProductBanner'
import ProductFeature from '../components/ProductFeature'
import ProductTwoColumn from '../components/ProductTwoColumn'
import BannerPlayground from '../components/BannerPlaygroud'
import NimCli from '../components/NimCli'

import '../stylesheets/components/ProductTwoColumn.css'
import NimStarterProjects from '../components/NimStarterProjects'

class ProductServerlessPlatform extends Component {
  render () {
    const { fields } = this.props
    const { serverlessPlatform } = fields
    const { architecture, pageBanner, threePillars, highlight, playgroundBanner } = serverlessPlatform
    return (
      <div className='Product page'>
        <ProductBanner title={pageBanner.title} subtitle={pageBanner.subtitle} image={pageBanner.backgroundImage} />
        <NimCli />
        <ProductFeature title={threePillars.title} subtitle={threePillars.subtitle} list={threePillars.pillarList} highlight={highlight} />
        <div className='container'><div className='row'><div className='col-lg-12'><hr /></div></div></div>
        <ProductTwoColumn title={architecture.title} subtitle={architecture.subtitle} content1={architecture.content1} content2={architecture.content2} image={architecture.featuredImage} />
        <div className='container'><div className='row'><div className='col-lg-12'><hr /></div></div></div>
        <NimStarterProjects {...this.props.more} />
        <BannerPlayground title={playgroundBanner.title} btn={playgroundBanner.btn} />
      </div>
    )
  }
}

export default ProductServerlessPlatform
