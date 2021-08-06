import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import FAQ from '../components/FAQ.js'
import PricingComparisonSlack from '../components/PricingComparisonSlack'
import PricingComparisonMattermost from '../components/PricingComparisonMattermost'
import PricingComparisonTeams from '../components/PricingComparisonTeams'
import { scrollToElement } from '../util/scroll'
import Breadcrumb from '../components/Breadcrumb'

class PricingCommander extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      isParam: false,
      isLoading: true
    }
  }

  componentDidMount () {
    this.handleUrl()
    this.unlisten = this.props.history.listen(() => {
      this.handleUrl()
    })
    this.setState({ isLoading: false })
  }

  componentWillUnmount () {
    this.unlisten()
    clearTimeout(this.timeout)
  }

  handleUrl = () => {
    const { hash } = window.location
    const isParam = hash.indexOf('?') !== -1
    const id = isParam ? hash.substring(1).split('?')[0] : hash.substring(1)
    if (!id) return
    this.setState({ id, isParam })
    this.timeout = setTimeout(() => {
      scrollToElement(id, 1, true, -70)
    }, 100)
  }

  render () {
    const { fields, alertCancel, alert } = this.props
    const { faq1, slackPricing = [], slackComparison = [], teamsPricing = [], teamsComparison = [], mattermostPricing = [], mattermostComparison = [] } = fields
    const { id, isParam, isLoading } = this.state
    const breadcrumb = [
      { name: 'Home', link: '/' },
      { name: 'Pricing - Commander', link: '/pricing/commander' }
    ]
    return (
      <Fragment>
        {isLoading && <div className='loader-wrap'>
          <img src='/images/loading_nim.gif' alt='' width='240' height='180' />
          <div className='mask' />
        </div>}
        {!isLoading && <div className='PricingCommander page'>
          <Breadcrumb className='bg-g' items={breadcrumb} />
          {((!id && !isParam) || (id === 'slack' && isParam) || !isParam) && <PricingComparisonSlack tableList={slackPricing} comparisonList={slackComparison} alertCancel={alertCancel} alert={alert} />}

          {((!id && !isParam) || (id === 'microsoft-teams' && isParam) || !isParam) && <PricingComparisonTeams tableList={teamsPricing} comparisonList={teamsComparison} alertCancel={alertCancel} alert={alert} />}

          {((!id && !isParam) || (id === 'mattermost' && isParam) || !isParam) && <PricingComparisonMattermost tableList={mattermostPricing} comparisonList={mattermostComparison} alertCancel={alertCancel} alert={alert} />}

          <FAQ title={faq1.title} list={faq1.items} />
        </div>}
      </Fragment>
    )
  }
}

export default withRouter(PricingCommander)
