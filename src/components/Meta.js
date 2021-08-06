import React from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _pickBy from 'lodash/pickBy'

const onlyTruthyValues = obj => _pickBy(obj, item => item)

const Meta = props => {
  const {
    title,
    url,
    postFeaturedImage,
    description,
    absoluteImageUrl,
    twitterSiteAccount,
    twitterCreatorAccount,
    headerScripts,
    noindex,
    canonicalLink,
    schema
    // overwrite { title, description } if in fields or fields.meta
  } = {
    ...props,
    ...onlyTruthyValues(_get(props, 'fields')),
    ...onlyTruthyValues(_get(props, 'fields.meta'))
  }
  // write headerScripts
  const headerScriptsElement = document.head.querySelector('#headerScripts')
  if (headerScripts && headerScriptsElement) {
    headerScriptsElement.outerHTML = headerScripts
  }
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property='og:title' content={`${title} | Nimbella.com®`} />}
      {description && <meta name='description' content={description} />}
      {description && <meta property='og:description' content={description} />}
      {url && <meta property='og:type' content='website' />}
      {url && <meta property='og:url' content={url} />}
      {postFeaturedImage && (
        <meta property='og:image' content={`https://nimbella.com${postFeaturedImage}`} />
      )}
      {absoluteImageUrl && (
        <meta name='twitter:card' content='summary_large_image' />
      )}
      {absoluteImageUrl && (
        <meta property='og:image' content={absoluteImageUrl} />
      )}
      {twitterSiteAccount && (
        <meta name='twitter:site' content={twitterSiteAccount} />
      )}
      {twitterCreatorAccount && (
        <meta name='twitter:creator' content={twitterCreatorAccount} />
      )}
      {noindex && <meta name='robots' content='noindex' />}
      {canonicalLink && <link rel='canonical' href={canonicalLink} />}
      {schema && schema.map((i, index) => (
        <script key={i.json + index} type='application/ld+json'>{i.json}</script>
      ))}
      <meta name='google-site-verification' content='IzuwJgzl9iUPT1KVtgFhUqXaI7xSr-RQQ8NR-fRoaNE' />
      <meta name='insight-app-sec-validation' content='763bb93b-9bda-4689-b600-9ebea0ace42b' />
    </Helmet>
  )
}

export default Meta
