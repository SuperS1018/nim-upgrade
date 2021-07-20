import React, { Component } from 'react'

import Content from '../components/Content'

import '../stylesheets/components/WhyUseCommander.css'

class WhyUseCommander extends Component {

  render () {
    const { title, desc, list = [] } = this.props.data

    return (
      <div className='WhyUseCommander'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              {title && <h2>{title}</h2>}
              {desc && <Content source={desc} />}
            </div>

            {list.map((i, index) => (
              <div className={`col-md-6 col-lg-4${list.length%3 === 1 && index === (list.length - 1) ? ' offset-md-3 offset-lg-4' : ''}`} key={i.title + index}>
                <div className='WhyUseCommander--Item'>
                  {i.icon && i.title && <img src={i.icon} alt={i.title} />}
                  {i.title && <h3>{i.title}</h3>}
                  {i.desc && <Content source={i.desc} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default WhyUseCommander
