import React, { Component } from 'react'
import _sortBy from 'lodash/sortBy'
import Content from '../components/Content'
import SearchInput from 'react-search-input'
import NavLink from '../components/NavLink'
import { slugify } from '../util/url'
import { isCMS } from '../util/misc'
import { googleAnalyticsEvent } from '../util/ga'
import debounce from 'lodash/debounce'

import '../stylesheets/views/Resources.css'

class Resources extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      isOpen: false
    }
    if(!/\/admin\//i.test(window.location.href)) {
      window.location.replace('https://docs.nimbella.com')
    }
  };

  handleChange = (searchTerm) => {
    if(searchTerm) {
      googleAnalyticsEvent(9, 'Resource Platform Sidebar', searchTerm)
    }
    this.setState({ searchTerm })
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleFilter = (array, sidebarSearchTerm) => {
    let filtered = []
    let parent = ''
    let parentData = {}
    let sorted = []
    _sortBy(array, i => parseInt(i.index)).forEach(i => {
      if (i.level === '1') {
        parent = i.title
        sorted.push(i)
      }

      if (i.level === '2') {
        Object.assign(i, { parent })
        sorted.push(i)
      }
    })

    if(sidebarSearchTerm) {
      const r = new RegExp(sidebarSearchTerm, 'gi')

      sorted.forEach(i => {
        if (i.level === '1') {
          parentData = i
        }

        if(i.title.match(r)) {
          if(i.level === '2') {
            filtered.push(parentData)
            parentData = {}
          }
          filtered.push(i)
        }
      })
      return filtered
    } else {
      return sorted
    }
  }

  render () {
    const { isOpen } = this.state;
    const { fields: { body, title } } = this.props
    const filteredList = this.handleFilter(this.props.list, this.state.searchTerm)
    const currentIndex = filteredList.indexOf(this.props.fields)
    const prev = filteredList[currentIndex - 1]
    const next = filteredList[currentIndex + 1]

    return (
      <main className='Resources flex-grow-1 page'>
        <div className='container-fluid h-100'>
          <div className='row h-100'>
            <nav className={`col-md-3 d-md-block col-lg-2 bg-light sidebar`}>
              <div className={`sidebar-sticky ${isOpen ? 'show' : ''}`}>
                <SearchInput className='search-input mt-3' onChange={debounce(this.handleChange, 300)} />
                <hr />
                <ul className='nav flex-column'>
                  { filteredList.map((i, index) => (
                    <li className={`nav-item`} key={i.title + index}>
                      {i.level === '1' && <NavLink className={`nav-link${window.location.pathname.substring(1).split('/').length > 2 ? ' deactive' : ''}`} to={slugify(`/docs/platform/${i.title}`)}><strong>{i.title}</strong></NavLink>}

                      {i.level === '2' && <NavLink className={`nav-link indent`} to={slugify(`/docs/platform/${i.parent}/${i.title}`)}>{i.title}</NavLink>}
                    </li>
                  ))}
                </ul>
              </div>
              {isCMS && <button className='show-list' onClick={() => this.handleToggle()}>
                <span className={`sign ${isOpen ? 'up' : 'down'}`}>{!isOpen ? 'Show' : 'Hide'} List</span>
              </button>}
            </nav>

            <main role='main' className='col-md-9 col-lg-10 ml-sm-auto col-lg-10 pt-3 px-4 pb-5'>
              <Content source={body} className={slugify(title)} />
              <div className='col-lg-12 mb-5'>
                <hr />
              </div>
              <div className='col-md-12 nav-posts'>
                {prev && !prev.parent && <NavLink className='btn btn-app float-right mr-3' to={slugify(`/docs/platform/${prev.title}`)}>Prev</NavLink>}
                {prev && prev.parent && <NavLink className='btn btn-app float-right mr-3' to={slugify(`/docs/platform/${prev.parent}/${prev.title}`)}>Prev</NavLink>}

                {next && !next.parent && <NavLink className='btn btn-app float-right' to={slugify(`/docs/platform/${next.title}`)}>Next</NavLink>}
                {next && next.parent && <NavLink className='btn btn-app float-right' to={slugify(`/docs/platform/${next.parent}/${next.title}`)}>Next</NavLink>}
              </div>

            </main>
          </div>
        </div>
      </main>
    )
  }
}

export default Resources
