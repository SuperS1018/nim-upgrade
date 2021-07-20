import React, { Component } from 'react'
import { googleAnalyticsEvent } from '../util/ga'
import PropTypes from 'prop-types'

import Content from '../components/Content'

import '../stylesheets/components/PageCard.css'

class PageCard extends Component {
  handleGrid = (total, index) => {
    if (total === 1) {
      return 'col-md-8 offset-md-2'
    }
    if (total === 2) {
      return 'col-md-6'
    }
    // total > 2
    if (total % 3 === 1 && index === total - (total % 3)) {
      return 'col-md-4 offset-md-4'
    }
    if (total % 3 === 2 && index === total - (total % 3)) {
      return 'col-md-4 offset-md-2'
    }
    return 'col-md-4'
  }
  render () {
    const { name, logo, url, description, gaAction, gaCatagory, total, index } = this.props
    return (
      <div className={`PageCard d-flex ${this.handleGrid(total, index)}`}>
        <div className='PageCard--Content'>
          {logo && <div className='PageCard--Logo' style={{backgroundImage: `url(${logo})`}} />}
          {!logo && <div className='PageCard--Logo no-logo' />}
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer nofollow'
            className='title'
            onClick={() => googleAnalyticsEvent(gaAction, gaCatagory, name)}
          >
            {name}
          </a>
          {description && <Content source={description}>{description}</Content>}
        </div>
      </div>
    )
  }
}

PageCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  gaAction: PropTypes.number.isRequired,
  gaCatagory: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
}

export default PageCard
