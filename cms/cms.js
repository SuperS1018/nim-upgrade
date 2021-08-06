import React from 'react'

import '../src/globalStyles.css'
import data from '../src/data.json'
import Home from '../src/views/Home'
import ProductServerlessPlatform from '../src/views/ProductServerlessPlatform'
import ProductPlatform from '../src/views/ProductPlatform'
import ProductNimbellaCommander from '../src/views/ProductNimbellaCommander'
import ProductCommanderSlack from '../src/views/ProductCommanderSlack'
import ProductCommanderMattermost from '../src/views/ProductCommanderMattermost'
import ProductCommanderTeams from '../src/views/ProductCommanderTeams'
import ProductCommanderCli from '../src/views/ProductCommanderCli'
import ProductPostman from '../src/views/ProductPostman'
import ProductNetlify from '../src/views/ProductNetlify'
import FrameworkReact from '../src/views/FrameworkReact'
import Pricing from '../src/views/Pricing'
import PricingCommander from '../src/views/PricingCommander'
import PricingCommanderMattermost from '../src/views/PricingCommanderMattermost'
import PricingCommanderTeams from '../src/views/PricingCommanderTeams'
import About from '../src/views/About'
import Contact from '../src/views/Contact'
import Sales from '../src/views/Sales'
import CaseStudy from '../src/views/CaseStudy'
import Support from '../src/views/Support'
import Careers from '../src/views/Careers'
import Investors from '../src/views/Investors'
import Whitepaper from '../src/views/Whitepaper'
import PortableWhitepaper from '../src/views/PortableWhitepaper'
import POC from '../src/views/POC'
import EnterpriseSolution from '../src/views/EnterpriseSolution'
import ServerlessCloud from '../src/views/ServerlessCloud'
import Forrester from '../src/views/Forrester'
import Blog from '../src/views/Blog'
import Resources from '../src/views/Resources'
import ResourcesCommander from '../src/views/ResourcesCommander'
import ResourcesCommanderMattermost from '../src/views/ResourcesCommanderMattermost'
import ResourcesCommanderTeams from '../src/views/ResourcesCommanderTeams'
import NewsEvents from '../src/views/NewsEvents'
import NewsEventsPage from '../src/views/NewsEventsPage'
import Webinar from '../src/views/Webinar'
import WebinarPage from '../src/views/WebinarPage'
import SinglePost from '../src/views/SinglePost'
import Jobs from '../src/views/Jobs'
import OpenSource from '../src/views/OpenSource'
import Templates from '../src/views/Templates'
import NimbellaCli from '../src/views/NimbellaCli'
import NimbellaWorkbench from '../src/views/NimbellaWorkbench'
import NimbellaStarterProjects from '../src/views/NimbellaStarterProjects'
import Election2020 from '../src/views/Election2020'
import { documentHasTerm } from '../src/util/collection'
import CMSExt from './customize'

console.log('React version', React.version)
CMSExt()
const CMS = window.CMS
CMS.registerPreviewStyle(
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
)
CMS.registerPreviewStyle('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css')
CMS.registerPreviewStyle('/admin/cms.bundle.css')

const newseventsTypes = ['news', 'events']

const getDocument = (collection, name) =>
  data[collection] && data[collection].filter(page => page.name === name)[0]
const getDocuments = (collection, name) => data[collection]

const news = getDocuments('news')
const events = getDocuments('events')
const newsevents = [...news, ...events]

const ctaBanners = getDocuments('ctaBanners')

const webinars = getDocuments('webinars')

const webinarSpeakers = getDocuments('webinarSpeakers')

const faq = getDocument('pages', 'pricing').faq

const globalSettings = getDocument('settings', 'global')
const clientList = getDocument('settings', 'clients').clientList
const founderList = getDocument('settings', 'founders').founderList

const posts = getDocuments('posts')
const recentList = posts.slice(0, 5)

const resources = getDocuments('resources')
const resourcesCommander = getDocuments('resourcesCommander')
const resourcesCommanderMattermost = getDocuments('resourcesCommanderMattermost')
const resourcesCommanderTeams = getDocuments('resourcesCommanderTeams')

const jobs = getDocuments('jobs') || []
const eastJobList = jobs.filter(job =>
  documentHasTerm(job, 'location', 'East')
)
const westJobList = jobs.filter(job =>
  documentHasTerm(job, 'location', 'Wast')
)

