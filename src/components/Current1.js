import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { slugify } from '../util/url'
import { googleAnalyticsEvent } from '../util/ga'
import { timestampWithGeolocation } from '../util/time'
import Content from './Content'

import '../stylesheets/components/Current1.css'

class Current extends Component {
  static defaultProps = {
    current: [],
    limit: 7,
    definedNewTab: 1000 * 60 * 60 * 24 * 7 // 10 days
  }

  static propTypes = {
    current: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      list: this.handleData(this.props.current).reverse() || [],
    }
  }

  handleData = (data) => {
    const { limit } = this.props
    let sorted = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    if(sorted.length < limit) {
      return sorted.reverse();
    } else {
      return sorted.slice(0, limit).reverse();
    }
  }

  handleNewLabel = (date, postDate) => {
    const nowDate = new Date().getTime()
    let originalDate = new Date(date).getTime()
    if (postDate && new Date(postDate).getTime() > originalDate) {
      originalDate = new Date(postDate).getTime()
    }
    return (nowDate - originalDate) < this.props.definedNewTab
  }

  handleSup = s => {
    return s.replace(/[\u00AE]/ig, '^®^')
  }

  render () {
    const { list } = this.state
    const leftList = list.slice(0, 4)
    const rightList = list.slice(4, 7)
    const ListElem = props => {
      const { list } = props
      return (
        list.map((i, index) => (
          <div className='current-item col-lg-12' key={i.title + index}>
            <div className='info'>
              <div>
                <span className='date'>{timestampWithGeolocation(i.date, { date: true, slash: true })}</span>
                {i.type && <div className={`label ${i.type.toLowerCase()}`}>{i.type.toLowerCase()}</div>}
                {this.handleNewLabel(i.date, i.postDate) && i.type === 'News' && <div className='label new'>HOT</div>}
              </div>
            </div>
            <hr />
            {i.link ?
              <a className='' href={i.link} target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, i.type, i.title)}>{i.title}</a>:
              <Link className='' to={slugify(`/newsevents/${i.title}`)} onClick={() => googleAnalyticsEvent(8, i.type, i.title)}><Content source={this.handleSup(i.title)} /></Link>}
          </div>
        ))
      )
    }
    return (
      <div className='current-section section thin'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>Current News & Events</h2>
            </div>

            <div className='col-md-6'>
              <div className='current-platform'>
                <ListElem list={leftList} />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='current-platform'>
                <ListElem list={rightList} />
                <Link className='see-more' to={slugify(`/newsevents`)} onClick={() => googleAnalyticsEvent(8, 'Current', 'See more News & Events')}>See more News & Events</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Current
