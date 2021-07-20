import React, { Component } from 'react'

import '../stylesheets/components/NimStarterProjects.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { googleAnalyticsEvent } from '../util/ga'

class NimStarterProjects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      copied: false,
      selectedProject: props.other && props.other.length ? props.other[0].name : ''
    }
  }

  handleCopied = () => {
    this.setState({copied: true})
    let tmr = setTimeout(() => {
      this.setState({copied: false})
      clearTimeout(tmr)
    }, 1000)
  }

  handleSelect = e => {
    this.setState({ selectedProject: e.target.value })
  }

  render () {
    const { title = '', starter = [], other = [] } = this.props
    const { selectedProject } = this.state
    return (
      <div className='NimStarterProjects section'>
        <p className={`Content--Copied ${this.state.copied ? 'show-msg' : ''}`}>copied</p>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              {title && <h2 className='mb-5'>{title}</h2>}
            </div>
            {starter.map((i, index) => (
              <div className='col-md-4 mb-5' key={i.name + index}>
                <div className='NimStarterProjects--Item'>

                  {i.demolink && <a href={i.demolink} target='_blank' rel='noreferrer noopener nofollow' onClick={() => googleAnalyticsEvent(7, 'Starter Projects Image', i.name)}><img src={i.image} alt={i.name} width='100%' /></a>}
                  {!i.demolink && <img src={i.image} alt={i.name} width='100%' />}

                  <p>{i.runtime}</p>

                  {i.demolink && <a href={i.demolink} target='_blank' rel='noreferrer noopener nofollow' onClick={() => googleAnalyticsEvent(7, 'Starter Projects Text', i.name)}><h3>{i.name}</h3></a>}
                  {!i.demolink && <h3>{i.name}</h3>}

                  <code className='block mt-5'>
                    {i.command}&nbsp;
                    <CopyToClipboard text={i.command} onCopy={() => this.handleCopied()}>
                      <span className='copy-to-clipboard-btn'><FontAwesomeIcon icon={faCopy}/></span>
                    </CopyToClipboard>
                  </code>
                </div>
              </div>
            ))}

            <div className='divider' />

            <div className='col-lg-12'>
              <div className='NimStarterProjects--Other'>
                <h2>Git clone other demo projects</h2>
                <div className='project-select'>
                  <p>Project - </p>
                  <div className='select-wrap'>
                    <select name="" id="" onChange={this.handleSelect}>
                      {other.map((i, index) => (
                        <option value={i.name} key={i.name + index}>{i.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {other.map((i, index) => (
                  <div className='list' key={i.name + index}>
                    <code className={`block mt-5${i.name !== selectedProject ? ' d-none' : 'd-block'}`}>
                      {i.command}&nbsp;
                      <CopyToClipboard text={i.command} onCopy={() => this.handleCopied()}>
                        <span className='copy-to-clipboard-btn'><FontAwesomeIcon icon={faCopy}/></span>
                      </CopyToClipboard>
                    </code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NimStarterProjects