// Preview Templates
CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <Home fields={entry.toJS().data} clientList={clientList} current={newsevents} blog={posts} />
))
CMS.registerPreviewTemplate('productFirst-page', ({ entry }) => (
  <ProductServerlessPlatform fields={entry.toJS().data} more={getDocument('pages', 'nimbellaStarterProjects')} />
))
CMS.registerPreviewTemplate('productPlatform-page', ({ entry }) => (
  <ProductPlatform fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('productSecond-page', ({ entry }) => (
  <ProductNimbellaCommander fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('productSlack-page', ({ entry }) => (
  <ProductCommanderSlack fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('productMattermost-page', ({ entry }) => (
  <ProductCommanderMattermost fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('productTeams-page', ({ entry }) => (
  <ProductCommanderTeams fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('productCli-page', ({ entry }) => (
  <ProductCommanderCli fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('election2020-page', ({ entry }) => (
  <Election2020 fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('productPostman-page', ({ entry }) => (
  <ProductPostman fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('productNetlify-page', ({ entry }) => (
  <ProductNetlify fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('frameworkReact-page', ({ entry }) => (
  <FrameworkReact fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('frameworkPython-page', ({ entry }) => (
  <FrameworkReact fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('frameworkNode-page', ({ entry }) => (
  <FrameworkReact fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('frameworkGo-page', ({ entry }) => (
  <FrameworkReact fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('frameworkScala-page', ({ entry }) => (
  <FrameworkReact fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('frameworkJava-page', ({ entry }) => (
  <FrameworkReact fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('frameworkRuby-page', ({ entry }) => (
  <FrameworkReact fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <About fields={entry.toJS().data} founderList={founderList} />
))
CMS.registerPreviewTemplate('whitepaper-page', ({ entry }) => (
  <Whitepaper fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('portableWhitepaper-page', ({ entry }) => (
  <PortableWhitepaper fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('poc-page', ({ entry }) => (
  <POC fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('forrester-page', ({ entry }) => (
  <Forrester fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('caseStudy-page', ({ entry }) => (
  <CaseStudy fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('pricing-page', ({ entry }) => (
  <Pricing fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('pricingCommander-page', ({ entry }) => (
  <PricingCommander fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('pricingCommanderMattermost-page', ({ entry }) => (
  <PricingCommanderMattermost fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('pricingCommanderTeams-page', ({ entry }) => (
  <PricingCommanderTeams fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('nimbellaCli-page', ({ entry }) => (
  <NimbellaCli fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('nimbellaWorkbench-page', ({ entry }) => (
  <NimbellaWorkbench fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('nimbellaStarterProjects-page', ({ entry }) => (
  <NimbellaStarterProjects fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <Contact fields={entry.toJS().data} siteTitle={globalSettings.siteTitle} />
))
CMS.registerPreviewTemplate('sales-page', ({ entry }) => (
  <Sales fields={entry.toJS().data} siteTitle={globalSettings.siteTitle} />
))
CMS.registerPreviewTemplate('templates-page', ({ entry }) => (
  <Templates fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('careers-page', ({ entry }) => (
  <Careers fields={entry.toJS().data} founderList={founderList} eastJobList={eastJobList} westJobList={westJobList} />
))
CMS.registerPreviewTemplate('support-page', ({ entry }) => (
  <Support fields={entry.toJS().data} siteTitle={globalSettings.siteTitle} faq={faq} />
))
CMS.registerPreviewTemplate('source-page', ({ entry }) => (
  <OpenSource fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('enterpriseSolution-page', ({ entry }) => (
  <EnterpriseSolution fields={entry.toJS().data} list={getDocument('pages', 'source').openSourceUse.list} />
))
CMS.registerPreviewTemplate('serverlessCloud-page', ({ entry }) => (
  <ServerlessCloud fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <Blog fields={entry.toJS().data} posts={posts} />
))
CMS.registerPreviewTemplate('newsevents-page', ({ entry }) => (
  <NewsEvents fields={entry.toJS().data} newsevents={newsevents} newseventsTypes={newseventsTypes} />
))
CMS.registerPreviewTemplate('webinars-page', ({ entry }) => (
  <Webinar fields={entry.toJS().data} webinars={webinars} posts={posts} />
))
CMS.registerPreviewTemplate('investors-page', ({ entry }) => (
  <Investors fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePost fields={entry.toJS().data} recentList={recentList} ctaBanners={ctaBanners} />
))
CMS.registerPreviewTemplate('jobs', ({ entry }) => (
  <Jobs fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('news', ({ entry }) => (
  <NewsEventsPage fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('events', ({ entry }) => (
  <NewsEventsPage fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('webinar', ({ entry }) => (
  <WebinarPage fields={entry.toJS().data} ctaBanners={ctaBanners} speakers={webinarSpeakers} />
))
CMS.registerPreviewTemplate('resources', ({ entry }) => (
  <Resources fields={entry.toJS().data} list={resources} />
))
CMS.registerPreviewTemplate('resourcesCommander', ({ entry }) => (
  <ResourcesCommander fields={entry.toJS().data} list={resourcesCommander} />
))
CMS.registerPreviewTemplate('resourcesCommanderMattermost', ({ entry }) => (
  <ResourcesCommanderMattermost fields={entry.toJS().data} list={resourcesCommanderMattermost} />
))
CMS.registerPreviewTemplate('resourcesCommanderTeams', ({ entry }) => (
  <ResourcesCommanderTeams fields={entry.toJS().data} list={resourcesCommanderTeams} />
))

// Return to home when user logging out
window.netlifyIdentity.on('logout', function () {
  document.location.href = '/'
})

// Log netlifySiteURL if editing on localhost
if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  console.log(
    `%cnetlifySiteURL: ${window.localStorage.getItem('netlifySiteURL')}`,
    'color: hotpink; font-size: 15px'
  )
}
