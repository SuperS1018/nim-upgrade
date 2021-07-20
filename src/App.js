import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Helmet from 'react-helmet'
import { isMobile } from './util/misc'
import { timestampWithGeolocation } from './util/time'

import ScrollToTop from './components/ScrollToTop'
import Meta from './components/Meta'
import Home from './views/Home'
import About from './views/About'
import Blog from './views/Blog'
import Careers from './views/Careers'
import NewsEvents from './views/NewsEvents'
import Webinar from './views/Webinar'
import SinglePost from './views/SinglePost'
import Pricing from './views/Pricing'
import PricingCommander from './views/PricingCommander'
import NewsEventsPage from './views/NewsEventsPage'
import WebinarPage from './views/WebinarPage'
import Employee from './views/Employee'
import CaseStudy from './views/CaseStudy'
import FrameworkReact from './views/FrameworkReact'
import Whitepaper from './views/Whitepaper'
import PortableWhitepaper from './views/PortableWhitepaper'
import WhitepaperThank from './views/WhitepaperThank'
import ProductServerlessPlatform from './views/ProductServerlessPlatform'
import ProductNimbellaCommander from './views/ProductNimbellaCommander'
import ProductCommanderSlack from './views/ProductCommanderSlack'
import ProductCommanderMattermost from './views/ProductCommanderMattermost'
import ProductCommanderTeams from './views/ProductCommanderTeams'
import ProductCommanderCli from './views/ProductCommanderCli'
import ProductPostman from './views/ProductPostman'
import ProductNetlify from './views/ProductNetlify'
import EnterpriseSolution from './views/EnterpriseSolution'
import Tools from './views/Tools'
import ContactForm from './views/ContactForm'
import DevelopmentExperience from './views/DevelopmentExperience'
import Login from './views/Login'
import Signup from './views/Signup'
// import Investors from './views/Investors'
// import Widgets from './views/Widgets'
import OpenSource from './views/OpenSource'
import Resources from './views/Resources'
import ResourcesCommander from './views/ResourcesCommander'
import ResourcesCommanderMattermost from './views/ResourcesCommanderMattermost'
import ResourcesCommanderTeams from './views/ResourcesCommanderTeams'
import CommanderPortal from './views/CommanderPortal'
// import Election2020 from './views/Election2020'
// import Support from './views/Support'
import Slack from './views/Slack'
import Contact from './views/Contact'
import Request from './views/Request'
import Jobs from './views/Jobs'
import OurStory from './views/OurStory'
import Terms from './views/Terms'
import Policy from './views/Policy'
import Trademark from './views/Trademark'
import AcceptablePolicy from './views/AcceptablePolicy'
// eslint-disable-next-line
import NoMatch from './views/NoMatch'
import Nav2 from './components/Nav2'
import Callback from './views/Callback'
import Footer from './components/Footer'
import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import data from './data.json'
import { slugify } from './util/url'
import { documentHasTerm, getCollectionTerms } from './util/collection'
import Auth from './Auth/Auth'
import history from './history'
import CookieConsent from 'react-cookie-consent'
import GoogleAnalytics from './components/GoogleAnalytics'
import { googleAnalyticsEvent } from './util/ga'
import Order from './views/Order'
import AccountStatus from './views/AccountStatus'
import Cops from './views/COPS'
import CommanderRedirect from './views/CommanderRedirect'
import Alert from './components/Alert'
// eslint-disable-next-line
import ProductHuntBanner from './components/ProductHuntBanner'
// eslint-disable-next-line
import UpcomingWebinarBanner from './components/UpcomingWebinarBanner'
import PromotionBanner from './components/PromotionBanner'
import Templates from './views/Templates'
import ModalCommander from './components/ModalCommander'
import NimbellaCli from './views/NimbellaCli'
import NimbellaWorkbench from './views/NimbellaWorkbench'
import NimbellaStarterProjects from './views/NimbellaStarterProjects'
import POC from './views/POC'
import Forrester from './views/Forrester'

