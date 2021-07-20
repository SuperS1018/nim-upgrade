import React, { Component } from 'react'
import { handlePrice } from '../util/price'
import { createCharge } from '../action'
import { withRouter } from 'react-router-dom'

import '../stylesheets/views/Confirm.css'

class Confirm extends Component {
  handleClick = () => {
    const { form, summary, token } = this.props.location.state
    createCharge(form, token, summary).then(res => {
      if(res.statusCode === 200) {
        // console.log(res.result)
        this.props.history.push({
          pathname: '/account-status',
          state: {
            success: true
          }
        })
      }
    })
  }

  handleEdit = () => {
    const { summary: { slackId, slackTeam, token, billed, product, users }, billPrice } = this.props.location.state
    this.props.history.push({
      pathname: '/order',
      state: {
        slackId,
        slackTeam,
        token,
        billed,
        product,
        billPrice,
        users
      }
    })
  }

  render () {
    const { summary } = this.props.location.state
    return (
      <div className='Confirm section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>Confirm & Pay</h1>
              <ul className='list-unstyled'>
                <li>Team ID: {summary.slackId}</li>
                <li>Namespace: {decodeURIComponent(summary.slackTeam)}</li>
              </ul>

              <h2 className='mt-5'>Order Summary</h2>
              <p className='details'>
                <span className='item-name'>{summary.product} {summary.billed} - {summary.users} active user(s)</span>
                <span className='item-price'>{handlePrice(summary.price, true, true)}</span>
              </p>
              <hr className='mt-5' />
              <p className='details'>
                <span className='item-name'>Order Total</span>
                <span className='item-price'>{handlePrice(summary.total, true, true)}</span>
              </p>
              <div className='btn-wrap'>
                <button className='btn btn-app' onClick={this.handleClick}>Confirm</button>
                <button className='btn btn-outline-app ml-5' onClick={this.handleEdit}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Confirm)
