import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Content from '../components/Content'

import '../stylesheets/components/PricingTable.css'

class PricingTable extends Component {
  handleValue = (value) => {
    if(!isNaN(value)) {
      return (<div className='text-larger'><sup>$</sup>{value}</div>)
    }
    return (<div className='mt-4 mb-4'>{value}</div>)
  }

  handleClick = (index) => {
    switch(index) {
      case 0:
        window.open('https://apigcp.nimbella.io/wb/')
        break
      case 1:
        this.props.history.push('/request')
        break
      case 2:
        this.props.history.push('/contact')
        break
      default:
        console.log('*** pricing button totle is not 3?')
    }
  }

  render () {
    const { list } = this.props
    return (
      <div className='PricingTable section'>
        <div className='container'>
          <div className='row'>
            {list.map((i, index) => (
              <div className={`PricingTable--Item float-left d-flex col-lg-4 ${(list.length === 2 && index === 0) ? 'offset-lg-2' : ''}`} key={i.level + index}>
                <div className='table-wrap w-100'>
                  {i.level && (
                    <div className='head w-100 text-center'>{i.level}</div>
                  )}
                  <div className='pricing'>
                    {i.value && (
                      <div className='value w-100 text-center'>{this.handleValue(i.value)}</div>
                    )}

                    {i.unit && <div className='unit w-100 text-center'>{i.unit}</div>}

                    {i.note && (
                      <div className='note w-100 text-center'>({i.note})</div>
                    )}

                  </div>
                  {i.description && (
                    <div className='description w-100 text-center'>{i.description}</div>
                  )}

                  <div className='detail w-100'>
                    <ul>
                      {i.detailList.map((i, index) => (
                        <li key={i.detailItem + index}><Content source={i.detailItem} /></li>
                      ))}
                    </ul>
                  </div>
                  {i.button && (
                    <div className='btn-wrap'><button className='btn btn-app' onClick={() => this.handleClick(index)}>{i.button}</button></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PricingTable)
