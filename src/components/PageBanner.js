import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Content from './Content'
import BackgroundImage from './BackgroundImage'
import Breadcrumb from './Breadcrumb'

import '../stylesheets/components/PageBanner.css'

const PageBanner = ({
  title,
  subtitle,
  featuredImage,
  large,
  small,
  className = '',
  type = 1
}) => {
  if (large) className += ' PageBanner-large'
  if (small) className += ' PageBanner-small'

  const BreadcrumbEle = ({ ...props }) => {
    let breadcrumb = []
    if (/^\/join-us/i.test(window.location.pathname)) {
      breadcrumb = [{ name: 'Home', link: '/' }, { name: 'Careers', link: '/join-us' }]
      return (<Breadcrumb className='bg-tran banner top-0' items={breadcrumb} />)
    } else if (/^\/contact/i.test(window.location.pathname)) {
      breadcrumb = [{ name: 'Home', link: '/' }, { name: 'Support', link: '/contact' }]
      return (<Breadcrumb className='bg-tran banner top-0' items={breadcrumb} />)
    } else if (/^\/newsevents/i.test(window.location.pathname)) {
      breadcrumb = [{ name: 'Home', link: '/' }, { name: 'News & Events', link: '/newsevents' }]
      return (<Breadcrumb className='bg-tran banner top-0' items={breadcrumb} />)
    } else if (/portable-whitepaper/i.test(window.location.pathname)) {
      breadcrumb = [{ name: 'Home', link: '/' }, { name: 'Technical Whitepaper', link: '/make-serverless-frictionless-and-portable-whitepaper' }]
      return (<Breadcrumb className='bg-tran banner top-0' items={breadcrumb} />)
    } else {
      return (<Breadcrumb className='bg-tran banner top-0' />)
    }
  }

  return (
    <div className={`PageBanner relative ${className}`}>
      <BreadcrumbEle />
      {featuredImage && (
        <BackgroundImage src={featuredImage} opacity={1} lazy='true' />
      )}
      <div className='container relative'>
        {type === 1 &&
          <Fragment>
            <h1 className='PageBanner--Title text-center'>{title}</h1>
            {subtitle && (
              <Content className='PageBanner--Subtitle text-center d-block' src={subtitle} />
            )}
          </Fragment>
        }

        {type === 2 &&
          <Fragment>
            {subtitle && <h1 className='PageBanner--Title text-center text-title'>{subtitle}</h1>}
          </Fragment>
        }

      </div>
    </div>
  )
}
PageBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageBanner
