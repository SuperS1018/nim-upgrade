import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Content from './Content'

import '../stylesheets/components/NimCli.css'

class NimCli extends Component {
  handleDownload = url => {
    if (/(iP)/g.test(navigator.userAgent)) {
      alert('Your device does not support files downloading. Please try again in desktop browser.');
      return false;
    }

    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || navigator.userAgent.toLowerCase().indexOf('safari') > -1) {
      let link = document.createElement('a');
      link.href = url;
      link.setAttribute('target', '_blank');

      if (link.download !== undefined) {
        let filename = url.substring(url.lastIndexOf('/') + 1, url.length);
        link.download = filename;
      }

      if (document.createEvent) {
        let ele = document.createEvent('MouseEvents');
        ele.initEvent('click', true, true);
        link.dispatchEvent(ele);
        return true;
      }
    }

    if (url.indexOf('?') === -1) {
      url += '?download';
    }

    window.open(url, '_blank');
    return true;
  }

  render () {
    const { title = '', subtitle = '', download = [], content } = this.props
    return (
      <div className='NimCli section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              {title && <h2>{title}</h2>}
              {subtitle && <Content source={subtitle} />}
            </div>
            {download.map((i, index) => (
              <div className='col-md-4 mb-5' key={i.name + index}>
                <div className='NimCli--Item'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={require('@fortawesome/free-brands-svg-icons')[i.icon]} />
                  </div>
                  <h3>{i.name}</h3>
                  <p>for {i.platform}</p>
                  <button className='btn btn-app' onClick={() => this.handleDownload(i.download)}>Download</button>
                </div>
              </div>
            ))}
            <div className='col-lg-12'>
              <Content source={content} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NimCli
