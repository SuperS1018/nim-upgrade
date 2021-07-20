import React, { Component } from 'react'

import PageCard from '../components/PageCard'

import '../stylesheets/views/Investors.css'

class Investors extends Component {
  render () {
    const { investorList = [] } = this.props.fields
    return (
      <div className='Investors section flex-grow-1'>
        <div className='container'>
          <div className='row'>
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
