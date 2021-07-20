import React, { Component } from 'react'

import '../stylesheets/components/EnterpriseSolutionFourth.css'
import PageCard from './PageCard'

class EnterpriseSolutionFourth extends Component {
  render () {
    const { title = '', subtitle = '', list = [] } = this.props
    return (
      <div className='EnterpriseSolutionFourth section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <h2 className='text-center w-100'>{title}</h2>
              <h3 className='text-center w-100'>{subtitle}</h3>
            </div>

            {list.map((i, index) => (
              <PageCard
                total={list.length}
                index={index}
                key={i.name + index}
                name={i.name}
                logo={i.icon}
                url={i.url}
                description={i.desc}
                gaAction={7}
                gaCatagory='EnterpriseSolution'
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default EnterpriseSolutionFourth
