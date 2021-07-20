import React, { Component } from 'react'
import Content from './Content'

import '../stylesheets/components/FrameworkCTA.css'

class FrameworkCTA extends Component {
  render () {
    const { title = '', desc = '', content = '', btnTxt = '', btnLink = '' } = this.props
    return (
      <div className='FrameworkCTA'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='main-wrap wrap'>
                <div>
                  {title && <h2>{title}</h2>}
                  {desc && <p>{desc}</p>}
                  {content && <Content className='text-light' source={content} />}
                </div>
                {btnTxt && <a className='btn btn-app' href={btnLink} target='_blank' rel='noreferrer noopener nofollow'>{btnTxt}</a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FrameworkCTA
