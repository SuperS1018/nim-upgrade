import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Content from './Content'

import '../stylesheets/components/ServerlessCloudThird.css'

class ServerlessCloudThird extends Component {
  render () {
    const { title = '', subtitle = '', list = [] } = this.props
    return (
      <div className='ServerlessCloudThird section padding-large'>
        <div className='container'>
          <div className='row'>
            {title && <div className='col-lg-12'><h2 className='text-center w-100'><Content source={title} /></h2></div>}
            {subtitle && <div className='col-md-6 offset-md-3'><h3 className='text-center w-100'><Content source={subtitle} /></h3></div>}
            {list.map((i, index) => (
              <div className='ServerlessCloudThird--Item col-md-4' key={i.title + index}>
                {i.icon && <img src={i.icon} alt={i.title} width='48' height='48' />}
                {i.title && <div className='col-md-8'>
                  <div className='row'>
                    <h4>
                      {/^http/i.test(i.link) && <a href={i.link} target='_blank' rel='noreferrer nofollow noopener' className='link-blk'>{i.title}</a>}
                      {!/^http/i.test(i.link) && <NavLink to={i.link} className='link-blk'>{i.title}</NavLink>}
                    </h4>
                  </div>
                </div>}
                {i.desc && <div className={index === 0 ? 'col-md-10' : 'col-md-12'}><div className='row'><Content source={i.desc} /></div></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ServerlessCloudThird
