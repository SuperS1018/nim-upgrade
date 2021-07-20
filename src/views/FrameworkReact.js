import React, { Component } from 'react'

import FrameworkBanner from '../components/FrameworkBanner'
import FrameworkDeployTiles from '../components/FrameworkDeployTiles'
import FrameworkChange from '../components/FrameworkChange'
import FrameworkContent from '../components/FrameworkContent'
import FrameworkCTA from '../components/FrameworkCTA'
import FrameworkOther from '../components/FrameworkOther'

import '../stylesheets/views/FrameworkReact.css'
import FAQ from '../components/FAQ'

class FrameworkReact extends Component {
  render () {
    const { banner, deploy, change, data, deployNow, other, faq, cta } = this.props.fields.frameworkReact
    const { platform } = this.props
    return (
      <div className='Frameworks page'>
        {banner && banner.title && <FrameworkBanner title={banner.title} subtitle={banner.subtitle} featuredImage={banner.featuredImage} backgroundImage={banner.backgroundImage}/>}
        {deploy && deploy.title && <FrameworkDeployTiles title={deploy.title} list={deploy.list} content={deploy.content} platform={platform} />}
        {change && change.title && <FrameworkChange title={change.title} list={change.list} bottomTxt={change.bottomTxt} content={change.content}/>}
        {data && data.title && <FrameworkContent title={data.title} content={data.content} />}
        {cta && cta.title && <FrameworkCTA title={cta.title} desc={cta.desc} content={cta.content} btnTxt={cta.btnTxt} btnLink={cta.btnLink} />}
        {deployNow && deployNow && <FrameworkContent title={deployNow.title} content={deployNow.content} className='bgColor' />}
        {other && other.title && <FrameworkOther title={other.title} subtitle={other.subtitle} platform={platform} list={other.list} />}
        {faq && faq.title && <FAQ title={faq.title} list={faq.items} />}
      </div>
    )
  }
}

export default FrameworkReact