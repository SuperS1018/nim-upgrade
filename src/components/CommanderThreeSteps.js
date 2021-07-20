import React, { Component } from 'react'

import Content from '../components/Content'

import '../stylesheets/components/CommanderThreeSteps.css'

class CommanderThreeSteps extends Component {
  componentDidMount () {
    const ele = document.querySelector('.CommanderThreeSteps--Item .Content a')
    if (!!ele && ele.text === 'here' && /slack\/install/i.test(ele.href)) {
      ele.href = '#show-modal'
      ele.addEventListener('click', e => {
        e.preventDefault()
        this.props.handleModalCommanderShow()
      })
    } else {
      console.log('*** something wrong with the here link - /integrations/commander')
    }
  }

  render () {
    const { title, subtitle, desc, btmTxt, steps = [] } = this.props.data
    return (
      <div className='CommanderThreeSteps'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 mb-5'>
              {title && <Content source={title} className='h2' />}
              {subtitle && <Content source={subtitle} className='h3' />}
              {desc && <Content source={desc} className='p' />}
            </div>

            {steps.map((i, index) => (
              <div className='col-md-4' key={i.desc + index}>
                <div className='CommanderThreeSteps--Item' style={{ backgroundImage: `url(${i.img})`}}>
                  {i.desc && <Content source={i.desc} />}
                </div>
              </div>
            ))}

            <div className='col-lg-12 mt-5'>
              {btmTxt && <h3><Content source={btmTxt} /></h3>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommanderThreeSteps
