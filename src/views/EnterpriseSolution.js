import React, { Component } from 'react'
import { scrollToElement } from '../util/scroll'

import EnterpriseSolutionBanner from '../components/EnterpriseSolutionBanner'
import EnterpriseSolutionSecond from '../components/EnterpriseSolutionSecond'
import EnterpriseSolutionThird from '../components/EnterpriseSolutionThird'
import EnterpriseSolutionFourth from '../components/EnterpriseSolutionFourth'
import EnterpriseSolutionFifth from '../components/EnterpriseSolutionFifth'
import POCForth from '../components/POCForth'

import '../stylesheets/views/EnterpriseSolution.css'

class EnterpriseSolution extends Component {
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
    const { list = [], fields = {} } = this.props
    const { heroBanner, secondSection, thirdSection, forthSection, fifthSection, sixthSection } = fields
    const { form } = this.state
    return (
      <div className='EnterpriseSolution' style={{ backgroundColor: '#F3F4F6' }}>
        {heroBanner && <EnterpriseSolutionBanner title={heroBanner.title} subtitle={heroBanner.subtitle} desc={heroBanner.desc} note={heroBanner.note} btnTxt={heroBanner.btnTxt} btnLink={heroBanner.btnLink} />}
        {secondSection && <EnterpriseSolutionSecond title={secondSection.title} desc={secondSection.desc} list={secondSection.list} />}
        {/*<p id='get-started' name='get-started' style={{ padding: 0, margin: 0 }} />*/}
        {thirdSection && <EnterpriseSolutionThird title={thirdSection.title} citeTitle={thirdSection.citeTitle} citeContent={thirdSection.citeContent} downloadTxt={thirdSection.downloadTxt} downloadLink={thirdSection.downloadLink} />}
        {forthSection && list && <EnterpriseSolutionFourth title={forthSection.title} subtitle={forthSection.subtitle} list={list} />}
        {fifthSection && <EnterpriseSolutionFifth title={fifthSection.title} content={fifthSection.content} img={fifthSection.img} />}
        {forthSection && <POCForth form={form} reset={this.handleFormReset} title={sixthSection.title} subtitle={sixthSection.subtitle} list={sixthSection.list} />}
      </div>
    )
  }
}

export default EnterpriseSolution
