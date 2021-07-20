import React from 'react'
import NavLink from './NavLink'
import { withRouter } from 'react-router-dom'

import { slugify } from '../util/url'
import '../stylesheets/components/PostCategoriesNav.css'

const PostCategoriesNav = ({ types }) => {
  return (
    <div className='container'>
      <div className='PostCategoriesNav'>
        <NavLink className='NavLink mr-3' exact to={`/newsevents/`}>
          All
        </NavLink>
        {types.map((type, index) => (
          <NavLink
            className='NavLink text-capitalize mr-3'
            key={type + index}
            to={`/newsevents/type/${slugify(type)}/`}
          >
            {type}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default withRouter(PostCategoriesNav)
