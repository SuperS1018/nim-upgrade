import React, { Component } from 'react'

import ProductBanner from '../components/ProductBanner'
import Content from '../components/Content'

import '../stylesheets/views/ProductNimbellaCommander.css'

class ProductNetlify extends Component {
  render () {
    const { productNetlify: { pageBanner, firstSection, secondSection, thirdSection, forthSection } } = this.props.fields
    return (
      <div className='Product Commander Netlify page'>
        {pageBanner && <ProductBanner title={pageBanner.title} subtitle={pageBanner.subtitle} image={pageBanner.backgroundImage} />}
        <div className='Commander--Content section'>
          <div className='container'>
            <div className='row'>

              {/* First Section */}
              {firstSection.title && <div className='WhyAddCommander--Head col-lg-12'>
                <h2>{firstSection.title}</h2>
              </div>}

              {firstSection.top && <div className='col-lg-12'>
                <Content source={firstSection.top} />
              </div>}

              {firstSection.list.map((i, index) => (
                <div className={`Netlify--Item col-6 col-md-2 text-center${index === 0 ? ' offset-md-1' : ''}`} key={i.title + index}>
                  <img src={i.icon} alt={i.desc} width='80' height='80' />
                  {i.title && <h3>{i.title}</h3>}
                </div>
              ))}

              <div className='col-lg-12'>
                {firstSection.bottom && <Content source={firstSection.bottom} />}
              </div>

              {/* Second Section */}
              {secondSection.title && <div className='WhyAddCommander--Head col-lg-12'>
                <h2>{secondSection.title}</h2>
              </div>}

              {secondSection.content && <div className='col-lg-12'>
                <Content source={secondSection.content} />
              </div>}

              {/* Third Section */}
              {thirdSection.title && <div className='WhyAddCommander--Head col-lg-12'>
                <h2>{thirdSection.title}</h2>
              </div>}

              {thirdSection.list.map((i, index) => (
                <div className='Netlify--Item col-6 col-md-3 text-center' key={i.title + index}>
                  <img src={i.icon} alt={i.desc} width='80' height='80' />
                  {i.title && <h3>{i.title}</h3>}
                  {i.desc && <p>{i.desc}</p>}
                </div>
              ))}

              {/* Forth Section */}
              {forthSection.title && <div className='WhyAddCommander--Head col-lg-12'>
                <h2>{forthSection.title}</h2>
              </div>}

              {forthSection.content && <div className='col-lg-12'>
                <Content source={forthSection.content} />
              </div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductNetlify
