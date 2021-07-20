import React, { Component, Fragment } from 'react'
import Content from '../components/Content'
import PageBanner from '../components/PageBanner'

import '../stylesheets/views/Integrations.css'

class Widgets extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    if(/nimbella\.com/i.test(window.location.hostname)) {
      this.props.history.replace('/')
    } else {
      this.setState({ isLoading: false })
    }
  }

  render () {
    const { isLoading } = this.state
    const podcast = 'CMS-PODCAST INDENT=0 WIDTH=100 SRC=/images/uploads/sample.mp3 ART=/images/uploads/awsbill_screenshot1.png TITLE=EP1. Podcast sample test'
    const pdf = 'CMS-PDF SRC=/images/uploads/test-ppt.pdf'
    return (
      <Fragment>
        {isLoading && <div className='loader-wrap'>
          <img src='/images/loading_nim.gif' alt='' width='240' height='180' />
          <div className='mask' />
        </div>}
        {!isLoading && <div className='Integrations page'>
          <PageBanner
            title={'Widgets Demo'}
            subtitle={'This is a test page'}
            featuredImage={'/images/uploads/webinars-bg2.png'}
            small={false}
          />

          <div className='container section'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2>Podcast Widget</h2>
                <p>You can upload a mp3 file via CMS and also a cover image. Podcast widget will be created in the content of the page. I am not sure about how big the audio size going to be. I will suggest try not to make the size over 5MB (maybe can be 10MB). The uploaded image dimention should be 1:1.</p>
                <p><i>The title and description are not included in the widget. The widget is below the three dashes.</i><br />---</p>
                <Content source={podcast} />
              </div>
              {/*{integrationList.map((i, index) => (*/}
              {/*<div className='Integrations--Item col-md-4 d-flex' key={i.name + index}>*/}
              {/*<div className='Integrations--Card'>*/}
              {/*<div className='Integrations--Icon' style={{backgroundImage: `url(${i.icon})`}} />*/}
              {/*<a href={i.url} target='_blank' rel='noopener noreferrer nofollow' className='title'>{i.name}</a>*/}
              {/*<p>{i.description}</p>*/}
              {/*<span className='category'>{i.categories[0].category}</span>*/}
              {/*</div>*/}
              {/*</div>*/}
              {/*))}*/}
            </div>
          </div>
          <div className='container section'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2>PDF Widget</h2>
                <p>What you need is to upload a PDF file and select the PDF from the CMS. The file size should be under 5MB.</p>
                <Content source={pdf} />
              </div>
            </div>
          </div>
        </div>}
      </Fragment>
    )
  }
}

export default Widgets
