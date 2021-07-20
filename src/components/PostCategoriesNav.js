import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { slugify } from '../util/url'
import '../stylesheets/components/PostCategoriesNav.css'

const PostCategoriesNav = ({ categories }) => (
  <div className='container'>
    <div className='PostCategoriesNav'>
      <NavLink className='NavLink mr-3' exact to={`/blog`}>
        All
      </NavLink>
      {categories.map((category, index) => (
        <NavLink
          className='NavLink text-capitalize mr-3'
          key={category.title + index}
          to={`/blog-category/${slugify(category.title)}`}
        >
          {category.title}
        </NavLink>
      ))}
    </div>
  </div>
)

PostCategoriesNav.propTypes = {
  categories: PropTypes.array
}

export default PostCategoriesNav
