import React, { Component } from 'react'

import NimWorkbench from '../components/NimWorkbench'

class NimbellaWorkbench extends Component {
  render () {
    return (
      <div className='NimbellaWorkbench page'>
        <NimWorkbench {...this.props.fields} />
      </div>
    )
  }
}

export default NimbellaWorkbench
