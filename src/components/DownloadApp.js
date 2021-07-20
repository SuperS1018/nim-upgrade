import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import { googleAnalyticsEvent } from '../util/ga'

import '../stylesheets/components/DownloadApp.css'

class DownloadApp extends Component {
  handleDownload = (title, filename) => {
    window.open(`/doc/${filename}`)
    googleAnalyticsEvent(4, 'Product', title)
  }
  render () {
    const DownloadBtn = (props) => (
      <div className='col-lg-8 offset-lg-2'>
        <button className='btn btn-outline-light DownloadApp--Button d-flex justify-content-center align-items-center w-100 h-100 mb-md-2 mt-md-2' onClick={() => this.handleDownload(props.text, props.filename)}>
          <div className='col-1 col-sm-3 float-left'>
            <FontAwesomeIcon className='ml-4 float-right' icon={faCloudDownloadAlt} />
          </div>
          <div className='col-11 col-sm-9 float-left'>
            {props.text}
          </div>
        </button>
      </div>
    )
    return (
      <div className='DownloadApp'>
        <div className='container'>
          <div className='row'>
            <DownloadBtn text={'Download Nimbella Whitepaper'} filename={'nimbella-whitepaper.pdf'} />
            {/*<DownloadBtn text={'Download Nimbella Slack Functions Whitepaper'} />*/}
          </div>
        </div>
      </div>
    )
  }
}

export default DownloadApp
