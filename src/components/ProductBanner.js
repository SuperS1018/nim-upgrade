import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { googleAnalyticsEvent } from '../util/ga'

import Content from './Content'
import Breadcrumb from './Breadcrumb'
import '../stylesheets/components/ProductBanner.css'

const ProductBanner = ({
  title,
  subtitle,
  image,
  large,
  className = ''
}) => {
  if (large) className += ' ProductBanner-large'
  return (
    <div className={`ProductBanner relative ${className}`}>
      <div className='container relative'>
        <div className='row'>
          <Breadcrumb className='bg-tran banner' options={{ exclude: ['integrations'] }} />
          <div className='col-lg-12 text-center'>
            {title && (
              <h1 className='ProductBanner--Title text-center'>{title}</h1>
            )}
            {subtitle && (
              <Content className='ProductBanner--Subtitle text-center' src={subtitle} />
            )}

            {/*{/product\/platform/.test(window.location.pathname) && <NavLink className='btn btn-app try-btn d-inline-block' to='/request/' onClick={() => googleAnalyticsEvent(0, 'Product Platform', 'Try Now')}>Try Now</NavLink>}*/}

            {/(product\/|)platform/.test(window.location.pathname) && <NavLink className='btn btn-app' to='/signup' onClick={() => googleAnalyticsEvent(0, 'Product Platform', 'Setup for Free')}>Sign up for <strong>Free</strong></NavLink>}

            {(/(product\/|)commander$/.test(window.location.pathname) || /(product|integrations)\/commander\/slack/.test(window.location.pathname) || /productSlack-page|productSecond-page/i.test(window.location.hash)) && <a href='/commander/slack/install?version=2' target='_blank' rel='noopener noreferrer nofollow' className='btn btn-app' onClick={() => googleAnalyticsEvent(0, 'Product Commander', 'Add to Slack')}>Add Commander to <strong>Slack</strong>
            </a>}

            {(/(product|integrations)\/commander\/mattermost/.test(window.location.pathname) || /productMattermost-page/i.test(window.location.hash)) && <NavLink className='btn btn-app' to='/docs/commander/mattermost/quickstart#quickstart' onClick={() => googleAnalyticsEvent(8, 'Product Mattermost', 'Setup in Mattermost')}>Setup in <strong>Mattermost</strong></NavLink>}

            {(/(product|integrations)\/commander\/microsoft-teams/.test(window.location.pathname) || /productTeams-page/i.test(window.location.hash)) && <a className='btn btn-app' href='https://teams.microsoft.com/l/app/be4751a5-db56-4e45-bb27-397e0aa614b1' target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(7, 'Product Microsoft Teams', 'Setup in Microsoft Teams')}>Add Commander to <strong>Teams</strong></a>}

            {(/(product|integrations)\/commander\/cli/i.test(window.location.pathname) || /productCli-page/i.test(window.location.hash)) && <a className='btn btn-app' href='https://github.com/nimbella/commander-cli#commander-cli' target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(8, 'Product CLI', 'Setup in CLI')}>Setup <strong>CLI</strong></a>}

            {(/(product|integrations)\/postman/.test(window.location.pathname) || /productPostman-page/i.test(window.location.hash)) && <a className='btn btn-app' href='https://github.com/nimbella/nimbella-cli-plugins/blob/dev/postman/README.md#nimbella-postman-plugin' target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(8, 'Product Postman', 'Setup in Postman')}>Setup in <strong>Postman</strong></a>}

            {(/(product|integrations)\/netlify/.test(window.location.pathname) || /productNetlify-page/i.test(window.location.hash)) && <a className='btn btn-app' href='https://github.com/nimbella-corp/netlify-plugin-nimbella#netlify-plugin-nimbella' target='_blank' rel='noopener noreferrer nofollow' onClick={() => googleAnalyticsEvent(8, 'Product Netlify', 'Setup in Netlify')}>Setup in <strong>Netlify</strong></a>}

            <div className='clearfix' />

            {image && (
              <div className='ProductBanner--Image'><img src={image} alt={title} className='banner-img' /></div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
ProductBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default ProductBanner
