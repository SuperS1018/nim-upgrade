import React from 'react'
import { NavLink } from 'react-router-dom'

import '../stylesheets/components/NavLink.css'

export default ({ className, children, ...props }) => (
  <NavLink {...props} className={`NavLink ${className || ''}`}>
    {children}
  </NavLink>
)
