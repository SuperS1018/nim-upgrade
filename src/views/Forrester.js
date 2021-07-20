import React, { Component } from 'react'

import Content from '../components/Content'
import ForresterBanner from '../components/ForresterBanner'
import ForresterFirst from '../components/ForresterFirst'

class Forrester extends Component {
  render () {
    const { fields = {} } = this.props
    const { heroBanner = {}, secondSection = {}, thirdSection = {} } = fields
    return (
      <div className='Forrester' style={{ backgroundColor: '#F3F4F6' }}>
        {heroBanner.title && <ForresterBanner title={heroBanner.title} desc={heroBanner.desc} redirect={heroBanner.redirect} />}
        {secondSection.title && <ForresterFirst title={secondSection.title} content={secondSection.content} img={secondSection.img} />}
        {thirdSection.title && <div className='ForresterSecond section'>
          <div className='container'>
            <div className='pattern' />
            <div className='row'>
              <div className='col-lg-8 offset-lg-4'>
                {thirdSection.title && <h2>{thirdSection.title}</h2>}
                {thirdSection.content && <Content source={thirdSection.content} />}
              </div>
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

export default Forrester
