import React, { Component, Fragment } from 'react'
import Content from './Content'
import { NavLink } from 'react-router-dom'

import '../stylesheets/components/HomeExperience.css'
import { googleAnalyticsEvent } from '../util/ga'

class HomeExperience extends Component {
  render () {
    const { experience = {}, integrations = {} } = this.props
    const Button = (props) => {
      const { name, link } = props
      if (/^http/i.test(link)) {
        return (<a className='btn btn-app' href={link} target='_blank' rel='noreferrer nofollow noopener'>{name}</a>)
      } else {
        return (<NavLink className='btn btn-app' to={link}>{name}</NavLink>)
      }
    }
    return (
      <Fragment>
        <div className='screen-height'>
          <div className='HomeExperience section'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  {experience.title && <h2>{experience.title}</h2>}
                  {experience.subtitle && <h3>{experience.subtitle}</h3>}
                </div>
                {experience && experience.list && experience.list.map((i, index) => (
                  <div className='col-md-6' key={i.btn + index}>
                    <div className='HomeExperience--Item'>
                      <img src={i.icon} alt={i.btn} />
                      <Content source={i.desc} />
                      {i.btn && i.btnLink && <Button name={i.btn} link={i.btnLink} onClick={() => { googleAnalyticsEvent(0, experience.title, i.btn) }} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='screen-height'>
          <div className='HomeIntegrations section'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  {integrations.title && <h2>{integrations.title}</h2>}
                </div>
                <div className='col-md-8 offset-md-2'>
                  {integrations.subtitle && <h3>{integrations.subtitle}</h3>}
                  {integrations.note && <Content className='note' source={integrations.note} />}
                </div>
                {integrations.list.map((i, index) => (
                  <div className='col-md-4 mb-5' key={i.name + index}>
                    <div className='HomeIntegrations--Item'>
                      <div className='d-flex'>
                        <div className='image-wrap'>
                          <img src={i.logo} alt={i.name} />
                        </div>

                        {i.name.match(/teams/i) && <div className='image-wrap ml-3'><img src='/images/uploads/microsoft-teams-logo.svg' alt='Microsoft Teams' /></div>}
                      </div>

                      {i.name && <h4>{i.name}</h4>}
                      {i.desc && <Content source={i.desc} />}
                      {i.link && <NavLink to={i.link} onClick={() => { googleAnalyticsEvent(1, integrations.title, 'READ ME') }}>READ MORE</NavLink>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default HomeExperience
