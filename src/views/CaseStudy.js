import React, { Component } from 'react'

import Content from '../components/Content'
import { Link } from 'react-router-dom'
import CaseStudyBanner from '../components/CaseStudyBanner'
import postscribe from 'postscribe'
import { isCMS } from '../util/misc'

import '../stylesheets/views/CaseStudy.css'

class CaseStudy extends Component {
  componentDidMount () {
    this.handlePostscribe()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.handlePostscribe()
    }
  }

  handleObjectEmpty = o => {
    return o && Object.keys(o).length !== 0
  }

  handlePostscribe = () => {
    if (this.props.fields.secondSection.videoId) {
      const { videoId } = this.props.fields.secondSection
      if(!isCMS()) {
        postscribe('#root', `<script src="https://fast.wistia.com/embed/medias/${videoId}.jsonp" async></script>`)
        postscribe('#root', '<script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>')
      }
    }
  }

  render () {
    const { fields = {} } = this.props
    const { heroBanner = {}, secondSection = {}, thirdSection = {}, fourthSection = {}, fifthSection = {}, sixthSection = {} } = fields
    return (
      <div className='CaseStudy' style={{ backgroundColor: '#F3F4F6' }}>
        {this.handleObjectEmpty(heroBanner) && <CaseStudyBanner title={heroBanner.title} desc={heroBanner.desc} img={heroBanner.img} btnTxt={heroBanner.btnTxt} btnLink={heroBanner.btnLink} />}

        {this.handleObjectEmpty(secondSection) && <div className='CaseStudySecond section' id='CaseStudySecond'>
          <div className='container'>
            <div className='pattern' />
            <div className='row'>
              <div className='col-md-6'>
                {!isCMS() && secondSection.videoId && <div className='wistia_responsive_padding' style={{margin: '3rem auto'}}>
                  <div className='wistia_responsive_wrapper'>
                    <div className={`wistia_embed wistia_async_${secondSection.videoId} seo=false videoFoam=true`} id='video-wrap' style={{height: '100%', width: '100%', position: 'relative'}}>
                      <div className='wistia_swatch'>
                        <img
                          src={`https://fast.wistia.com/embed/medias/${secondSection.videoId}/swatch`}
                          alt={secondSection.name}
                          aria-hidden='true'
                          // onLoad={e => e.style.opacity = 1}
                        />
                      </div>
                    </div>
                  </div>
                </div>}
              </div>
              <div className='col-md-4 offset-md-1 align-self-center'>
                {secondSection.content && <Content source={secondSection.content} />}
                {secondSection.name && <h2>{secondSection.name}</h2>}
                {secondSection.position && <h3>{secondSection.position}</h3>}
              </div>
            </div>
          </div>
        </div>}

        {this.handleObjectEmpty(thirdSection) && <div className='CaseStudyThird section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                {thirdSection.title && <h2>{thirdSection.title}</h2>}
                {thirdSection.twitterHash && <span className='hash'>#{thirdSection.twitterHash}</span>}
                {thirdSection.contentTop && <Content className='content-top' source={thirdSection.contentTop} />}
                {thirdSection.solutionTitle && <Content source={`### ${thirdSection.solutionTitle}`}/>}
                <div className='row mt-5 mb-2'>
                  {thirdSection.solutionImg && <div className='col-md-2'>
                    <img src={thirdSection.solutionImg} className='avatar' alt={thirdSection.solutionName} width='140' height='140' />
                  </div>}
                  {thirdSection.solutionName && <div className='col-md-10'>
                    {thirdSection.solutionTestimonial && <div className='msg-wrap'>
                      <Content source={thirdSection.solutionTestimonial}/>
                      <div className='profile-wrap'>
                        <div>
                          <hr />
                          {thirdSection.solutionName && <h4>{thirdSection.solutionName}</h4>}
                          {thirdSection.solutionPosition && <p className='position'>{thirdSection.solutionPosition}</p>}
                        </div>
                      </div>
                    </div>}
                  </div>}
                </div>
                {thirdSection.contentBottom && <Content source={thirdSection.contentBottom} />}
              </div>
            </div>
          </div>
        </div>}

        {this.handleObjectEmpty(fourthSection) && <div className='CaseStudyFourth section'>
          <div className='container'>
            <div className='pattern' />
            <div className='col-lg-12'>
              {fourthSection.title && <h2>{fourthSection.title}</h2>}
              {fourthSection.content && <Content source={fourthSection.content} />}
              {fourthSection.btnTxt && <Link className='btn btn-app' to={fourthSection.btnLink}>{fourthSection.btnTxt}</Link>}
            </div>
          </div>
        </div>}

        {this.handleObjectEmpty(fifthSection) && <div className='CaseStudyFifth section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                {fifthSection.title && <h2>{fifthSection.title}</h2>}
                {fifthSection.content && <Content source={fifthSection.content} />}
              </div>
            </div>
          </div>
        </div>}

        {this.handleObjectEmpty(sixthSection) && <div className='CaseStudySixth section'>
          <div className='container'>
            <div className='row'>
              <div className='content-wrap'>
                {sixthSection.title && <h2>{sixthSection.title}</h2>}
                {sixthSection.content && <Content source={sixthSection.content} />}
                {sixthSection.btnTxt && <a href={sixthSection.btnLink} className='btn btn-app' target='_blank' rel='noreferrer nofollow noopener'>{sixthSection.btnTxt}</a>}
              </div>
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

export default CaseStudy
