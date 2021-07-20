import React from 'react'
import PropTypes from 'prop-types'

import Content from './Content'
import Breadcrumb from './Breadcrumb'

import '../stylesheets/components/FrameworkBanner.css'

const FrameworkBanner = ({
  title,
  subtitle,
  featuredImage,
  backgroundImage,
  className = ''
}) => {
  const { pathname } = window.location
  const trimed = pathname.slice(1, pathname.length)
  const name = trimed.charAt(0).toUpperCase() + trimed.slice(1)
  const breadcrumb = [
    { name: 'Home', link: '/' },
    { name: `Frameworks - ${name}`, link: pathname }
  ]
  return (
    <div className={`FrameworkBanner relative ${className}`} style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className='container relative'>
        <div className='row'>
          <Breadcrumb className='bg-tran banner top-large' items={breadcrumb} />
          <div className='col-lg-12 text-center'>
            {featuredImage && (
              <img src={featuredImage} width={80} alt={title} />
            )}
            {title && (
              <h1 className='FrameworkBanner--Title text-center'>
                <Content source={title} />
              </h1>
            )}
            {subtitle && (
              <Content className='FrameworkBanner--Subtitle text-center' src={subtitle} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
FrameworkBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default FrameworkBanner
