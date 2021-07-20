import React, { Component } from 'react'
import { dateFormatted } from '../util/date'
import { timeFormatted } from '../util/time'
import PropTypes from 'prop-types'
import { HorizontalGridLines, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis, LineSeries, Crosshair } from 'react-vis'
import html2canvas from 'html2canvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera'
import { fetchCommanderMysql } from '../action'

import 'react-vis/dist/style.css';
import '../stylesheets/components/COPSCloudError.css'

const color = [
  '#0021f5',
  '#efe598',
  '#751a7c',
  '#57bc37',
  '#ea3ef7',
  '#367e7f',
  '#989bf8',
  '#75140c',
  '#f08633',
  '#000b7b',
]

class COPSCommanderMysql extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mysql: [],
      apps: [],
      users: [],
      slackUserStates: [],
      commands: [],
      channels: [],
      secrets: [],
      groups: [],
      tasks: [],
      webhooks: [],
      commandsets: [],
      value: false,
      mysqlList: [],
      mysqlCheckboxList: []
    }

    this.canvasRef = React.createRef()
  }

  componentDidMount () {
    this.handleMysql()
    this.init()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(this.props !== prevProps) {
      this.handleMysql();
    }
  }

  init = () => {
    const mysqlList = [ 'apps', 'users', 'slackUserStates', 'commands', 'channels', 'secrets', 'groups', 'tasks', 'webhooks', 'commandsets' ]
    let mysqlCheckboxList = []
    mysqlList.forEach((i, index) => {
      mysqlCheckboxList.push({ name: i, show: !index })
    })
    this.setState({ mysqlList, mysqlCheckboxList })
  }

  handleMysql = () => {
    const { from, to } = this.props
    let apps = []
    let users = []
    let slackUserStates = []
    let commands = []
    let channels = []
    let secrets = []
    let groups = []
    let tasks = []
    let webhooks = []
    let commandsets = []
    fetchCommanderMysql(from, to).then(res => {
      let mysql = []
      try {
        res.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()).forEach((i) => {
          i.detail = JSON.parse(i.detail)
          const date = new Date(i.time).getTime()
          apps.push({ x: date, y: i.detail.apps })
          users.push({ x: date, y: i.detail.users })
          slackUserStates.push({ x: date, y: i.detail['slack_user_states'] })
          commands.push({ x: date, y: i.detail.commands })
          channels.push({ x: date, y: i.detail.channels })
          secrets.push({ x: date, y: i.detail.secrets })
          groups.push({ x: date, y: i.detail.groups })
          tasks.push({ x: date, y: i.detail.tasks })
          webhooks.push({ x: date, y: i.detail.webhooks })
          commandsets.push({ x: date, y: i.detail.commandsets })
          mysql.push(i)
        })
      } catch (err) {}

      this.setState({ mysql, apps, users, slackUserStates, commands, channels, secrets, groups, tasks, webhooks, commandsets })
    })
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
          const dataLine = doc.querySelectorAll(".rv-xy-plot__series--line")
          dataLine.forEach(i => {
            i.style.fill = 'none'
            i.style.strokeWidth = '2px'
          })

          const itemTop = doc.querySelectorAll(".item-top")
          itemTop.forEach(i => {
            i.style.display = 'flex'
            i.style.flexDirection = 'row'
            i.style.alignItem = 'center'
          })
          const colorBlock = doc.querySelectorAll(".color-block")
          colorBlock.forEach(i => {
            i.style.marginTop = '10px'
            i.style.marginLeft = '5px'
          })
          const name = doc.querySelectorAll(".name")
          name.forEach(i => {
            i.style.fontFamily = 'open sans, helvetica, arial'
          })

          doc.querySelector(".rv-crosshair").style.position = 'absolute';
          doc.querySelector(".rv-crosshair").style.top = '-100px';
          doc.querySelector(".details").style.width = '700px';
          doc.querySelector(".row").style.width = '700px';
          const col4 = doc.querySelectorAll('.col-md-4')
          col4.forEach(i => {
            i.style.float = 'left'
            i.style.width = '300px'
            i.style.marginLeft = '5px'
          })
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

  handleCrosshair = async d => {
    const date = d.x
    const filter = await this.state.mysql.filter(i => new Date(i.time).getTime() === date)
    this.setState({ value: { date, detail: filter[0].detail, x: date } })
  }

  _findMinMaxAvg = (parent, child, data) => {
    const a = data.map(i => i.y).sort((a, b) => a - b)
    if(a && a.length) {
      return `max: ${a[a.length - 1]} min: ${a[0] || 0} avg: ${ Math.floor(a.reduce((pre, cur) => cur += pre) * 100 / a.length ) / 100 }`
    } else {
      return 'ERR'
    }
  }

  handleCheckboxChange = e => {
    let { mysqlCheckboxList } = this.state
    mysqlCheckboxList.forEach(i => {
      if(i.name === e.target.name) {
        i.show = !i.show
      }
    })
    this.setState({ mysqlCheckboxList })
  }

  render () {
    const { apps, users, slackUserStates, commands, channels, secrets, groups, tasks, webhooks, commandsets, value, mysqlList, mysqlCheckboxList } = this.state
    const { title } = this.props
    return (
      <div className='COPSCloudError'>
        <div className='screenshot' ref={this.canvasRef}>
          <h2 className='w-100'>{title}</h2>
          <div className='clearfix' />
          <FontAwesomeIcon icon={faCamera} onClick={e => this.handleSaveImage(e, this.canvasRef)} />
          {apps && apps.length !== 0 &&
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

              {mysqlCheckboxList.filter(o => o.name === 'apps')[0].show && <LineSeries data={apps} color={color[0]} onNearestX={this.handleCrosshair} />}
              {mysqlCheckboxList.filter(o => o.name === 'users')[0].show && <LineSeries data={users} color={color[1]} />}
              {mysqlCheckboxList.filter(o => o.name === 'slackUserStates')[0].show && <LineSeries data={slackUserStates} color={color[2]} />}
              {mysqlCheckboxList.filter(o => o.name === 'commands')[0].show && <LineSeries data={commands} color={color[3]} />}
              {mysqlCheckboxList.filter(o => o.name === 'channels')[0].show && <LineSeries data={channels} color={color[4]} />}
              {mysqlCheckboxList.filter(o => o.name === 'secrets')[0].show && <LineSeries data={secrets} color={color[5]} />}
              {mysqlCheckboxList.filter(o => o.name === 'groups')[0].show && <LineSeries data={groups} color={color[6]} />}
              {mysqlCheckboxList.filter(o => o.name === 'tasks')[0].show && <LineSeries data={tasks} color={color[7]} />}
              {mysqlCheckboxList.filter(o => o.name === 'webhooks')[0].show && <LineSeries data={webhooks} color={color[8]} />}
              {mysqlCheckboxList.filter(o => o.name === 'commandsets')[0].show && <LineSeries data={commandsets} color={color[9]} />}

              {value && value.date && <Crosshair values={[value]}>
                <div style={{ backgroundColor: '#222222', padding: '1rem', width: 'fit-content', borderRadius: '3px', color: '#a9a9a9', fontSize: '12px' }}>
                  <div style={{ wordBreak: 'keep-all', whiteSpace: 'nowrap', fontFamily: 'open sans, helvetica, arial'}}>
                    <p style={{ margin: '0' }}>Date: {dateFormatted(value.date)} {timeFormatted(value.date)}</p>
                    {mysqlCheckboxList.filter(o => o.name === 'apps')[0].show && <p style={{ margin: '0' }}>Apps: {value.detail.apps}</p>}
                    {mysqlCheckboxList.filter(o => o.name === 'users')[0].show && <p style={{ margin: '0' }}>Users: {value.detail.users}</p>}
                    {mysqlCheckboxList.filter(o => o.name === 'slackUserStates')[0].show && <p style={{ margin: '0' }}>Slack User States: {value.detail.slack_user_states}</p>}
                    {mysqlCheckboxList.filter(o => o.name === 'commands')[0].show && <p style={{ margin: '0' }}>Commands: {value.detail.commands}</p>}
                    {mysqlCheckboxList.filter(o => o.name === 'channels')[0].show && <p style={{ margin: '0' }}>Channels: {value.detail.channels}</p>}
                    {mysqlCheckboxList.filter(o => o.name === 'secrets')[0].show && <p style={{ margin: '0' }}>Secrets: {value.detail.secrets}</p>}
                    {mysqlCheckboxList.filter(o => o.name === 'groups')[0].show && <p style={{ margin: '0' }}>Groups: {value.detail.groups}</p>}
                    {mysqlCheckboxList.filter(o => o.name === 'tasks')[0].show && <p style={{ margin: '0' }}>Tasks: {value.detail.tasks}</p>}
                    {mysqlCheckboxList.filter(o => o.name === 'webhooks')[0].show && <p style={{ margin: '0' }}>Webhooks: {value.detail.webhooks}</p>}
                    {mysqlCheckboxList.filter(o => o.name === 'commandsets')[0].show && <p style={{ margin: '0' }}>Commandsets: {value.detail.commandsets}</p>}
                  </div>
                </div>
              </Crosshair>}
          </FlexibleWidthXYPlot>}

          <div className='details' style={{ width: '100%' }}>
            <div className='row'>
              {mysqlList.map((i, index) => (
                <div className='col-md-4' key={`checkbox-${i.name}${index}`}>
                  <div className='item-top'>
                    <input type='checkbox' name={i} checked={mysqlCheckboxList.filter(o => o.name === i)[0].show} onChange={this.handleCheckboxChange} />
                    <span className='name text-capitalize'>{i.replace(/_/g, ' ')}</span>
                    <div className='color-block' style={{ backgroundColor: color[index], height: '2px', flexGrow: '1' }}/>
                  </div>
                  <div className='item-bottom' style={{fontFamily: 'open sans, helvetica, arial'}}>
                    {this.state[i] && this._findMinMaxAvg('mysql', i, this.state[i])}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default COPSCommanderMysql

COPSCommanderMysql.propTypes = {
  from: PropTypes.object.isRequired,
  to: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}
