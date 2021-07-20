import React, { Component } from 'react'
import FAQ from '../components/FAQ.js'
import PricingComparison from '../components/PricingComparison'
import { googleAnalyticsEvent } from '../util/ga'
import Breadcrumb from '../components/Breadcrumb'

class Pricing extends Component {
  handleClick = (index) => {
    switch(index) {
      case 0:
        googleAnalyticsEvent(0, 'Pricing Platform', 'Sign up')
        this.props.history.push('/signup')
        break
      case 1:
        googleAnalyticsEvent(0, 'Pricing Platform', 'Sign up')
        this.props.history.push('/signup')
        break
      case 2:
        googleAnalyticsEvent(0, 'Pricing Platform', 'Contact Us')
        this.props.history.push({
          pathname: '/contact-form',
          state: {
            subject: 'Sales - Platform'
          }
        })
        break
      default:
        console.log('*** pricing button total is not 3?')
    }
  }

  render () {
    const { fields } = this.props
    const { pricingTable, comparisonTable, usageTable = [], faq, note, noteTop } = fields
    const breadcrumb = [
      { name: 'Home', link: '/' },
      { name: 'Pricing - Platform', link: '/pricing/platform' }
    ]
    return (
      <div className='Pricing page'>
        <Breadcrumb className='bg-g' items={breadcrumb} />
        <PricingComparison tableList={pricingTable} comparisonList={comparisonTable} usage={usageTable} handleClick={this.handleClick} pageName={'Platform'} note={note} noteTop={noteTop} />
        <FAQ title={faq.title} list={faq.items} />
      </div>
    )
  }
}

export default Pricing
