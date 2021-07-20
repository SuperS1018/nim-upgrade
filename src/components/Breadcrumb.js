import React, { Fragment } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import '../stylesheets/components/Breadcrumb.css'

export default props => {
  let link = ''
  const handleLinkToName = s => {
    const modified = s.replace(/-/ig, ' ')
    return modified.charAt(0).toUpperCase() + modified.slice(1)
  }
  // options items
  // exclude: <Array: string> this is to show what items should be excluded from the breadcrumb
  const handleOptions = () => {
    const { pathname } = window.location
    const { options = {} } = props
    const home = [{ name: 'Home', link: '/' }]
    const pathnameItems = pathname.split('/')
    const trimmed = pathnameItems.slice(1, pathnameItems.length)
    let output = []
    output = home.concat(trimmed.map(i => {
      link += `/${i}`
      return { name: handleLinkToName(i), link }
    }))

    if (Object.prototype.hasOwnProperty.call(options, 'exclude')) {
      try {
        options.exclude.forEach(j => {
          output = output.filter(k => {
            return k.name.toLowerCase() !== j.toLowerCase()
          })
        })
      } catch (err) { console.log(err) }
    }

    return output
  }
  const { className = '', items = handleOptions() } = props
  return (
    <div className={`Breadcrumb ${className}`}>
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            {items.map((i, index) => (
              <Fragment key={i.name + index}>
                {index === items.length - 1 && <BreadcrumbItem active>{i.name}</BreadcrumbItem>}
                {index < items.length - 1 && <BreadcrumbItem><NavLink to={i.link}>{i.name}</NavLink></BreadcrumbItem>}
              </Fragment>
            ))}
          </Breadcrumb>
        </div>
      </div>
    </div>
  )
}
