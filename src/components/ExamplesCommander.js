import React, { Component } from 'react'
import { googleAnalyticsEvent } from '../util/ga'
import PropTypes from 'prop-types'

import '../stylesheets/components/Examples.css'

class ExamplesCommander extends Component {
  render () {
    const { list = [], title, subtitle } = this.props
    return (
      <div className='Examples Commander pb-5'>
        <div className='container'>
          <div className='row'>
            {title && <h2 className={`text-center text-uppercase w-100 mt-1 section-title${subtitle ? '' : ' pb-5'}`}>{title}</h2>}
            {subtitle && <p className='pb-5'>{subtitle}</p>}
            {/*list.map((i, index) => (

              <div className='Examples--Item' key={i.title + index}>
                <div className={`col-lg-6 ${(index % 2 === 0) ? 'fa-pull-left' : 'fa-pull-right'}`}>
                <img src={i.featuredImage} alt={i.title} />
                </div>

                <div className={`col-lg-5 fa-pull-left ${(index % 2 === 0) ? 'offset-lg-1' : ''}`}>
                  <h5 className={`runtime mb-2 text-uppercase mt-lg-0 ${(index % 2 !== 0) ? 'text-right' : ''}`}>{i.runtime}</h5>
                  <h2 className={`title ${(index % 2 !== 0) ? 'text-right' : ''}`}><a href={i.demo} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, 'Home', `Demo - ${i.title}`)}>{i.title}</a></h2>
                  <p className={`desc mt-2 ${(index % 2 !== 0) ? 'text-right' : ''}`}>{i.description}</p>
                  <a className={`btn btn-app ${(index % 2 !== 0) ? 'float-right' : ''}`} href={i.github} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, 'Home', `GitHub - ${i.title}`)}>Go to Github</a>
                  <div className='clearfix' />
                  <a className={`btn btn-nim mt-3 ${(index % 2 !== 0) ? 'float-right' : ''}`} href={i.demo} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, 'Home', `GitHub - ${i.title}`)}>Run</a>
                </div>
              </div>
            ))*/}


            {list.map((i, index) => (

              <div className='Examples--Item col-lg-4' key={i.title + index}>
                <div className={`mb-4`}>
                  <img className='border' src={i.featuredImage} alt={i.title} crossOrigin='anonymous' />
                </div>
                <div className={`Examples--Info`}>
                  {/*<h5 className={`runtime mb-2 text-uppercase mt-lg-0`}>{i.runtime}</h5>*/}
                  <h2 className={`title`}>{i.title}</h2>
                  <p className={`desc mt-2`}>{i.description}</p>
                </div>

                {list[0].install && list[0].btn && i.install && i.btn && <div className='btn-wrap text-center'>
                  <a className={`btn btn-app`} href={i.install} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(0, 'Product Commander - Slack', `Install - ${i.title}`)}>{i.btn}</a>
                </div>}
              </div>
            ))}

            <div className='col-lg-12'>
              {(!list[0].install || !list[0].btn) && list[1].install && list[1].btn && <div className='btn-wrap text-center'>
                <a className={`btn btn-app`} href={list[1].install} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(0, 'Product Commander - Slack', `${list[1].title}`)}>{list[1].btn}</a>
              </div>}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

ExamplesCommander.propTypes = {
  list: PropTypes.array
}

export default ExamplesCommander;
