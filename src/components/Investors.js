import React, { Component } from 'react'

import PageCard from '../components/PageCard'

import '../stylesheets/components/Investors.css'

class Investors extends Component {
  render () {
    const { investorList = [] } = this.props.list
    return (
      <div id='investors' className='Investors section thin flex-grow-1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='text-center text-uppercase section-title'>Our Investors</h2>
            </div>
            {investorList.map((i, index) => (
              <PageCard
                total={investorList.length}
                key={i.name + index}
                name={i.name}
                logo={i.logo}
                description={i.description}
                url={i.url}
                gaAction={7}
                gaCatagory='Investors'
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Investors
