import React, { Component, Fragment } from 'react'

import Content from '../components/Content'

import '../stylesheets/components/Testimonials.css'
import { googleAnalyticsEvent } from '../util/ga'

class Testimonial extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 0,
    }
  }

  handleToggle = tab => {
    const { active } = this.state
    if (active !== tab) {
      googleAnalyticsEvent(0, 'Home Testmonials', tab)
      this.setState({
        active: tab
      })
    }
  }

  render () {
    const { list = [], title, subtitle } = this.props
    const { active } = this.state
    return (
      <div className='Testimonial section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              {title && <h2 className='text-center'>{title}</h2>}
              {subtitle && <Content source={subtitle} />}
            </div>

            <div className='Testimonial--Tab'>
              {list.map((i, index) => (
                <div className='item' key={i.tab + index}>
                  <div
                    className={(active === index) ? 'active' : ''}
                    onClick={() => { this.handleToggle(index); }}
                  >
                    <span>{i.tab}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className='Testimonial--Content'>
              {list.map((i, index) => (
                <Fragment key={i.profile.name + index}>
                  {active === index && <div className='row'>
                    <div className='col-lg-6 col-xl-6 align-self-center h-100 flex-row'>
                      <div className='msg-wrap'>
                        {i.profile && i.profile.message && <Content source={i.profile.message} />}
                        <div className='profile-wrap'>
                          <div>
                            <hr />
                            <p className='label'>Testimonial</p>
                            {i.profile && i.profile.name && <h4>{i.profile.name}</h4>}
                            {i.profile && i.profile.position && <p className='position'>{i.profile.position}</p>}
                          </div>
                          {i.profile && i.profile.image && <img src={i.profile.image} alt={i.profile.name} />}
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-6 col-xl-6'>
                      <div className='solution-wrap'>
                        <h5><Content source={i.solution} /></h5>
                      </div>
                    </div>
                  </div>}
                </Fragment>
              ))}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Testimonial
