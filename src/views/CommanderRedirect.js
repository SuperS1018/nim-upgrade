import React, { Component } from 'react'
import '../stylesheets/views/Callback.css'

class CommanderRedirect extends Component {
  constructor (props) {
    super(props)
    this.state = { ...props }
  }

  componentDidMount () {
    const param = window.location.search
    if (param && /\?version/.test(param)) {
      const v = param.split('?version=')[1]
      if (v && v.toString() === '2') {
        window.location = this.state.loc2
      }
    } else {
      window.location = this.state.loc1
    }
  }

  render () {
    return (
      <div className='loader-wrap'>
        <img src='/images/loading_nim.gif' alt='' width='240' height='180' />
        <div className='mask' />
      </div>
    )
  }
}

export default CommanderRedirect
