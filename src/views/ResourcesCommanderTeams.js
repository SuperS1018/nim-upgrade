import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Content from '../components/Content'
import SearchInput, {createFilter} from 'react-search-input'
import NavCommanderTeams from '../components/NavCommanderTeams'
import { slugify, slugifyAnchor } from '../util/url'
import { isCMS } from '../util/misc'
import Scrollspy from 'react-scrollspy'
import '../stylesheets/views/Resources.css'
import '../stylesheets/views/ResourcesCommanderTeams.css'
import smoothscroll from 'smoothscroll-polyfill'
import { googleAnalyticsEvent } from '../util/ga'
import _ from 'lodash'
import Mark from 'mark.js'
import { scrollToElement } from '../util/scroll'

smoothscroll.polyfill()

class ResourcesCommanderTeams extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarSearchTerm: '',
      isOpen: false,
      isMouseover: false,
      isContentSearch: false,
      contentSearch: '',
      contentSearchResult: [],
      contentSearchTerm: '',
      showNext: false
    }
    this.contentSearch = this.contentSearchHandler()
  }

  componentDidMount () {
    if(!/admin/.test(window.location.pathname)) {
      const { action, location: { pathname, hash, key } } = this.props.history
      // console.log(action, pathname, hash, this.props.history)
      if(hash) {
        if(action === 'PUSH' || (action === 'POP' && !key) || action === 'REPLACE') {
          this.timeout = setTimeout(() => {
            scrollToElement(hash.split('#')[1], 1)
          }, 100)
        }
      } else {
        window.location = pathname + '#' + slugifyAnchor(this.props.fields['anchor-subject'][0].title)
      }
    }

    const sidebarEle = document.querySelector('#commander-sidebar')
    if(sidebarEle) {
      sidebarEle.addEventListener('mouseover', _.debounce(this.eventHandler().sidebarMouseover))
    }

    const mainEle = document.querySelector('#containerElement')
    if(mainEle) {
      mainEle.addEventListener('mouseover', _.debounce(this.eventHandler().mainMouseover))
      mainEle.addEventListener('click', this.eventHandler().click)
    }
  }

  componentWillUnmount () {
    document.querySelector('#containerElement').removeEventListener('click', this.eventHandler().click)
    document.removeEventListener('mouseover', this.eventHandler().sidebarMouseover)
    document.removeEventListener('mouseover', this.eventHandler().mainMouseover)
    clearTimeout(this.timeout)
  }

  eventHandler = () => {
    return {
      sidebarMouseover: e => {
        if(e && e.isTrusted && !this.state.isMouseover) {
          this.setState({ isMouseover: true })
        }
      },
      mainMouseover: e => {
        if(e && e.isTrusted && this.state.isMouseover) {
          this.setState({ isMouseover: false })
        }
      },
      click: e => {
        e.preventDefault()
        let { hash, href, target, pathname } = e.target
        if(href) {
          if(target) {
            // external links in content
            window.open(href, target)
          } else {
            // internal links in content
            if (pathname === window.location.pathname) {
              // in page link
              const id = hash.split('#')[1]
              scrollToElement(id, 1, true)
            } else {
              // out page link
              this.props.history.replace({
                pathname: pathname,
                hash
              })
            }
          }
        }
      }
    }
  }

  contentSearchHandler = function () {
    const _self = this
    let instance = null
    let index = 0
    return {
      options: {
        'element': 'span',
        'className': 'highlight',
        // "exclude": [
        //   "a"
        // ],
        // "accuracy": {
        //   "value": "exactly",
        //   "limiters": [",", "."]
        // },
        "separateWordSearch": false,
      },
      mark: function (id) {
        this.unmark()
        instance = new Mark(document.getElementById(id))
        instance.mark(this.search(_self.state.contentSearch), this.options)
      },
      unmark: function () {
        if(instance) {
          instance.unmark()
        }
      },
      search: function (v) {
        let s = v.replace(/,/g, ' ').replace(/\s+/g, ' ').split(/\s/g)
        s = _.map(s, i => {
          if(/\+/g.test(i)) {
            return i.replace(/\+/g, ' ')
          }
          return i
        })
        return s
      },
      keydown: function ({ keyCode, ...evt }) {
        let a = []
        let r = []
        const keywords = this.search(evt.target.value)

        let include = 0

        if(evt.target.value && keyCode === 13) {
          _self.props.fields['anchor-subject'].forEach(i => {
            if(i.hasOwnProperty('anchor-item')) {
              i['anchor-item'].forEach(j => {
                a.push(j)
              })
            }
            a.push(i)
          })

          _.forEach(a, i => {
            include = 0
            _.forEach(keywords, j => {
              if(i.body && new RegExp(j, 'i').test(i.body)) {
                include++
                // console.log(i.body, new RegExp(j, 'i').test(i.body), include + ' / ' + keywords.length)
              }
            })
            if(include >= keywords.length) {
              r.push({ref: i.title, body: i.body})
            }
          })
          googleAnalyticsEvent(9, 'Slack Commander Content Search', evt.target.value)
          _self.setState({ contentSearchResult: r, contentSearch: evt.target.value })
          evt.target.value = ''
        }
      },
      result: {
        show: function (ref) {
          const { isContentSearch } = _self.state
          if(!isContentSearch) {
            ref.focus()
          } else {
            _self.setState({ contentSearch: '', contentSearchResult: [] })
            this.unmark()
          }
          _self.setState({ isContentSearch: !isContentSearch })
        },
        hide: function () {
          _self.setState({ contentSearch: '', contentSearchResult: [], isContentSearch: false })
          this.unmark()
        },
        next: function (init) {
          if(init === true) {
            index = 0
          } else {
            index++
          }
          const ele = document.getElementsByClassName('highlight')
          if(ele && ele.length) {
            if(index >= ele.length) {
              index = 0
            }
            if(index !== 0) {
              ele[index - 1].classList.remove('focused')
            } else {
              ele[ele.length - 1].classList.remove('focused')
            }

            ele[index].classList.add('focused')
            ele[index].scrollIntoView({
              // behavior: 'smooth',
              block: 'center'
            })
          } else {
            index = 0
          }
        },
        click: function (e) {
          e.preventDefault();
          const { contentSearch } = _self.state
          let k = ''
          _.forEach(_self.props.fields['anchor-subject'], i => {
            if(_.has(i,'anchor-item')) {
              const item = _.chain(_self.props.fields['anchor-subject']).map('anchor-item').flatten().filter({title: e.target.text}).sumBy('anchor').value()
              if(item) { k = item }
            }
            const subject = _.chain(_self.props.fields['anchor-subject']).flatten().filter({title: e.target.text}).sumBy('anchor').value()
            if(subject) { k = subject}
          })

          const id = slugifyAnchor(k || e.target.text).replace('/', '')
          this.mark(id)
          if(!!(window.history && window.history.pushState)) {
            window.history.pushState(null, null, `#${id}`)
          } else {
            window.location.hash = `#${id}`
          }

          if(document.querySelector('.highlight') === null) {
            setTimeout(() => { _self.handleScroll(id, 1, true) }, 300)
          } else {
            _self.setState({ showNext: document.querySelectorAll('.highlight').length > 1 })
            this.result.next(true)
          }

          if(contentSearch) {
            googleAnalyticsEvent(9, 'Resource Commander Content', contentSearch)
          }

          _self.setState({ isOpen: false })
        }
      }
    }
  }

  handleClick = (e, index) => {
    e.preventDefault();
    const { sidebarSearchTerm } = this.state
    const id = slugifyAnchor(e.target.text).replace('/', '')
    if(!!(window.history && window.history.pushState)) {
      window.history.pushState(null, null, `#${id}`)
    } else {
      window.location.hash = `#${id}`
    }
    scrollToElement(id, index, true)
    if(sidebarSearchTerm) {
      googleAnalyticsEvent(9, 'Resource Commander Sidebar', sidebarSearchTerm)
    }
    this.setState({ isOpen: false, sidebarSearchTerm: '' })
  }

  handleChange = (sidebarSearchTerm) => {
    this.setState({ sidebarSearchTerm })
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleFilter = (array, sidebarSearchTerm) => {
    let arr = []
    if(sidebarSearchTerm) {
      const r = new RegExp(sidebarSearchTerm, 'gi')
      array.forEach(i => {
        if(i.title.match(r)) {
          arr.push({
            title: i.title,
            anchor: i.anchor
          })

          if(this.handleAnchorItemExist(i)) {
            let filtered = i['anchor-item'] && (i['anchor-item'].filter(createFilter(sidebarSearchTerm, 'title')) || [])
            if(arr.map(j => j.title).includes(i.title)) {
              arr.forEach(j => {
                if(j.title === i.title) {
                  j['anchor-item'] = filtered
                }
              })
            } else {
              arr.push({
                title: ((filtered && filtered.length && sidebarSearchTerm) || !sidebarSearchTerm) ? i.title : '',
                anchor: ((filtered && filtered.length && sidebarSearchTerm) || !sidebarSearchTerm) ? i.anchor : '',
                'anchor-item': filtered
              })
            }
          }
        } else {
          if(this.handleAnchorItemExist(i)) {
            let filtered = i['anchor-item'] && (i['anchor-item'].filter(createFilter(sidebarSearchTerm, 'title')) || [])
            if(filtered.length) {
              arr.push({
                title: ((filtered && filtered.length && sidebarSearchTerm) || !sidebarSearchTerm) ? i.title : '',
                anchor: ((filtered && filtered.length && sidebarSearchTerm) || !sidebarSearchTerm) ? i.anchor : '',
                'anchor-item': filtered
              })
            }
          }
        }
      })
      return arr
    } else {
      return array
    }
  }

  handleAnchorItemExist = (arr) => {
    return (arr['anchor-item'] !== undefined && arr['anchor-item'].length > 0)
  }

  handleScrollSpyUpdate = (ele) => {
    const { isMouseover } = this.state
    if(!isMouseover) {
      const offset = -200
      const target = document.querySelector('li.nav-item.is-active')
      if(target) {
        document.querySelector('#commander-sidebar').scrollTo({ top: target.offsetTop + offset, left: 0, behavior: 'smooth' })
      }
    }
  }

  render () {
    const { isOpen, sidebarSearchTerm, contentSearch, contentSearchResult, isContentSearch, showNext } = this.state
    const { fields: { title }, fields, list, history, noHeaderFooter } = this.props
    const pagename = slugify(this.props.history.location.pathname).replace(/^\//g, '').replace(/\//g, '-') || ''
    const navList = list.sort((a, b) => a.index - b.index).map(i => i.title)
    const filteredList = this.handleFilter(fields['anchor-subject'], sidebarSearchTerm)
    const contentList = fields['anchor-subject']
    let allAnchors = []
    let navItems = []
    filteredList.forEach(i => {
      allAnchors.push(slugifyAnchor(i.anchor || i.title).replace('/', ''))
      navItems.push({ title: i.anchor || i.title, indent: false })
      if(i['anchor-item'] !== undefined) {
        i['anchor-item'].forEach(j => {
          allAnchors.push(slugifyAnchor(j.anchor || j.title).replace('/', ''))
          navItems.push({ title: j.anchor || j.title, indent: true })
        })
      }
    })

    return (
      <div className={`section pb-commander${noHeaderFooter ? ' pt-0' : ''}`}>
        {!noHeaderFooter && <NavCommanderTeams
          list={navList}
          history={history}
          contentSearch={contentSearch}
          handleSearchKeyDown={this.contentSearch.keydown.bind(this.contentSearch)}
          contentSearchResult={contentSearchResult}
          handleSearchResultClick={this.contentSearch.result.click.bind(this.contentSearch)}
          handleShowContentSearch={this.contentSearch.result.show.bind(this.contentSearch)}
          isContentSearch={isContentSearch}
          handleSearchClose={this.contentSearch.result.hide.bind(this.contentSearch)}
          next={this.contentSearch.result.next}
          showNext={showNext}
        />}
        <main className={`Resources Commander flex-grow-1${noHeaderFooter ? ' app-implement' : ''}`} id={`page-${pagename}`}>
          <div className='container-fluid h-100'>
            <div className='row h-100'>
              {(!isCMS() && window.location.pathname !== '/resources-commander/installing') && <nav className={`col-md-3 d-md-block col-lg-2 bg-light sidebar overflow-auto p-0 ${isOpen ? 'vh-100' : ''}`} id='commander-sidebar'>
                <div className={`sidebar-sticky ${isOpen ? 'show' : ''}`}>
                  <SearchInput className='col-lg-12 search-input mt-3' placeholder='Index search' value={sidebarSearchTerm} onChange={this.handleChange} />
                  <hr />
                  <Scrollspy
                    className='nav flex-column list-unstyled w-100'
                    items={ allAnchors }
                    offset={noHeaderFooter ? 0 : -75}
                    currentClassName={'is-active'}
                    onUpdate={this.handleScrollSpyUpdate}
                  >
                    { navItems.map((i, index) => (
                      <li className={`nav-item ${i.indent ? 'indent' : ''} ${pagename === 'resources-commander-reference' && /^\/nc/.test(i.title) ? 'no-indent' : 0}`} key={i.title + index}>
                        <a className='truncate' href='#foo' onClick={e => this.handleClick(e, index)} title={i.title}>
                          {i.title}
                        </a>
                      </li>
                    ))}
                  </Scrollspy>
                </div>
                <button className='show-list' onClick={() => this.handleToggle()}>
                  <span className={`sign ${isOpen ? 'up' : 'down'}`}>{!isOpen ? 'Show' : 'Hide'} List</span>
                </button>
              </nav>}

              <main role='main' className='col-md-9 col-lg-10 ml-sm-auto pt-3 px-4 pb-5 overflow-auto' ref={c => this.mainRef = c} id='containerElement'>
                {contentList.map((i, index) => (
                  <Fragment key={i.title + index}>
                    <div className='anchor-subject' id={slugifyAnchor(i.anchor || i.title).replace('/', '')}>
                      <h1>{i.title}</h1>
                      {!this.handleAnchorItemExist(i) ? <div className='anchor' id={`empty${index}`} /> : null}
                      <Content source={i.body} className={`${slugifyAnchor(title)}`} container={'containerElement'} noPageJump={noHeaderFooter} noExternal={noHeaderFooter} />
                    </div>
                    {this.handleAnchorItemExist(i) &&
                    i['anchor-item'].map((item, idx) => (
                      <div id={slugifyAnchor(item.anchor || item.title).replace('/', '')} key={item.title + idx}>
                        <h2>{item.title}</h2>
                        <Content source={item.body} className={`${slugifyAnchor(title)}`} container={'containerElement'} noPageJump={noHeaderFooter} noExternal={noHeaderFooter} />
                        {/\/resources-commander\/reference/.test(window.location.pathname) && <div className='col-lg-12 mt-5'>
                          {idx < (i['anchor-item'].length - 1) && <hr />}
                        </div>}
                      </div>
                    ))}
                  </Fragment>
                ))}
              </main>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default withRouter(ResourcesCommanderTeams)