const RouteWithMeta = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={routeProps => (
      <Fragment>
        <Meta {...props} />
        <Component {...routeProps} {...props} />
      </Fragment>
    )}
  />
)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data,
      profile: {},
      isAuthenticated: false,
      authChecking: false,
      showAlert: false,
      loading: false,
      alertContent: {},
      idToken: '',
      auth: null,
      noticeBanner: 0,
      producthuntBanner: false,
      modalCommander: false,
      userMetadata: undefined,
      upcomingWebinar: {},
      webinarTimeleft: ''
    }
    this.webinars = this.handleData('webinars')
    this.isStaging = false
    this.isStaging = window.location.hostname === 'nimbella-staging.netlify.app' || window.location.hostname === 'localhost' || window.location.hostname === 'sam-test.netlify.app' || window.location.hostname === 'nimbella-test.com'
  }

  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      const { auth } = this.state
      if(auth) {
        auth.handleAuthentication()
      }
    }
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection] || []

  goTo(route) {
    history.replace(`/${route}`)
  }

  checkAuth = auth => {
    const { renewSession } = auth;
    this.setState({ authChecking: true })
    renewSession().then(res => {
      if(res.isAuthenticated) {
        this.setState({ ...res, authChecking: false })
      } else {
        this.setState({ profile: {}, authChecking: false })
      }
    }, err => {
      this.setState({ authChecking: false })
      console.log('Error: ', err)
    })
  }

  logout = () => {
    const { auth } = this.state
    auth.logout()
    googleAnalyticsEvent(0, 'Header', 'logout button click')
  }

  handleData = (collection, timeSensitive) => {
    return this.getDocuments(collection).filter(i => {
      if(timeSensitive) {
        return i.status !== 'Draft' && new Date(i.date).getTime() >= Date.now()
      }
      return i.status !== 'Draft'
    })
  }

  handleAlertShow = (content) => {
    this.setState({
      showAlert: true,
      alertContent: content
    })
  }

  handleAlertHide = () => {
    this.setState({
      showAlert: false,
    })
  }

  handleLoadingShow = () => {
    this.setState({
      loading: true
    })
  }

  handleLoadingHide = () => {
    this.setState({
      loading: false
    })
  }

  handleModalCommanderShow = () => {
    this.setState({
      modalCommander: true
    })
  }

  handleModalCommanderClose = () => {
    if(this.state.modalCommander) {
      this.setState({
        modalCommander: false
      })
    }
  }

  // Handle style with notice banner and producthunt banner
  handleNoticeBanner = () => {
    try {
      const p = this.state.producthuntBanner
      const u = this.state.upcomingWebinar === undefined ? false : Object.entries(this.state.upcomingWebinar).length !== 0
      const allowProducthunt = /(^\/$)/i.test(window.location.pathname)
      const allowWebinar = !/^\/pricing\/commander|^\/integrations\/commander\/microsoft-teams/i.test(window.location.pathname)
      const forbidden = /teams-app|^\/terms|^\/privacy|^\/trademark|^\/acceptable-use|^\/contact/i.test(window.location.pathname)
      // console.log('route changed', p, u, allowProducthunt, allowWebinar)
      if((!p && !u) || (p && !u && !allowProducthunt) || (!p && isMobile()) || forbidden) {
        // console.log('notice banner: ', 0)
        this.setState({ noticeBanner: 0 })
        return 0
      }
      if((p && !u && allowProducthunt) || (u && !p && allowWebinar)) {
        // console.log('notice banner: ', 1)
        this.setState({ noticeBanner: 1 })
        return 1
      }
      if(p && u) {
        // console.log('notice banner: ', 2)
        this.setState({ noticeBanner: allowProducthunt ? (allowWebinar ? 2 : 1 ) : 1 })
        return allowProducthunt ? 2 : 1
      }
    } catch (err) { console.log(err) }
  }

  // create fake webinars
  test = () => {
    this.webinars = []
    this.webinars.push({
      body: '# Test for the notice banner',
      content: '# Test for the notice banner',
      date: new Date(new Date(new Date().setHours(22)).setMinutes(56)),
      duration: '180',
      title: `This is title. This is the title`
    })
  }

  // handleWebinar to show notice banner
  handleUpcomingWebinar = async () => {
    const now = new Date().getTime()
    const upcoming = this.webinars.filter(i => new Date(timestampWithGeolocation(new Date(i.date), {date: true, time: true, timezone: true})).getTime() > now)
    const sorted = upcoming.length > 1 ? upcoming.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) : upcoming
    if (sorted.length > 0 || isMobile()) {
      this.setState({ upcomingWebinar: sorted[sorted.length-1] })
    } else {
      this.setState({ upcomingWebinar: {} })
    }
  }

  handleRefreshUpcomingWebinar = () => {
    this.handleUpcomingWebinar().then(() => this.handleNoticeBanner())
  }

  handleFireFox89Alert = () => {
    const options = {
      title: 'For Firefox 89 Private Mode Users',
      message: (<Fragment><p>If you are having login issues, please turn off your <b>tracking protection</b></p><ul><li>Click on the <b>Shield</b> icon <img src='/images/icons/ff-shield-icon.png' alt='shield icon' width='20' height='22.25' className='m-0' /> next to the URL bar</li><li>Switch off <b>Enhanced Tracking Protection</b></li></ul><p>Still having issues? Please send an email to <a href='mailto:support@nimbella.com'>support@nimbella.com</a></p></Fragment>),
      cb: () => {
        window.localStorage.setItem('ff89Alert', 'true')
      }
    }
    const ff89Alert = window.localStorage.getItem('ff89Alert')
    const { userAgent } = window.navigator
    const match = userAgent.match(/Firefox\/(.*)$/i) || []

    if (match.length > 0 && parseInt(match[1]) >= 89 && ff89Alert !== 'true') { // Check if Firefox version 89
      let db = indexedDB.open('test') // Check if on private browsing window
      db.onerror = () => {
        console.log('Firefox (Private window): ', parseInt(match[1]))
        this.handleAlertShow(options)
      }
    }
  }

  componentDidMount() {
    const auth = new Auth()
    this.setState({ auth })
    this.checkAuth(auth)

    // this.handleFireFox89Alert() // to show alert message for FireFox Private Mode

    // this.test()
    // this.handleUpcomingWebinar().then(() => this.handleNoticeBanner())
  }

  render () {
    // console.log('data.json', data);
    // eslint-disable-next-line
    const {
      isAuthenticated,
      profile,
      auth,
      showAlert,
      alertContent,
      loading,
      idToken,
      noticeBanner,
      producthuntBanner,
      authChecking,
      modalCommander,
      userMetadata,
      // eslint-disable-next-line
      upcomingWebinar,
      // eslint-disable-next-line
      webinarTimeleft
    } = this.state;
    const globalSettings = this.getDocument('settings', 'global')
    const founderList = this.getDocument('settings', 'founders').founderList
    const { employeeList } = this.getDocument('settings', 'employees') || { employeeList: [] }
    const clientList = this.getDocument('settings', 'clients').clientList
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      headerScripts
    } = globalSettings
    // Posts
    const posts = this.handleData('posts').reverse()
    const categoriesFromPosts = getCollectionTerms(posts, 'categories')
    const postCategories = this.getDocuments('postCategories').filter(
      category => categoriesFromPosts.indexOf(category.name.toLowerCase()) >= 0
    )
    // News and Events
    const news = this.handleData('news')
    const events = this.handleData('events', true)
    let newsevents = news.concat(events)
    newsevents = newsevents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).reverse()

    // CTA Banners
    const ctaBanners = this.handleData('ctaBanners')

    // Webinars
    const webinars = this.handleData('webinars')

    // Webinar Speakers
    const webinarSpeakers = this.handleData('webinarSpeakers')

    // Resources
    const resources = this.handleData('resources')

    // Resources - Commander
    const resourcesCommander = this.handleData('resourcesCommander')

    // Resources - Commander Mattermost
    const resourcesCommanderMattermost = this.handleData('resourcesCommanderMattermost')

    // Resources - Commander Teams
    const resourcesCommanderTeams = this.handleData('resourcesCommanderTeams')

    // Careers
    const jobs = this.handleData('jobs')

    const newseventsTypes = ['news', 'events']
    // const categoriesFromNewsEvents = getCollectionTerms(newsevents, 'categories')
    // const newseventsCategories = this.getDocuments('newseventsCategories').filter(
    //   category => categoriesFromNewsEvents.indexOf(category.name.toLowerCase()) >= 0
    // )

    // Terms Policy
    const termsPolicy = [
      {name: 'Terms & Conditions', url: '/terms'},
      {name: 'Privacy Policy', url: '/privacy'},
      {name: 'Trademark Usage', url: '/trademark'},
      {name: 'Acceptable Use Policy', url: '/acceptable-use'}
    ]
    return (
      <Router>
        <div className={`Site-Wrap d-flex flex-column${window.location.pathname === '/' ? ' no-padding-top' : ''}`}>
          <ScrollToTop />
          <ServiceWorkerNotifications reloadOnUpdate />
          <Helmet
            defaultTitle={siteTitle}
            titleTemplate={`%s | ${siteTitle}`}
          />
          <Meta
            headerScripts={headerScripts}
            absoluteImageUrl={
              socialMediaCard &&
              socialMediaCard.image &&
              siteUrl + socialMediaCard.image
            }
            twitterCreatorAccount={
              socialMediaCard && socialMediaCard.twitterCreatorAccount
            }
            twitterSiteAccount={
              socialMediaCard && socialMediaCard.twitterSiteAccount
            }
          />
          {!/teams-app|^\/terms|^\/privacy|^\/trademark|^\/acceptable-use/i.test(window.location.pathname) && <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="No, thanks"
            cookieName="acceptNimbellaCookies"
            style={{ background: "#011013", padding: "10px 15%", borderTop: "1px solid #586163", zIndex: "9999" }}
            disableButtonStyles={true}
            contentClasses='cookie-content'
            buttonClasses="btn btn-app btn-small mr-3"
            buttonStyle={{ alignSelf: "center", whiteSpace: 'nowrap' }}
            declineButtonClasses="btn btn-danger btn-small mr-3"
            declineButtonStyle={{ alignSelf: "center", whiteSpace: 'nowrap' }}
            enableDeclineButton
            flipButtons
            cookieValue={true}
            expires={150}
          >
            We use cookies to ensure you get the best experience on our website. <NavLink to='/privacy'>Learn more</NavLink>
          </CookieConsent>}
          <button style={{position: 'fixed', bottom: '0', left: '0', zIndex: '999999', padding: '10px', border: 'none', backgroundColor: 'transparent'}} onClick={this.logout} />

          {/*{producthuntBanner && <ProductHuntBanner />}*/}
          {producthuntBanner && noticeBanner > 0 && <PromotionBanner />}
          {/*{upcomingWebinar && noticeBanner > 0 && <UpcomingWebinarBanner webinar={upcomingWebinar} timeleft={webinarTimeleft} refreshWebinarFunc={this.handleRefreshUpcomingWebinar} />}*/}

          {/*teams-app is the resources page only for microsoft teams app to embed*/}
          {!/teams-app/i.test(window.location.pathname) && <header>
            <Nav2
              login={this.login}
              logout={this.logout}
              profile={profile}
              ifWebinars={webinars && webinars.length > 0}
              positionTop={noticeBanner}
              authChecking={authChecking}
              handleModalCommanderShow={this.handleModalCommanderShow}
              handleNoticeBanner={this.handleNoticeBanner}
              producthuntBanner={producthuntBanner}
              idToken={idToken}
              userMetadata={userMetadata}
            />
          </header>}

          <Alert toggle={this.handleAlertHide} show={showAlert} content={alertContent} />

          {loading && <div className='loader-wrap bg-trans bg-dk'>
            <img src='/images/loading_nim.gif' alt='' width='160' height='120' />
            <div className='mask' />
          </div>}

          <ModalCommander modal={modalCommander} close={this.handleModalCommanderClose} />

          <Switch>
            <RouteWithMeta
              path='/'
              exact
              component={Home}
              description={siteDescription}
              fields={this.getDocument('pages', 'home')}
              current={newsevents}
              blog={posts}
              lock={auth}
              idToken={idToken}
              userMetadata={userMetadata}
              authChecking={authChecking}
              logout={this.logout}
              profile={profile}
              clientList={clientList}
            />
            <RouteWithMeta
              path='/login'
              exact
              lock={auth}
              profile={profile}
              idToken={idToken}
              isAuthenticated={isAuthenticated}
              userMetadata={userMetadata}
              component={Login}
              alert={this.handleAlertShow}
              alertCancel={this.handleAlertHide}
              fields={{
                meta: {
                  title: 'Login to Nimbella',
                  description: 'Login to Nimbella to get access to Nimballa',
                  canonicalLink: '/login/'
                }
              }}
            />
            <RouteWithMeta
              path='/signup'
              exact
              lock={auth}
              profile={profile}
              isAuthenticated={isAuthenticated}
              userMetadata={userMetadata}
              list={this.getDocument('pages', 'home').signupData}
              component={Signup}
              alert={this.handleAlertShow}
              alertCancel={this.handleAlertHide}
              fields={{
                meta: {
                  title: 'Signup to Nimbella',
                  description: 'Signup to Nimbella to get access to Nimballa',
                  canonicalLink: '/signup/'
                }
              }}
            />
            <RouteWithMeta
              path='/order'
              exact
              loadingShow={this.handleLoadingShow}
              loadingHide={this.handleLoadingHide}
              alert={this.handleAlertShow}
              alertCancel={this.handleAlertHide}
              component={Order}
            />
            <RouteWithMeta
              path='/account-status'
              exact
              loadingShow={this.handleLoadingShow}
              loadingHide={this.handleLoadingHide}
              alert={this.handleAlertShow}
              alertCancel={this.handleAlertHide}
              component={AccountStatus}
            />
            <RouteWithMeta
              path='/about'
              exact
              component={About}
              fields={this.getDocument('pages', 'about')}
              founderList={founderList}
              investorList={this.getDocument('pages', 'investors')}
            />
            <RouteWithMeta
              path='/pricing/platform'
              exact
              component={Pricing}
              fields={this.getDocument('pages', 'pricing')}
            />
            <RouteWithMeta
              path='/pricing/commander'
              exact
              component={PricingCommander}
              alert={this.handleAlertShow}
              alertCancel={this.handleAlertHide}
              fields={this.getDocument('pages', 'pricingCommander')}
            />
            <RouteWithMeta
              path={`/react`}
              exact
              component={FrameworkReact}
              platform='React'
              fields={this.getDocument('pages', 'frameworkReact')}
            />
            <RouteWithMeta
              path={`/python`}
              exact
              component={FrameworkReact}
              platform='Python'
              fields={this.getDocument('pages', 'frameworkPython')}
            />
            <RouteWithMeta
              path={`/node`}
              exact
              component={FrameworkReact}
              platform='Node'
              fields={this.getDocument('pages', 'frameworkNode')}
            />
            <RouteWithMeta
              path={`/go`}
              exact
              component={FrameworkReact}
              platform='Go'
              fields={this.getDocument('pages', 'frameworkGo')}
            />
            <RouteWithMeta
              path={`/scala`}
              exact
              component={FrameworkReact}
              platform='Scala'
              fields={this.getDocument('pages', 'frameworkScala')}
            />
            <RouteWithMeta
              path={`/java`}
              exact
              component={FrameworkReact}
              platform='Java'
              fields={this.getDocument('pages', 'frameworkJava')}
            />
            <RouteWithMeta
              path={`/ruby`}
              exact
              component={FrameworkReact}
              platform='Ruby'
              fields={this.getDocument('pages', 'frameworkRuby')}
            />
            <RouteWithMeta
              path={`/platform`}
              exact
              component={ProductServerlessPlatform}
              fields={this.getDocument('pages', 'productFirst')}
              more={this.getDocument('pages', 'nimbellaStarterProjects')}
            />
            <RouteWithMeta
              path={`/integrations/commander`}
              exact
              component={ProductNimbellaCommander}
              handleModalCommanderShow={this.handleModalCommanderShow}
              fields={this.getDocument('pages', 'productSecond')}
            />
            <RouteWithMeta
              path='/integrations/commander/slack'
              exact
              component={ProductCommanderSlack}
              fields={this.getDocument('pages', 'productSlack')}
            />
            <RouteWithMeta
              path='/integrations/commander/mattermost'
              exact
              component={ProductCommanderMattermost}
              fields={this.getDocument('pages', 'productMattermost')}
            />
            <RouteWithMeta
              path='/integrations/commander/microsoft-teams'
              exact
              component={ProductCommanderTeams}
              fields={this.getDocument('pages', 'productTeams')}
            />
            <RouteWithMeta
              path='/integrations/commander/cli'
              exact
              component={ProductCommanderCli}
              fields={this.getDocument('pages', 'productCli')}
            />
            <RouteWithMeta
              path='/integrations/postman'
              exact
              component={ProductPostman}
              fields={this.getDocument('pages', 'productPostman')}
            />
            <RouteWithMeta
              path='/integrations/netlify'
              exact
              component={ProductNetlify}
              fields={this.getDocument('pages', 'productNetlify')}
            />
            {/*<RouteWithMeta*/}
            {/*  path='/election2020'*/}
            {/*  exact*/}
            {/*  component={Election2020}*/}
            {/*  fields={this.getDocument('pages', 'election2020')}*/}
            {/*/>*/}
            <RouteWithMeta
              path='/open-source'
              exact
              component={OpenSource}
              fields={this.getDocument('pages', 'source')}
            />
            <RouteWithMeta
              path='/our-story'
              exact
              component={OurStory}
              fbAppId={socialMediaCard.facebookAppId}
              fields={this.getDocument('settings', 'story')}
            />
            <RouteWithMeta
              path='/local-development'
              exact
              component={DevelopmentExperience}
              title='Local Development'
              fields={{
                meta: {
                  noindex: 'true'
                }
              }}
            />
            {/*<RouteWithMeta*/}
            {/*path='/investors'*/}
            {/*exact*/}
            {/*component={Investors}*/}
            {/*fields={this.getDocument('pages', 'investors')}*/}
            {/*/>*/}

            <RouteWithMeta
              path='/callback'
              exact
              fields={{
                meta: {
                  title: 'Callback',
                  description: 'Callback page',
                  canonicalLink: '/callback/',
                  noindex: 'true'
                }
              }}
              component={Callback}
              loc={'/'}
              func={this.handleAuthentication}
            />
            <RouteWithMeta
              path='/proof-of-concept'
              exact
              component={POC}
              fields={this.getDocument('pages', 'poc')}
            />
            <RouteWithMeta
              path='/enterprise-solution'
              exact
              component={EnterpriseSolution}
              list={this.getDocument('pages', 'source').openSourceUse.list || []}
              fields={this.getDocument('pages', 'enterpriseSolution')}
            />
            <RouteWithMeta
              path='/forrester-report'
              exact
              component={Forrester}
              fields={this.getDocument('pages', 'forresterReport')}
            />
            <RouteWithMeta
              path='/case-study'
              exact
              component={CaseStudy}
              fields={this.getDocument('pages', 'caseStudy')}
            />
            <RouteWithMeta
              path='/contact'
              exact
              component={Contact}
              fields={this.getDocument('pages', 'contact')}
            />
            <RouteWithMeta
              path='/contact-form'
              exact
              component={ContactForm}
            />
            <RouteWithMeta
              path='/request'
              exact
              component={Request}
              fields={this.getDocument('pages', 'request')}
            />
            <RouteWithMeta
              path='/blog'
              exact
              component={Blog}
              fields={this.getDocument('pages', 'blog')}
              posts={posts}
              postCategories={postCategories}
            />
            <RouteWithMeta
              path='/join-us'
              exact
              component={Careers}
              fields={this.getDocument('pages', 'careers')}
              founderList={founderList}
              jobs={jobs}
            />
            <RouteWithMeta
              path='/newsevents'
              exact
              component={NewsEvents}
              fields={this.getDocument('pages', 'newsevents')}
              newsevents={newsevents}
              newseventsTypes={newseventsTypes}
              data={data.events}
            />
            <RouteWithMeta
              path='/webinars'
              exact
              component={Webinar}
              isStaging={this.isStaging}
              fields={this.getDocument('pages', 'webinars')}
              webinars={webinars}
              speakers={webinarSpeakers}
              posts={posts}
            />
            {/*<RouteWithMeta*/}
              {/*path='/resources/'*/}
              {/*exact*/}
              {/*component={Resources}*/}
              {/*list={resources}*/}
            {/*/>*/}
            <RouteWithMeta
              path='/terms'
              exact
              component={Terms}
              fields={this.getDocument('settings','terms')}
              sidebar={termsPolicy}
            />
            <RouteWithMeta
              path='/privacy'
              exact
              component={Policy}
              fields={this.getDocument('settings','policy')}
              sidebar={termsPolicy}
            />
            <RouteWithMeta
              path='/trademark'
              exact
              component={Trademark}
              fields={this.getDocument('settings','trademark')}
              sidebar={termsPolicy}
            />
            <RouteWithMeta
              path='/acceptable-use'
              exact
              component={AcceptablePolicy}
              fields={this.getDocument('settings','acceptable')}
              sidebar={termsPolicy}
            />
            <RouteWithMeta
              path='/slack'
              exact
              fields={{
                meta: {
                  title: 'Join Slack',
                  description: 'Join NIMBELLA COMMUNITY on Slack',
                  canonicalLink: '/slack/'
                }
              }}
              component={Slack}
            />
            <RouteWithMeta
              path='/cops'
              exact
              alert={this.handleAlertShow}
              component={Cops}
            />
            <RouteWithMeta
              path='/portal'
              exact
              profile={profile}
              idToken={idToken}
              authChecking={authChecking}
              userMetadata={userMetadata}
              component={CommanderPortal}
            />
            <RouteWithMeta
              path='/whitepaper'
              exact
              component={Whitepaper}
              fields={this.getDocument('pages','whitepaper')}
            />
            <RouteWithMeta
              path='/make-serverless-frictionless-and-portable-whitepaper'
              exact
              component={PortableWhitepaper}
              fields={this.getDocument('pages','portableWhitepaper')}
            />
            <RouteWithMeta
              path='/make-serverless-frictionless-and-portable-whitepaper-thank-you'
              exact
              component={WhitepaperThank}
              sharedData={this.getDocument('pages','portableWhitepaper')}
              fields={{
                meta: {
                  title: 'Whitepaper Thank You',
                  description: 'This is a thank you page for after a successful whitepaper submission',
                  noindex: 'true'
                }
              }}
            />
            <RouteWithMeta
              path='/whitepaper-thank-you'
              exact
              component={WhitepaperThank}
              sharedData={this.getDocument('pages','whitepaper')}
              fields={{
                meta: {
                  title: 'Whitepaper Thank You',
                  description: 'This is a thank you page for after a successful whitepaper submission',
                  noindex: 'true'
                }
              }}
            />
            <RouteWithMeta
              path='/commander/slack/install'
              exact
              fields={{
                meta: {
                  title: 'Slack Redirect',
                  description: 'This is a redirect page for Slack Commander.',
                  canonicalLink: '/commander/slack/install'
                }
              }}
              component={CommanderRedirect}
              loc1='https://slack.com/oauth/authorize?client_id=876870346995.892105847680&scope=commands'
              loc2='https://slack.com/oauth/v2/authorize?client_id=876870346995.892105847680&scope=chat:write,commands,users:read,users:read.email'
            />
            <RouteWithMeta
              path='/platform/cli'
              exact
              component={NimbellaCli}
              fields={this.getDocument('pages', 'nimbellaCli')}
            />
            <RouteWithMeta
              path='/platform/workbench'
              exact
              component={NimbellaWorkbench}
              fields={this.getDocument('pages', 'nimbellaWorkbench')}
            />
            <RouteWithMeta
              path='/platform/starter-projects'
              exact
              component={NimbellaStarterProjects}
              fields={this.getDocument('pages', 'nimbellaStarterProjects')}
            />
            <RouteWithMeta
              path='/templates'
              exact
              component={Templates}
              fields={this.getDocument('pages', 'templates')}
            />
            {/*<RouteWithMeta*/}
            {/*  path='/widgets'*/}
            {/*  exact*/}
            {/*  component={Widgets}*/}
            {/*  fields={{*/}
            {/*    meta: {*/}
            {/*      noindex: 'true'*/}
            {/*    }*/}
            {/*  }}*/}
            {/*/>*/}
            <RouteWithMeta
              path='/tools'
              exact
              component={Tools}
              fields={{
                meta: {
                  noindex: 'true'
                }
              }}
            />

            {employeeList.map(employee => {
              const path = slugify(`/employees/${employee.name}`)
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={Employee}
                  fields={employee}
                />
              )
            })}

            {posts.map((post, index) => {
              const path = slugify(`/blog/${post.title}`)
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={SinglePost}
                  cateList={postCategories}
                  fields={post}
                  ctaBanners={ctaBanners}
                  list={posts}
                />
              )
            })}

            {postCategories.map(postCategory => {
              const slug = slugify(postCategory.title)
              const path = slugify(`/blog-category/${slug}`)
              const categoryPosts = posts.filter(post =>
                documentHasTerm(post, 'categories', slug)
              )
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={Blog}
                  fields={this.getDocument('postCategories', slug)}
                  posts={categoryPosts}
                  postCategories={postCategories}
                />
              )
            })}

            {webinars.map((post, index) => {
              const path = slugify(`/webinars/${post.title}`)
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  scrollTop={noticeBanner}
                  ctaBanners={ctaBanners}
                  component={WebinarPage}
                  fbAppId={socialMediaCard.facebookAppId}
                  speakers={webinarSpeakers}
                  fields={post}
                />
              )
            })}

            {newsevents.map((post, index) => {
              const path = slugify(`/newsevents/${post.title}`)
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={NewsEventsPage}
                  fields={post}
                />
              )
            })}

            {newseventsTypes.map(type => {
              const slug = slugify(type)
              const path = slugify(`/newsevents/type/${slug}`)
              const typeNewsevents = newsevents.filter(post =>
                documentHasTerm(post, 'type', slug)
              )
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={NewsEvents}
                  fields={this.getDocument('pages', 'newsevents')}
                  newsevents={typeNewsevents}
                  newseventsTypes={newseventsTypes}
                  data={data.events}
                />
              )
            })}

            {jobs.map((jobs, index) => {
              const path = slugify(`/jobs/${jobs.title + '_' + jobs.postDate}`)
              const nextPost = jobs[index - 1]
              const prevPost = jobs[index + 1]
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={Jobs}
                  fields={jobs}
                  nextPostURL={nextPost && slugify(`/jobs/${nextPost.title + '_' + nextPost.date}`)}
                  prevPostURL={prevPost && slugify(`/jobs/${prevPost.title + '_' + prevPost.date}`)}
                />
              )
            })}

            {resources.sort((a, b) => b.index - a.index).reverse().map(resource => {
              let path = ''
              if(resource.level === '1') {
                path = slugify(`/docs/platform/${resource.title}`)
                this.parent = `platform/${resource.title}`
              }

              if(resource.level === '2') {
                path = slugify(`/docs/${this.parent}/${resource.title}`)
              }
              return (
                <RouteWithMeta
                  list={resources}
                  key={path}
                  path={path}
                  exact
                  component={Resources}
                  fields={resource}
                />
              )


              // if(resource.second && resource.second.length) {
              //   const arr = resource.second.map(item => {
              //
              //     return (
              //       <RouteWithMeta
              //         list={resources}
              //         key={path2}
              //         path={path2}
              //         exact
              //         component={Resources}
              //         fields={item}
              //       />
              //     )
              //   })
              //   arr.push(
              //     <RouteWithMeta
              //       list={resources}
              //       key={path}
              //       path={path}
              //       exact
              //       component={Resources}
              //       fields={resource}
              //     />
              //   )
              //   return arr
              // }


            })}

            {resourcesCommander.map(resource => {
              const path = slugify(`/docs/commander/slack/${resource.title}`)
              return (
                <RouteWithMeta
                  list={resourcesCommander}
                  key={path}
                  path={path}
                  exact
                  component={ResourcesCommander}
                  fields={resource}
                />
              )
            })}

            {resourcesCommanderMattermost.map(resource => {
              const path = slugify(`/docs/commander/mattermost/${resource.title}`)
              return (
                <RouteWithMeta
                  list={resourcesCommanderMattermost}
                  key={path}
                  path={path}
                  exact
                  component={ResourcesCommanderMattermost}
                  fields={resource}
                />
              )
            })}

            {resourcesCommanderTeams.map(resource => {
              const path = slugify(`/docs/commander/microsoft-teams/${resource.title}`)
              return (
                <RouteWithMeta
                  list={resourcesCommanderTeams}
                  key={path}
                  path={path}
                  exact
                  component={ResourcesCommanderTeams}
                  fields={resource}
                />
              )
            })}

            {resourcesCommanderTeams.map(resource => {
              const path = slugify(`/resources/commander/teams-app/${resource.title}`)
              return (
                <RouteWithMeta
                  list={resourcesCommanderTeams}
                  key={path}
                  path={path}
                  exact
                  noHeaderFooter={true}
                  component={ResourcesCommanderTeams}
                  fields={resource}
                />
              )
            })}
            {/*<Route render={() => <NoMatch siteUrl={siteUrl} />} />*/}
            <RouteWithMeta
              component={Home}
              description={siteDescription}
              fields={this.getDocument('pages', 'home')}
              current={newsevents}
              blog={posts}
              lock={auth}
              idToken={idToken}
              userMetadata={userMetadata}
              authChecking={authChecking}
              logout={this.logout}
              profile={profile}
              clientList={clientList}
            />
          </Switch>
          <Footer globalSettings={globalSettings} />
          {this.isStaging && <ul className='snapshot-fix' style={{ margin: '0' }}>
            {/*<li><NavLink to='/widgets'>Widgets Demo</NavLink></li>*/}
            <li><NavLink to='/tools'>Tools</NavLink></li>
            <li><NavLink to='/templates'>Templates</NavLink></li>
            <li><NavLink to='/slack'>Slack</NavLink></li>
            {/*<li><NavLink to='/election2020'>Election 2020</NavLink></li>*/}
            <li><NavLink to='/platform/cli'>Nimbella Cli</NavLink></li>
            <li><NavLink to='/platform/workbench'>Nimbella Workbench</NavLink></li>
            <li><NavLink to='/platform/starter-projects'>Deploy Starter Projects</NavLink></li>
            <li><NavLink to='/make-serverless-frictionless-and-portable-whitepaper-thank-you'>New Whitepaper Thank You</NavLink></li>
            <li><NavLink to='/whitepaper-thank-you'>Whitepaper Thank You</NavLink></li>
            <li><NavLink to='/local-development'>Local Development</NavLink></li>
          </ul>}
          <GoogleAnalytics />
        </div>
      </Router>
    )
  }
}

export default App
