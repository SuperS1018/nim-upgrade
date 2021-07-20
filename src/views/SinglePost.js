import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'
import Toc from 'react-toc'

import Content from '../components/Content'
import CTABanner from '../components/CTABanner'
import { timestampWithGeolocation } from '../util/time'
import { slugify } from '../util/url'
import sortBy from 'lodash/sortBy'
import SocialMediaShare from '../components/SocialMediaShare'
import Breadcrumb from '../components/Breadcrumb'

import '../stylesheets/views/SinglePost.css'

class SinglePost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filteredList: [],
      clearedContent: '',
      collapse: false
    }
  }
  componentDidMount () {
    const mainEle = document.querySelector('#containerElement')
    if(mainEle) {
      mainEle.addEventListener('click', this.handleAnchorLinkClick)
    }
    this.handleList()
    this.handleContent()
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    if(this.props !== prevProps) {
      if(!/admin/.test(window.location.pathname)) {
        const hash = window.location.hash.substring(1)
        if(hash) {
          this.handleScroll(hash)
        }
      }
      // this.handleList()
      // this.handleContent()
    }
  }

  componentWillUnmount () {
    if(!/admin/.test(window.location.pathname)) {
      document.querySelector('#containerElement').removeEventListener('click', this.handleAnchorLinkClick)
    }
  }

  handleScroll = (id) => {
    let offset = 200
    const element = document.getElementById(id)
    let scroll = !!element
    if (scroll) {
      const elemPos = element.offsetTop
      // console.log(element, elemPos + offset)
      const target = document.querySelector(this.handleSafariEdgeBrowser() ? 'body' : 'html')
      target.scrollTo({ top: elemPos + offset, left: 0, behavior: 'smooth' })
    } else {
      console.log(`Element not found: ${id}`)
    }
  }

  handleAnchorLinkClick = e => {
    e.preventDefault()
    let { hash, href, target, pathname, parentElement, tagName } = e.target
    // console.log('hash: ', hash, 'href: ', href, 'target: ', target, 'pathname: ', pathname, 'parentElementTag: ', parentElement.tagName, 'tagName: ', tagName)
    if(tagName === 'STRONG' || tagName === 'B' || tagName === 'I' || tagName === 'EM') {
      if(parentElement.tagName === 'A') {
        hash = parentElement.hash
        href = parentElement.href
        target = parentElement.target
        pathname = parentElement.pathname
      }
    }
    if(tagName === 'A' || href) {
      if(target) {
        // external links in content
        window.open(href, target)
      } else {
        // internal links in content
        if (pathname === window.location.pathname) {
          // in page link
          const id = hash.split('#')[1]
          window.location.hash = hash
          this.handleScroll(id)
        } else {
          if (/^mailto:/i.test(href)) {
            let mail = document.createElement('a');
            mail.href = href;
            mail.click();
            return
          }
          // out page link
          this.props.history.replace({
            pathname: pathname,
            hash
          })
        }
      }
    }
  }

  handleSafariEdgeBrowser = () => {
    const ua = navigator.userAgent.toLowerCase()
    if((/safari/.test(ua) && !/chrome/.test(ua)) || /edge/.test(ua)) {
      return true
    } else {
      return false
    }
  }

  handleLinkedInShare (url, title, content) {
    const params = `&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(content)}&source=Nimbella`
    window.open('https://www.linkedin.com/shareArticle?mini=true' + params, '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
  }

  handleTwitterShare (url, title) {
    const params = `?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    window.open('https://twitter.com/share' + params, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
  }

  handleList = () => {
    const { list = [], fields: { title } } = this.props
    if (list.length <= 0) return
    const filteredList = sortBy(list.filter(i => !/mattermost/i.test(i.title) && i.title !== title).slice(0, 5), o => new Date(o.date).getTime()).reverse()
    this.setState({ filteredList })
  }

  handleContent = () => {
    const { body } = this.props.fields
    if (!body) return
    const clearedContent = body.replace(/_|:|,|\*\*|\?|\.|\u200B|\[|\]/ig, '').replace(/ #|\u00a0/ig, ' ')
    this.setState({ clearedContent })
  }

  handleCollapse = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }))
  }

  render () {
    const { fields: { title, date, body, categories = [], ctaBanner, excerpt }, list = [], ctaBanners, cateList = [] } = this.props
    const { filteredList, clearedContent, collapse } = this.state
    const breadcrumb = [
      { name: 'Home', link: '/' },
      { name: 'Blog', link: '/blog' },
      { name: title, link: `/blog/${slugify(title)}`}
    ]
    return (
      <article className={`SinglePost light page ${slugify(title)}`}>
        <div className='container-fluid'>
          <div className='row SinglePost--Banner'>
            <Breadcrumb items={breadcrumb} className='bg-tran banner top-0' />
            {title && <div className='container'><h1 className='SinglePost--Title'>{title}</h1></div>}
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='SinglePost--Content col-md-9 pt-5'>
              <div className='SinglePost--ContentTop'>
                <span className='text text-midGrey Date'>
                  <FontAwesomeIcon icon={faCalendarAlt} /> <span className='SinglePage--Date'>{date && timestampWithGeolocation(date, { date: true })}</span>&nbsp;|
                  {!!categories.length && categories.map((i, index) => (<Fragment key={i.category + index}>{index !== 0 ? ' |' : ''} <span>{i.category}</span></Fragment>))}
                </span>
                <SocialMediaShare
                  title={title}
                  url={`${window.location.origin}${window.location.pathname}`}
                  body={excerpt}
                  align={'right'}
                  showFacebook={false}
                  showTwitter={true}
                  showLinkedin={true}
                />
              </div>
              <div className='SinglePost--InnerContent' id='containerElement'>
                {clearedContent && clearedContent.match(/##/ig) && <div className='SinglePost--TOC'>
                  <h4 className='text-center font-weight-bolder'>Content <span onClick={this.handleCollapse}>{collapse ? <FontAwesomeIcon icon={faPlusSquare} /> : <FontAwesomeIcon icon={faMinusSquare} />}</span></h4>

                  {!collapse && <Fragment><hr className='mt-4 mb-5' /><Toc markdownText={clearedContent} type='default' /></Fragment>}
                </div>}
                {body && <Content source={body} blog='true' />}
              </div>
              {ctaBanner && ctaBanner.length > 0 && <CTABanner source={'blog'} list={ctaBanners} selected={ctaBanner} title={title} />}

            </div>
            <div className='SinglePost--Side col-md-3 mt-5'>
              <h5>Recent Posts</h5>
              <hr />
              <ul>
                {filteredList.map((i, index) => (
                  <li key={i.title + index}>
                    {i.link && <a href={i.link} target='_blank' rel='noopener noreferrer nofollow'>{i.title}</a>}
                    {!i.link && <NavLink to={slugify(`/blog/${i.title}`)}>{i.title}</NavLink>}
                  </li>
                ))}
              </ul>
              <h5>Categories</h5>
              <hr />
              <ul>
                <NavLink to={slugify(`/blog`)}>
                  <li>All</li>
                </NavLink>
                {cateList.map((i, index) => (
                  <NavLink to={slugify(`/blog-category/${i.title}`)}>
                    <li key={i.title + index}>{i.title}</li>
                  </NavLink>
                ))}
              </ul>
            </div>

            <div className='snapshot-fix'>
              <ul>
                {list.map((i, index) => (
                  <li key={i.title + index}>
                    {i.link && <a href={i.link} target='_blank' rel='noopener noreferrer nofollow'>{i.title}</a>}
                    {!i.link && <NavLink to={slugify(`/blog/${i.title}`)}>{i.title}</NavLink>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default SinglePost
