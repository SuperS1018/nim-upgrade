import React, { Component } from 'react'
import GifPlayer from 'react-gif-player'

import Content from '../components/Content'
import Breadcrumb from './Breadcrumb'

import '../stylesheets/components/ProductBanner2.css'

class ProductBanner2 extends Component {
  render () {
    const { title, subtitle, btnTxt, featuredImage, featuredBgImage, backgroundImage, handleModalCommanderShow, autoplay = false } = this.props
    return (
      <div className='ProductBanner2' style={{backgroundImage: `url(${backgroundImage})`}}>
        <Breadcrumb className='bg-tran banner top-0' options={{ exclude: ['integrations'] }} />
        <div className='container-fluid'>
          <div className='row'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 d-flex align-items-center flex-row'>
                  <div className='ProductBanner2--Content'>
                    {title && <h1>{title}</h1>}
                    {subtitle && <Content source={subtitle} />}
                    {btnTxt && <button className='btn btn-app' onClick={handleModalCommanderShow}>{btnTxt}</button>}
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='ProductBanner2--Image' style={{backgroundImage: `url(${featuredBgImage})`}}>
                    <div className='web-head'>
                      <div className='circle-wrap'>
                        <div className='red' />
                        <div className='yellow' />
                        <div className='green' />
                      </div>
                    </div>
                    <GifPlayer gif={featuredImage} autoplay={autoplay} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductBanner2
