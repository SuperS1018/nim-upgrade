import React, { Component } from 'react'
import { scrollToElement } from '../util/scroll'

import '../stylesheets/views/Election2020.css'
import ProductBanner2 from '../components/ProductBanner2'
import Content from '../components/Content'
import BannerCTAPlatformSignup from '../components/BannerCTAPlatformSignup'
import EnquiryFormElectionAjax from '../components/EnquiryFormElectionAjax'

class Election2020 extends Component {
  componentDidMount () {
    if(!/admin/.test(window.location.pathname)) {
      const hash = window.location.hash.substring(1)
      if(hash) {
        this.timeout = setTimeout(() => {
          scrollToElement(hash, 1, true, -80)
        }, 100)
      }
    }
    const mainEle = document.querySelector('#containerElement')
    if(mainEle) {
      mainEle.addEventListener('click', this.handleAnchorLinkClick)
    }
  }

  componentWillUnmount () {
    if(!/admin/.test(window.location.pathname)) {
      document.querySelector('#containerElement').removeEventListener('click', this.handleAnchorLinkClick)
    }
    clearTimeout(this.timeout)
  }

  handleAnchorLinkClick = e => {
    e.preventDefault()
    let { hash, href, target, pathname, parentElement, tagName } = e.target
    // console.log('hash: ', hash, ' href: ', href, ' target: ', target, ' pathname: ', pathname, ' tagname: ', tagName)
    if(tagName === 'STRONG' || tagName === 'B' || tagName === 'I' || tagName === 'EM') {
      if(parentElement.tagName === 'A') {
        hash = parentElement.hash
        href = parentElement.href
        target = parentElement.target
        pathname = parentElement.pathname
      }
    }
    if(tagName === 'A' && href) {
      if(target) {
        // external links in content
        window.open(href, target)
      } else {
        // internal links in content
        if (pathname === window.location.pathname) {
          // in page link
          const id = hash.split('#')[1]
          scrollToElement(id, 1, true, -80)
          window.history.pushState(null, null, `#${id}`)
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

  render () {
    const { election2020: { pageBanner = {}, content = '', signupBanner } } = this.props.fields
    return (
      <div className='Election2020 page'>
        {pageBanner && <ProductBanner2
          title={pageBanner.title}
          subtitle={pageBanner.subtitle}
          btnTxt={pageBanner.btnTxt}
          featuredImage={pageBanner.featuredImage}
          // featuredBgImage={pageBanner.featuredImage}
          backgroundImage={pageBanner.backgroundImage}
          autoplay={true}
          // handleModalCommanderShow={handleModalCommanderShow}
        />}
        <div className='Election2020--Content container section'>
          <div className='row'>
            <div className='col-md-12 col-lg-8' id='containerElement'>
              <Content source={content.body} />
            </div>
            <div className='col-md-8 col-lg-4 offset-md-2 offset-lg-0' id='registration' name='registration'>
              <div className='Election2020--Form pt-5'>
                <h3>Registration form</h3>
                <EnquiryFormElectionAjax />
              </div>
            </div>
          </div>
        </div>
        <BannerCTAPlatformSignup title={signupBanner.title} btn={signupBanner.btn} />
      </div>
    )
  }
}

export default Election2020