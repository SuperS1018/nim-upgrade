import React, { Component } from 'react'
import NavLink from './NavLink'

class TermsSidebar extends Component {
  render () {
    const { list } = this.props
    return (
      <div className='sidebar col-md-3'>
        <ul className='nav mb-5'>
          {list.map((i, index) => (
            <li className='nav-item w-100' key={i.name + index}>
              <NavLink className='nav-link' to={i.url}>
                {i.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TermsSidebar
