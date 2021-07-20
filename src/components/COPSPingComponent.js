import React, { Component } from 'react'
import { dateFormatted } from '../util/date'
import { numberToTime, timeFormatted } from '../util/time'
import PropTypes from 'prop-types'
import { HorizontalGridLines, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis, VerticalBarSeries, Crosshair } from 'react-vis'
import html2canvas from 'html2canvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera'

import 'react-vis/dist/style.css';
import '../stylesheets/components/COPSCloudError.css'

class COPSPingComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cloudPing: [],
      cloudPingError: [],
      pingError: [],
      value: false
    }

    this.canvasRef = React.createRef()
  }

  componentDidMount () {
    this.props.title === 'Icmp Ping Endpoint' ? this.handleIcmp() : this.handlePing()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(this.props !== prevProps) {
      this.props.title === 'Icmp Ping Endpoint' ? this.handleIcmp() : this.handlePing()
    }
  }

  handleIcmp = () => {
    let cloudPing = []

    this.props.data.then(res => {
      res.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()).forEach((i) => {
        i.detail = JSON.parse(i.detail)
        i.detail.time = parseInt(i.detail.time)
        cloudPing.push({
          x: new Date(i.time).getTime(),
          y: i.detail.time
        })
      })
      this.setState({ cloudPing })
    })
  }

  handlePing = () => {
    let cloudPing = []
    let cloudPingError = []

    let pingError = []
    let errorStart = null
    let errorEnd = null


    this.props.data.then(res => {
      const maxValue = JSON.parse(
        res.sort((a, b) => JSON.parse(b.detail).elapsedTime - JSON.parse(a.detail).elapsedTime)[0].detail
      ).elapsedTime
      res.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()).forEach((i) => {
        // data clean up for react-vis
        i.detail = JSON.parse(i.detail)
        if(this.handleCloudping(i.detail)) {
          cloudPing.push({
            x: new Date(i.time).getTime(),
            y: i.detail.elapsedTime,
            hasError: i.detail.hasError,
            hasPong: i.detail.hasPong,
            statusCode: i.detail.statusCode
          })
          cloudPingError.push({
            x: new Date(i.time).getTime(),
            y: 0,
            hasError: i.detail.hasError,
            hasPong: i.detail.hasPong,
            statusCode: i.detail.statusCode
          })
        } else {
          cloudPing.push({
            x: new Date(i.time).getTime(),
            y: 0,
            hasError: i.detail.hasError,
            hasPong: i.detail.hasPong,
            statusCode: i.detail.statusCode
          })
          cloudPingError.push({
            x: new Date(i.time).getTime(),
            y: maxValue,
            hasError: i.detail.hasError,
            hasPong: i.detail.hasPong,
            statusCode: i.detail.statusCode
          })
        }

        // Find ping error
        if(this.handleCloudping(i.detail)) {
          i.detail.showError = 0
          if(errorStart !== null) {
            errorEnd = new Date(i.time).getTime()
            let timeDiff = errorEnd - errorStart
            pingError.push({
              start: dateFormatted(errorStart) + ' ' + timeFormatted(errorStart),
              end: dateFormatted(errorEnd) + ' ' + timeFormatted(errorEnd),
              duration: numberToTime(timeDiff/1000)
            })
            errorStart = null
          }
        } else {
          i.detail.showError = maxValue
          if(errorStart === null) {
            errorStart = new Date(i.time).getTime()
          }
        }
      })

      this.setState({ cloudPing, cloudPingError, pingError })
    })

  }

  handleCloudping = s => {
    return !s.hasError && s.hasPong && s.statusCode === 200
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
          doc.querySelector("h2").style.fontFamily = 'open sans, helvetica, arial'
          doc.querySelector(".rv-xy-plot").style.overflow = 'unset';
          doc.querySelector(".rv-xy-plot").style.height = '280px';
          doc.querySelector(".rv-xy-plot__inner").style.overflow = 'unset';
          doc.querySelector(".rv-xy-plot__inner").style.height = '280px';
          doc.querySelector(".fa-camera").style.display = 'none';
          const name = doc.querySelectorAll(".name")
          name.forEach(i => {
            i.style.fontFamily = 'open sans, helvetica, arial'
          })
          const eleRvCrosshair = doc.querySelector(".rv-crosshair")
          if(eleRvCrosshair) {
            eleRvCrosshair.style.position = 'absolute'
            eleRvCrosshair.style.top = '-100px';
          }
          const grid = doc.querySelectorAll(".rv-xy-plot__grid-lines__line")
          grid.forEach(i => {
            i.style.stroke = '#e6e6e9'
          })
          const axis = doc.querySelectorAll(".rv-xy-plot__axis__line")
          axis.forEach(i => {
            i.style.stroke = '#e6e6e9'
          })
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

  render () {
    const { cloudPing, cloudPingError, pingError, value } = this.state
    const { from, to, title } = this.props
    return (
      <div className='COPSCloudError'>
        <div className='screenshot' ref={this.canvasRef}>
          <h2 className='w-100'>{title}</h2>
          <div className='clearfix' />
          <FontAwesomeIcon icon={faCamera} onClick={e => this.handleSaveImage(e, this.canvasRef)} />
          {cloudPing && cloudPing.length !== 0 &&
            <FlexibleWidthXYPlot
              height={300}
              onMouseLeave={() => this.setState({ value: false })}
              onClick={e => this.handleSaveImage(e, this.canvasRef)}
            >
              <XAxis
                tickFormat={ v => (<tspan>
                  <tspan x={'1em'} dy={'1em'}>{dateFormatted(v, true)}</tspan>
                  <tspan x={'1em'} dy={'1em'}>{timeFormatted(v)}</tspan>
                </tspan>) }
                title={'Date/Time'}
                hideLine
                style={{
                  title: {transform: 'translate(250px, 30px)'}
                }}
              />
              <YAxis
                title={'Elapsed Time'}
                style={{
                  title: {transform: 'translate(-40px, 40px) rotate(-45deg)'}
                }}
              />
              <HorizontalGridLines />
              <VerticalGridLines />
              <VerticalBarSeries
                data={cloudPing}
                color={'#46a8b9'}
                onNearestX={d => d.y ? this.setState({ value: d }) : null}
                cluster={'true'}
              />
              {cloudPingError && cloudPingError.length !== 0 && <VerticalBarSeries
                data={cloudPingError}
                color={'#f00'}
                onNearestX={d => d.y ? this.setState({ value: d }) : null}
                cluster={'true'}
              />}
              {value && value.hasError && (value.statusCode < 200 || value.statusCode >= 300) && <Crosshair values={[value]}>
                <div style={{ backgroundColor: '#222222', padding: '1rem', width: 'fit-content', borderRadius: '3px', color: '#a9a9a9', fontSize: '12px' }}>
                  <p style={{ wordBreak: 'keep-all', whiteSpace: 'nowrap', fontFamily: 'open sans, helvetica, arial' }}>
                    Date: {dateFormatted(value.x)}<br />
                    Elapsed Time: {value.y}<br />
                    Has Error: {value.hasError ? 'true' : 'false'}<br />
                    Has Pong: {value.hasPong ? 'true' : 'false'}<br />
                    Status Code: {value.statusCode}
                  </p>
                </div>
              </Crosshair>}

              {value && !value.hasError && value.statusCode >= 200 && value.statusCode < 300 && <Crosshair values={[value]}>
                <div style={{ backgroundColor: '#222222', padding: '1rem', width: 'fit-content', borderRadius: '3px', color: '#a9a9a9', fontSize: '12px' }}>
                  <p style={{ wordBreak: 'keep-all', whiteSpace: 'nowrap', fontFamily: 'open sans, helvetica, arial' }}>
                    Date: {dateFormatted(value.x)}<br />
                    Elapsed Time: {value.y}
                  </p>
                </div>
              </Crosshair>}
          </FlexibleWidthXYPlot>}

          {pingError && pingError.length !== 0 && <div className='ping-error row'>
            <div className='col-md-12'>
              <h4>Failure(s): {dateFormatted(from)} - {dateFormatted(to)}</h4>
              <hr />
            </div>

            {pingError.map((i, index) => (
              <div className='col-md-4' key={i.start + index}>
                <p className='item'>
                  <b>Start time:</b> {i.start}<br />
                  <b>End time:</b> {i.end}<br />
                  <b>Duration:</b> {i.duration}
                </p>
              </div>
            ))}
          </div>}
        </div>
      </div>
    )
  }
}

export default COPSPingComponent

COPSPingComponent.propTypes = {
  from: PropTypes.object.isRequired,
  to: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}
