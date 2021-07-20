import React, { Component } from 'react'

import PageBanner from '../components/PageBanner'
import PageCard from '../components/PageCard'

import '../stylesheets/views/OpenSource.css'
import { googleAnalyticsEvent } from '../util/ga'

class OpenSource extends Component {
  render () {
    const { title, subtitle, backgroundImage, openSourceUse, contributions } = this.props.fields
    return (
      <div className='OpenSource page'>
        <PageBanner title={title} subtitle={subtitle} featuredImage={backgroundImage} type={2} />

        <div className='section thin flex-grow-1'>
          <div className='container'>
            <div className='row'>
              <h2 className='text-center w-100'>{contributions.title}</h2>
              <p className='text-center w-100'>{contributions.desc}</p>
              {contributions.list.map((i, index) => (
                <PageCard
                  total={contributions.list.length}
                  key={i.name + index}
                  name={i.name}
                  logo={i.icon}
                  url={i.url}
                  description={i.desc}
                  gaAction={7}
                  gaCatagory='OpenSource'
                />
              ))}
              <div className='col-lg-12'>
                <p className='mt-5 mb-0 text-center text-break'>Nimbella is also committed to mentoring. Interested? Please sign up via the <a href='https://people.communitybridge.org/project/8658d763-9822-4621-ad7d-411100e5f486' target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, 'OpenSource', 'Committed to mentoring')}>the Linux Foundation Community Bridge</a>.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <hr />
        </div>

        {/*<div className='section flex-grow-1'>*/}
          {/*<div className='container'>*/}
            {/*<div className='row'>*/}
              {/*<h2 className='text-center w-100'>{openSourceBy.title}</h2>*/}
              {/*<p className='text-center w-100'>{openSourceBy.desc}</p>*/}
              {/*{openSourceBy.list.map((i, index) => (*/}
                {/*<PageCard*/}
                  {/*key={i.name + index}*/}
                  {/*name={i.name}*/}
                  {/*logo={i.icon}*/}
                  {/*url={i.url}*/}
                  {/*description={i.desc}*/}
                  {/*gaCatagory='OpenSource'*/}
                {/*/>*/}
              {/*))}*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}

        <div className='section thin flex-grow-1'>
          <div className='container'>
            <div className='row'>
              <h2 className='text-center w-100'>{openSourceUse.title}</h2>
              <p className='text-center w-100'>{openSourceUse.desc}</p>
              {openSourceUse.list.map((i, index) => (
                <PageCard
                  total={openSourceUse.list.length}
                  index={index}
                  key={i.name + index}
                  name={i.name}
                  logo={i.icon}
                  url={i.url}
                  description={i.desc}
                  gaAction={7}
                  gaCatagory='OpenSource'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OpenSource
