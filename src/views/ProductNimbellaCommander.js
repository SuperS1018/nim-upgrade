import React, { Component } from 'react'

import ProductBanner2 from '../components/ProductBanner2'
import BannerScheduleDemo from '../components/BannerScheduleDemo'
import BannerCTASignup from '../components/BannerCTASignup'
import CommanderThreeSteps from '../components/CommanderThreeSteps'
import WhyUseCommander from '../components/WhyUseCommander'
import CommandSetList from '../components/CommandSetList'
import ProductThreeColumn from '../components/ProductThreeColumn'

import '../stylesheets/views/ProductNimbellaCommander.css'

class ProductNimbellaCommander extends Component {
  render () {
    const { nimbellaCommander: { pageBanner1, challenge, threeSteps, signupBanner, why, commandSets, scheduleDemo } } = this.props.fields
    const { handleModalCommanderShow } = this.props
    return (
      <div className={`Product Commander page`}>
        <ProductBanner2
          title={pageBanner1.title}
          subtitle={pageBanner1.subtitle}
          btnTxt={pageBanner1.btnTxt}
          featuredImage={pageBanner1.featuredImage}
          featuredBgImage={pageBanner1.featuredBgImage}
          backgroundImage={pageBanner1.backgroundImage}
          handleModalCommanderShow={handleModalCommanderShow}
        />
        {threeSteps && <CommanderThreeSteps data={threeSteps} handleModalCommanderShow={handleModalCommanderShow} />}
        {signupBanner && <BannerCTASignup data={signupBanner} />}
        {challenge && <ProductThreeColumn data={challenge} />}
        {why && <WhyUseCommander data={why} />}
        {commandSets && <CommandSetList data={commandSets} />}
        {scheduleDemo && <BannerScheduleDemo data={scheduleDemo} />}
      </div>
    )
  }
}

export default ProductNimbellaCommander
