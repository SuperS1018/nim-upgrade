import React, { Component } from 'react'
import { scrollToElement } from '../util/scroll'

import POCBanner from '../components/POCBanner'
import POCSecond from '../components/POCSecond'
import POCForth from '../components/POCForth'

class POC extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {
        name: '',
        email: '',
        company: '',
        role: '',
        agreement: false
      }
    }
  }

  handleTopFormSubmit = form => {
    scrollToElement('get-started', 1, true)
    this.setState({ form })
  }

  handleFormReset = () => {
    this.setState({ form: {} })
  }
  render () {
    const { heroBanner, secondSection, forthSection } = this.props.fields
    const { form } = this.state
    return (
      <div className='POC' style={{ backgroundColor: '#F3F4F6' }}>
        {heroBanner && <POCBanner submit={this.handleTopFormSubmit} title={heroBanner.title} subtitle={heroBanner.subtitle} desc={heroBanner.desc} list={heroBanner.list} />}
        {secondSection && <POCSecond title={secondSection.title} subtitle={secondSection.subtitle} desc={secondSection.desc} list={secondSection.list} />}
        <p id='get-started' name='get-started' style={{ padding: 0, margin: 0 }} />
        {forthSection && <POCForth form={form} reset={this.handleFormReset} title={forthSection.title} subtitle={forthSection.subtitle} list={forthSection.list} pattern={true} />}
      </div>
    )
  }
}

export default POC
