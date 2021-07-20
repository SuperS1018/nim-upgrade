import React, { Component } from 'react'

import NimStarterProjects from '../components/NimStarterProjects'

class NimbellaStarterProjects extends Component {
  render () {
    return (
      <div className='NimbellaStarterProjects page'>
        <NimStarterProjects {...this.props.fields} />
      </div>
    )
  }
}

export default NimbellaStarterProjects
