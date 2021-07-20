import React from 'react'

import PageBanner from '../components/PageBanner'
import NewsEventsTypesNav from '../components/NewsEventsTypesNav'
import NewsEventsSection from '../components/NewsEventsSection'

import '../stylesheets/views/NewsEvents.css'

export default ({
  fields,
  newsevents = [],
  newseventsTypes = [],
  data = [],
  showFeatured = true
}) => {
  const { title, subtitle, featuredImage } = fields
  const ifEvent = () => {
    return !!data.filter(i => new Date(i.date).getTime() >= Date.now()).length
  }
  return (
    <main className='NewsEvents page'>
      <PageBanner
        title={title}
        subtitle={subtitle}
        featuredImage={featuredImage}
      />

      {newseventsTypes.length && ifEvent() ? <NewsEventsTypesNav types={newseventsTypes} /> : <div className='mt-5' />}

      {!!newsevents.length && <NewsEventsSection posts={newsevents} />}
    </main>
  )
}
