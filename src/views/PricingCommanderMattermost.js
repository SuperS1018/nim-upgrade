import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FAQ from '../components/FAQ.js'
import PricingComparison from '../components/PricingComparison'
import { googleAnalyticsEvent } from '../util/ga'
import { params } from '../util/url'

class PricingCommanderMattermost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      teamId: '',
      mode: 'test',
      namespace: '',
      showButton: false,
    }
  }
  componentDidMount () {
    const { search } = this.props.history.location
    const teamId = params(search, 'team_id')
    const mode = params(search, 'mode')
    const namespace = params(search, 'namespace')
    if (teamId && mode && namespace) {
      this.setState({ teamId, mode, namespace, showButton: true })
    }
  }

  componentWillUnmount () {
    this.props.alertCancel()
  }

  handleClick = (index) => {
    switch(index) {
      case 0:
        break
      case 1:
        googleAnalyticsEvent(0, 'Pricing Mattermost', 'Contact Us')
        this.props.history.push({
          pathname: '/contact-form',
          state: {
            subject: 'Sales - Mattermost'
          }
        })
        break
      case 2:
        googleAnalyticsEvent(0, 'Pricing Mattermost', 'Contact Us')
        this.props.history.push({
          pathname: '/contact-form',
          state: {
            subject: 'Sales - Mattermost'
          }
        })
        break
      default:
        console.log('*** pricing button total is not 3?')
    }
  }

  render () {
    const { fields } = this.props
    const { showButton } = this.state
    const { pricingTable, comparisonTable, faq } = fields
    return (
      <div className='PricingCommander Mattermost page'>
        <PricingComparison tableList={pricingTable} comparisonList={comparisonTable} handleClick={this.handleClick} showButton={showButton} pageName={'Commander for Mattermost'} />
        <FAQ title={faq.title} list={faq.items} />
      </div>
    )
  }
}

export default withRouter(PricingCommanderMattermost)
