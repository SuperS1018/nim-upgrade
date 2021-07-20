import React, { Component } from 'react'
import ModalComponent from '../components/Modal'
import { NavLink } from 'react-router-dom'

class ModalCommander extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false,
      name: '',
      intro: ''
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(prevProps !== this.props) {
      const { modal } = this.props
      if(modal) {
        this.handleOpen()
      } else {
        this.handleClose()
      }
    }
  }

  // componentDidMount () {
  //   const linkEle = document.querySelector('.CommanderThreeSteps--Item a')
  //   if(!!linkEle && linkEle.innerHTML === 'here') {
  //     linkEle.href = '#show-integration'
  //
  //     linkEle.onclick = evt => {
  //       evt.preventDefault()
  //
  //     }
  //   }
  // }

  handleOpen = () => {
    const intro = (<ul>
      <li>
        <NavLink to='/integrations/commander/slack' onClick={this.handleClose}>
          <img src='/images/uploads/slack-logo-tran.svg' alt='Slack' width='50' height='50' />
          <span>Slack</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/integrations/commander/mattermost' onClick={this.handleClose}>
          <img src='/images/uploads/mattermost-logo.svg' alt='Mattermost' width='50' height='50' />
          <span>Mattermost</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/integrations/commander/microsoft-teams' onClick={this.handleClose}>
          <img src='/images/uploads/microsoft-teams-logo.svg' alt='Microsoft Teams' width='50' height='50' />
          <span>Microsoft Teams</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/integrations/commander/cli' onClick={this.handleClose}>
          <img src='/images/uploads/cli-logo.svg' alt='Nimbella Cli' width='50' height='50' />
          <span>Commander CLI</span>
        </NavLink>
      </li>
    </ul>)
    this.setState({
      modal: true,
      name: 'Choose a Commander integration',
      intro
    })
  }

  handleClose = () => {
    this.props.close()
    this.setState({
      modal: false
    })
  }

  render () {
    const { modal, name, intro } = this.state
    return (
      <ModalComponent className='CommanderThreeSteps--Modal' modal={modal} name={name} intro={intro} close={this.handleClose} />
    )
  }
}

export default ModalCommander
