import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as Datetime from 'react-datetime'

import COPSPing from '../components/COPSPing'
import COPSCloudError from '../components/COPSCloudError'

import '../stylesheets/views/COPS.css'
import 'react-datetime/css/react-datetime.css'

let cur = []

class Cops extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      showContent: false,
      from: new Date(new Date().setDate(new Date().getDate() - 1)),
      to: new Date(),
      days: 1,
      data: [],
      mysqlList: [],
      dynamodbList: [],
      cloudeventsList: [],
      mysql: {},
      dynamodb: {},
      cloudevents: {},
      cloudPing: [],
      pingError: [],
      cloudError: []
    }
  }

  componentDidMount () {
    const cops = localStorage.getItem('cops')
    if(cops) {
      const { authenticated, timestamp } = JSON.parse(cops)
      const EXPIRE_TIME = 1000 * 60 * 60 * 24
      if(new Date().getTime() - timestamp < EXPIRE_TIME && authenticated) {
        this.setState({ showContent: true })
        // this.handleData()
      } else {
        this.setState({ showContent: false })
      }
    }
  }

  // handleReset () {
  //   this.setState({
  //     username: '',
  //     password: '',
  //     data: [],
  //     mysqlList: [],
  //     dynamodbList: [],
  //     cloudeventsList: [],
  //     mysql: {},
  //     dynamodb: {},
  //     cloudevents: {},
  //     cloudPing: []
  //   })
  // }

  handleValidToDate = (cur, sel) => {
    return new Date().getTime() > new Date(cur._d).getTime()
  }

  handleDateChange = (e, id) => {
    let days = 1;
    let to = null;
    let from = null;
    if(id === 'days') {
      days = e.target.value
      from = new Date(new Date(this.state.to).getTime() - days * 24 * 60 * 60 * 1000)
      this.setState({ days, from })
    }
    if(id === 'to') {
      to = e._d
      from = new Date(new Date(e._d).getTime() - this.state.days * 24 * 60 * 60 * 1000)
      this.setState({ to, from })
    }
  }

  // Login Check
  handleSecuritySubmit = e => {
    e.preventDefault()
    const { password, username } = this.state
    const { REACT_APP_COPS_USERNAME, REACT_APP_COPS_PASSWORD } = process.env
    if(username === REACT_APP_COPS_USERNAME && password === REACT_APP_COPS_PASSWORD) {
      localStorage.setItem('cops', JSON.stringify({ authenticated: true, timestamp: new Date().getTime()}))
      this.setState({ showContent: true })
    } else {
      this.props.alert({
        title: 'Error',
        message: 'Username or password is invalid',
        cb: () => {
          this.props.history.push({
            pathname: '/'
          })
        }
      })
    }
  }

  handleSecurityChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const {
      data,
      from,
      to,
      days,
      username,
      password,
      showContent,
    } = this.state
    if(data && cur && cur.length) {
      console.log('time from data loading till available: ' + (new Date().getTime() - cur[0])/1000 + 'sec')
    }

    return (
      <div className='COPS section page'>
        {!showContent && <div className='COPS--Login security-blocker'>
          <div className='mask'>
            <div className='form-wrap container'>
              <div className='row'>
                <form className='col-md-6 offset-md-3' onSubmit={this.handleSecuritySubmit}>
                  <div className='form-group'>
                    <label htmlFor='inputUsername'>Username</label>
                    <input type='text' className='form-control' name='username' placeholder='Enter username' value={username} onChange={this.handleSecurityChange} autoComplete='off' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='inputPassword'>Password</label>
                    <input type='password' className='form-control' name='password' placeholder='Password' value={password} onChange={this.handleSecurityChange} autoComplete='off' />
                  </div>
                  <button type='submit' className='btn btn-app'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>}


        {showContent && <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1 className='w-100'>Commander Operations</h1>
              <div className='date-wrap'>
                <input type="number" max={4} value={days} onChange={e => this.handleDateChange(e, 'days')} />&nbsp;days before&nbsp;
                <Datetime locale='us' onChange={e => this.handleDateChange(e, 'to')} value={to} isValidDate={this.handleValidToDate} />
              </div>
              <div className='clearfix' />

              {showContent && <COPSPing from={from} to={to} />}
              {showContent && <COPSCloudError from={from} to={to} />}
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

export default withRouter(Cops)
