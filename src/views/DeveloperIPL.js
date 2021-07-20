import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import BannerDeveloperIpl from '../components/BannerDeveloperIPL'

import '../stylesheets/views/DeveloperIPL.css'

class DeveloperIpl extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    this.setState({ isLoading: false })
  }

  render () {
    const { isLoading } = this.state
    return (
      <div className='DeveloperIPL page'>
        <BannerDeveloperIpl />
        <div className='container section'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <h1>Welcome to the #DeveloperIPL challenge sponsored by Nimbella, Postman and HackerEarth.</h1>
              <div className='team-lead tile'>
                <p>If you are a <strong>team lead</strong> click the following link
                  to create a Nimbella platform account for your team:</p>
                {!isLoading && <NavLink className='btn btn-app' to='/login?ipl=true'>Login / Sign up</NavLink>}
              </div>
              <div className='team-member tile'>
                <p>If you are a <strong>team member</strong>, you should obtain an authorization
                  token from your team lead to develop using the team's
                  Nimbella platform account.</p>
                {!isLoading && <a className='btn btn-app' href='https://nimbella-apigcp.nimbella.io/login.html?iplMember=true' target='_blank' rel='noopener noreferrer nofollow'>Link to Resources</a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DeveloperIpl