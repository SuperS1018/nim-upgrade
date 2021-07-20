import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { slugify } from '../util/url'

import Content from '../components/Content'

import '../stylesheets/components/FAQ.css'

class Faq extends Component {
  render () {
    const { title, list = [] } = this.props
    return (
      <div className='FAQ section'>
        <div className='container'>
          <div className='row'>
            <div id={slugify(title)} className='anchor-offset' />
            <h2 className='text-center w-100'>{title}</h2>

            {list && list.map((i, index) => (
              <div className='FAQ--Item col-md-6' key={index}>
                <div className='item-wrap'>
                  <p className='question'>{i.question}</p>
                  <Content source={i.answer} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

Faq.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default Faq
