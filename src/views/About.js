import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import PageBanner from '../components/PageBanner'
import Founders from '../components/Founders'
import Content from '../components/Content.js'
import Investors from '../components/Investors'

import '../stylesheets/views/About.css'

class About extends Component {
  render () {
    const { fields = {}, founderList = [], investorList = [] } = this.props
    const { title = '', subtitle = '', featuredImage = '', section1 = '' } = fields

    return (
      <div className='About page'>
        <PageBanner
          title={title}
          subtitle={subtitle}
          featuredImage={featuredImage}
        />
        <div className='About--Content section thin'>
          <div className='container'>
            {section1 && <Content source={section1} />}
          </div>
        </div>

        <div className='container'>
          <hr />
        </div>

        {founderList.length > 0 && <Founders list={founderList} />}

        <div className='container'>
          <div className='col-lg-12 section thin'>
            <p className='text-center'>Read the story of our founders <NavLink to='/our-story'>here</NavLink>.</p>
            <p className='text-center'>We are hiring and growing our team: <NavLink to='/join-us'>join us</NavLink>.</p>
          </div>
        </div>

        {investorList.length > 0 && <Investors list={investorList} />}

      </div>
    )
  }
}

export default About
