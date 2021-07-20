import React, { Component } from 'react'

import NimCli from '../components/NimCli'

class NimbellaCli extends Component {
  render () {
    return (
      <div className='NimbellaCli page'>
        <NimCli {...this.props.fields} />
      </div>
    )
  }
}

export default NimbellaCli
