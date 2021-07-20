import React, { Component } from 'react'
import HighLight from 'react-highlight.js'
import { fetchCloudError } from '../action'
import PropTypes from 'prop-types'
import html2canvas from 'html2canvas'
import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera'

import 'react-vis/dist/style.css';
import '../stylesheets/components/COPSCloudError.css'

class CopsCloudError extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cloudError: [],
    }
  }

  componentDidMount () {
    this.handleCloudError()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(this.props !== prevProps) {
      this.handleCloudError()
    }
  }

  handleCloudError = () => {
    const { from, to } = this.props
    try {
      fetchCloudError(from, to).then(async res => {
        if(res) {
          await res.map(i => {
            let o = i
            let detail = JSON.parse(o.detail)
            if(detail.hasOwnProperty('response') && detail.response.hasOwnProperty('body') && typeof detail.response.body === 'string') {
              try {
                detail.response.body = JSON.parse(detail.response.body)
              } catch (error) {}
            }

            if(detail.hasOwnProperty('error') && typeof detail.error === 'string') {
              try {
                detail.error = JSON.parse(detail.error)
              } catch (error) {}
            }

            if(detail.statusCode && detail.statusCode.toString() === '503') {
              if(detail.message && /^503 - /.test(detail.message)) {
                detail.message = JSON.parse(detail.message.replace(/^503 - /, ''))
                if(typeof detail.message === 'string') {
                  detail.message = JSON.parse(detail.message)
                }
              }
            }

            o.detail = JSON.stringify(detail, null, '\t')
            return o
          })
          res.forEach((i, index) => this[`highlight${index}`] = React.createRef())
          this.setState({ cloudError: res })
        }
      })
    } catch(err) {}

  }

  handleSaveImage = (e, ref, text) => {
    e.preventDefault()
    let input =  ref.current
    if(text) {
      const code = document.createElement('code')
      code.innerText = ref.current.props.children
      input = code
    }

    const getHTML = (who, deep) => {
      if(!who || !who.tagName) return '';
      let txt, ax, el= document.createElement("div");
      el.appendChild(who.cloneNode(false));
      txt= el.innerHTML;
      if(deep){
        ax= txt.indexOf('>')+1;
        txt= txt.substring(0, ax)+who.innerHTML+ txt.substring(ax);
      }
      el= null;
      return txt;
    }

    let tempFrame = document.createElement('iframe')
    tempFrame.classList.add('cops-iframe')
    document.body.appendChild(tempFrame)
    let frameDocument = tempFrame.document

    if(tempFrame.contentDocument) {
      frameDocument = tempFrame.contentDocument
    } else if (tempFrame.contentWindow) {
      frameDocument = tempFrame.contentWindow.document
    }
    frameDocument.open()
    frameDocument.write(getHTML(input, true))
    html2canvas(frameDocument.body, {
      allowTaint: true,
      useCORS: true,
      logging: false,
      onclone: doc => {
        if(!text) {
          const tspan = doc.querySelectorAll('tspan');
          tspan.forEach(i => {
            i.style.fontSize = '11px';
            i.style.fontFamily = 'open-sans, helvetica, arial'
          });
          const text = doc.querySelectorAll('text');
          text.forEach(i => {
            i.style.fontSize = '11px';
            i.style.fontFamily = 'open-sans, helvetica, arial'
          });
          const title = doc.querySelectorAll('.rv-xy-plot__axis__title text');
          title[0].style.transform = 'translate(250px, -15px)'
          title[1].style.transform = 'translate(10px, 40px) rotate(-45deg)'
          doc.querySelector(".rv-xy-plot").style.overflow = 'unset';
          doc.querySelector(".rv-xy-plot").style.height = '280px';
          doc.querySelector(".rv-xy-plot__inner").style.overflow = 'unset';
          doc.querySelector(".rv-xy-plot__inner").style.height = '280px';
          doc.querySelector(".fa-camera").style.display = 'none';
        }
      }
  }).then(canvas => {
      let imgData = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      this.handleDownloadURL(imgData)
      frameDocument.close()
      document.body.removeChild(tempFrame)
    })
  }

  handleDownloadURL = imgData => {
    let a = document.createElement('a')
    a.href = imgData.replace('image/png', 'image/octet-stream')
    a.download = 'graph.png'
    a.click()
  }

  handleToggle = (s) => {
    this.setState({ [s]: !this.state[s] })
  }

  render () {
    const { cloudError } = this.state
    return (
      <div className='COPSCloudError'>
        <div className='cloud-error row'>
          <div className='col-md-12'>
            <h2>Cloud Error Detail</h2>
            <hr />
          </div>

          {cloudError.map((i, index) => (
            <div className='col-md-6 mt-5' key={i.time + index}>
              <p className='item d-flex'>
                <span>
                  <b>Date:</b> {new Date(i.time).toLocaleDateString()}<br />
                  <b>Time:</b> {new Date(i.time).toLocaleTimeString()}
                </span>
                <span className='align-self-center ml-5'>
                  <button className='btn btn-outline-app btn-small float-left' onClick={() => this.handleToggle(i.time+index)}>Show Detail</button>
                </span>
              </p>
              <Collapse className='screenshot adjust' isOpen={this.state[i.time+index]}>
                <FontAwesomeIcon icon={faCamera} onClick={e => this.handleSaveImage(e, this[`highlight${index}`], true)} />
                <HighLight language='json' ref={this[`highlight${index}`]}>
                  {i.detail}
                </HighLight>
              </Collapse>
            </div>
          ))}

          {cloudError && cloudError.length === 0 && <div className='col-md-12'><p>No cloud error</p></div>}
        </div>
      </div>
    )
  }
}

export default CopsCloudError

CopsCloudError.propTypes = {
  from: PropTypes.object.isRequired,
  to: PropTypes.object.isRequired
}
