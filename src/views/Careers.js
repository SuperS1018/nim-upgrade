import React, { Component, Fragment } from 'react'
import _sortBy from 'lodash/sortBy'
import { Link } from 'react-router-dom'
import { slugify } from '../util/url'

import PageBanner from '../components/PageBanner'
import Content from '../components/Content'

import '../stylesheets/views/Careers.css'

class Careers extends Component {
  render () {
    let { fields, jobs = [] } = this.props
    const { title, subtitle, backgroundImage, content } = fields
    jobs = _sortBy(jobs, ['postDate']).reverse()
    const JobComponent = (props) => {
      const { title, postDate, index, location } = props
      return (
        <li key={title + index} className='mb-3'>
          <Link to={slugify(`/jobs/${title + '_' + postDate}`)}>{title}</Link>
          <span className='float-right'>{location}</span>
        </li>
      )
    }

    return (
      <main className='Careers page'>
        <PageBanner
          title={title}
          subtitle={subtitle}
          featuredImage={backgroundImage}
        />

        <div className='Careers--Content section thin'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                {content && <Content source={content} />}
              </div>
            </div>
          </div>
        </div>

        <div className='Careers--Jobs section thin'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2>Open Positions</h2>
                <hr className='mb-5' />
                {jobs.length !== 0 && (
                  <Fragment>
                    <ul>
                      {jobs.map((i, index) => (
                        <JobComponent key={i.title + index} title={i.title} index={index} postDate={i.postDate} location={i.location} />
                      ))}
                    </ul>
                  </Fragment>
                )}

                {jobs.length === 0 && <p>Currently no job posting...</p>}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Careers
