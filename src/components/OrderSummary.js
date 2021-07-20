import React, { Component } from 'react'
import { handlePrice } from '../util/price'

import '../stylesheets/components/OrderSummary.css'

class OrderSummary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render () {
    const { summary: { product, price, item }, workspace } = this.props
    return (
      <div className='col-md-4 OrderSummary'>
        <div className='OrderSummary--Head'>
          <h2 className='text text-white'>Order Summary</h2>
        </div>
        <div className='OrderSummary--Body'>
          <div className='product mb-5'>
            <h3>{product}</h3>
          </div>

          <ul className='list-unstyled'>
            <li>Workspace - {workspace}</li>
          </ul>

          <div className='details'>
            <div className='item-name'>{handlePrice(price)} {item}</div>
            <div className='item-quantity'>{handlePrice(price, true, true)}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderSummary
