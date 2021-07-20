import React, { Component } from 'react'

import '../stylesheets/components/SnippetCommander.css'

class SnippetCommander extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 0
    }
  }
  componentDidMount () {
    this.handleAnimation(2000, 1500)
  }
  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  handleMouseEnter = e => {
    this.setState({ status: 0 })
    this.handleAnimation(500, 1000)
  }

  handleAnimation = (first, second) => {
    this.timeout = setTimeout(() => {
      this.setState({ status: 1 })
      this.timeout = setTimeout(() => {
        this.setState({ status: 2 })
      }, second)
    }, first)
  }

  render () {
    const { status } = this.state
    const result = [
      { value: 0.38, name: 'Cost Explorer' },
      { value: 8.54, name: 'DynamoDB' },
      { value: 132.00, name: 'EC2 Container Registry (ECR)' },
      { value: 116.13, name: 'EC2 - Other' },
      { value: 8.54, name: 'Elastic Compute - Compute' },
      { value: 5.85, name: 'ECS for Kubernetes' },
      { value: 63.99, name: 'Elastic Load Balancing' },
      { value: 38.53, name: 'Relational Database Service' },
      { value: 1.08, name: 'Route 53' },
      { value: 0.04, name: 'Simple Storage Service' },
      { value: 0.90, name: 'AmazonCloudWatch' },
    ]
    return (
      <div className='Content SnippetCommander' onMouseEnter={this.handleMouseEnter}>
        <div className='Content--Slack'>
          <div className='slack slack-user'>
            <img src='/images/slack-user.jpg' alt='Commander User' />
            <div className='text'>
              <span className='name'>User</span>&nbsp;
              <span className='time'>03:27 PM</span><br />
              <span className='d-block line'>
                {/*<span className={`mask${(status === 1 || status === 2) ? ' show' : '' }`} />*/}
                {(status === 1 || status === 2) && <span>/nc awsbill</span>}
              </span>
            </div>
          </div>
          <div className={`slack slack-admin${status === 2 ? ' show' : ''}`}>
            <img src='/images/slack-admin.png' alt='Commander Admin' />
            <div className='text'>
              <span className='name'>Nimbella Commander</span>&nbsp;
              <span className='app'>App</span>&nbsp;
              <span className='time'>03:27 PM</span><br />
              <div className='result row no-gutters'>
                <span className='col-lg-12'>
                  $368.27 <strong>AWS Cost Month-to-Date</strong>
                </span>
                <div className='clearfix' />
                <hr className='w-100' />

                {result.map((i, index) => (
                  <span className='col-md-6' key={i.name + index}>${i.value} <strong>{i.name}</strong></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SnippetCommander
