import React, { Component } from 'react'
import HighLight from 'react-highlight.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCheck } from '@fortawesome/free-solid-svg-icons'

import '../stylesheets/components/SnippetPlatform.css'

class SnippetPlatform extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 0
    }
  }
  componentDidMount () {
    this.handleAnimation()
  }
  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  handleMouseEnter = e => {
    this.setState({ status: 0 })
    this.handleAnimation()
  }

  handleAnimation = () => {
    this.timeout = setTimeout(() => {
      this.setState({ status: 1 })
      this.timeout = setTimeout(() => {
        this.setState({ status: 2 })
      }, 1000)
    }, 500)
  }

  render () {
    const { status } = this.state
    const code = `function main(args) {
  let name = args.name || 'stranger'
  let greeting = 'Hello ' + name + '!'
  return {"body":  greeting}
}`
    return (
      <div className='SnippetPlatform w100' onMouseEnter={this.handleMouseEnter}>
        <div className='SnippetPlatform--Frame no-gutters row'>
          <div className='SnippetPlatform--Code col-md-12'>
            <div className='head'>
              <FontAwesomeIcon icon={faCloud} />
              [Editable] Not public
            </div>
            <div className='code'>
              <ul className='list-unstyled'>
                {[1, 2, 3, 4, 5, 6].map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
              <HighLight language='javascript'>{code.toString()}</HighLight>
            </div>
          </div>
          <div className='SnippetPlatform--Param col-md-12'>
            <div className='input'>
              <div className='head'>
                <div className='icon-input' />
                INPUT PARAMETERS
              </div>
              <HighLight language='javascript'>{`{ "name": "nimbella"}`}</HighLight>
            </div>
            <div className='output'>
              <div className='head'>
                <FontAwesomeIcon icon={faCheck} />
                OUTPUT
              </div>
              { status === 0 && <span className='javascript hljs' /> }
              { status === 1 && <HighLight language='javascript'>{`Loading ...`}</HighLight> }
              { status === 2 && <HighLight language='javascript'>{`{ "body": "Hello nimbella!"}`}</HighLight> }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SnippetPlatform
