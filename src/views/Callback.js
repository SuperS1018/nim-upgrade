import React, { Component } from 'react'

import '../stylesheets/views/Callback.css'

class Callback extends Component {
  componentDidMount () {
    const { func } = this.props
    if(func) {
      func(this.props)
    }
    // this.props.history.replace(this.props.loc)
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(prevProps !== this.props) {
      const { func } = prevProps
      if(func) {
        func(this.props)
      }
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

export default Callback
