import React, { Component, Fragment } from 'react'

import Content from '../components/Content'

class Templates extends Component {
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
    const { fields: { title = '', desc = '', content = '' } } = this.props
    const { isLoading } = this.state
    return (
      <Fragment>
        {isLoading && <div className='loader-wrap'>
          <img src='/images/loading_nim.gif' alt='' width='240' height='180' />
          <div className='mask' />
        </div>}
        {!isLoading && <div className='Templates page'>
          <div className='container section'>
            <div className='row'>
              <div className='col-lg-12'>
                {title && <h1>{title}</h1>}
                {desc && <p>{desc}</p>}
              </div>
              {content && <div className='col-lg-12'>
                <Content source={content} />
              </div>}
            </div>
          </div>
        </div>}
      </Fragment>
    )
  }
}

export default Templates
