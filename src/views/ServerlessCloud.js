import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import ServerlessCloudBanner from '../components/ServerlessCloudBanner'
import ServerlessCloudSecond from '../components/ServerlessCloudSecond'
import ServerlessCloudThird from '../components/ServerlessCloudThird'
import ServerlessCloudForth from '../components/ServerlessCloudForth'
import ServerlessCloudSixth from '../components/ServerlessCloudSixth'

import '../stylesheets/views/ServerlessCloud.css'

class ServerlessCloud extends Component {
  render () {
    const { heroBanner, secondSection, thirdSection, forthSection, fifthSection, sixthSection } = this.props.fields
    return (
      <div className='ServerlessCloud' style={{ backgroundColor: '#F3F4F6' }}>
        {heroBanner && <ServerlessCloudBanner title={heroBanner.title} subtitle={heroBanner.subtitle} desc={heroBanner.desc} animatedGif={heroBanner.animatedGif} btnTxt={heroBanner.btnTxt} btnLink={heroBanner.btnLink} />}
        {secondSection && <ServerlessCloudSecond title={secondSection.title} tags={secondSection.tags} content={secondSection.content} />}
        {thirdSection && <ServerlessCloudThird title={thirdSection.title} subtitle={thirdSection.subtitle} list={thirdSection.list} />}
        {forthSection && <ServerlessCloudForth title={forthSection.title} subtitle={forthSection.subtitle} content={forthSection.content} img={forthSection.img} />}
        {fifthSection && <div className='ServerlessCloudFifth section'>
          <div className='container'>
            <div className='row'>
              {fifthSection.title && <h2>{fifthSection.title}</h2>}
              {fifthSection.btnTxt && <NavLink className='btn btn-app mx-auto' to={fifthSection.btnLink}>{fifthSection.btnTxt}</NavLink>}
            </div>
          </div>
        </div>}
        {sixthSection && <ServerlessCloudSixth title={sixthSection.title} list={sixthSection.list} />}
      </div>
    )
  }
}

export default ServerlessCloud
