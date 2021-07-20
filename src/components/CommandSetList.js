import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'

import Content from '../components/Content'

import '../stylesheets/components/CommandSetList.css'

class CommandSetList extends Component {
  render () {
    const { title, desc, btmTxt, cataList = [] } = this.props.data

    return (
      <div className='CommandSetList'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              {title && <h2>{title}</h2>}
              {desc && <p className='desc'>{desc}</p>}
            </div>

            {cataList.map((i, index) => (
              <div className='col-lg-12' key={i.cata + index}>
                <div className='CommandSetList--Cata'>
                  {i.cata && <div className='cata-name'>{i.cata}</div>}
                  {i.commandList && <div className='row'>
                    {i.commandList.map((j, idx) => (
                      <div className='col-xs-6 col-sm-6 col-md-6 col-lg-3 mb-5' key={j.name + idx}>
                        <div className='CommandSetList--Item'>
                          <img src={j.icon} alt={j.name} width='50' />
                          {j.name && <p className='command-name'>{j.name}</p>}
                          {j.command && <Content source={`\`${j.command}\``} />}

                          {j.readme && <a href={j.readme} className='readme' target='_blank' rel='noopener noreferrer nofollow'>
                            Readme&nbsp;
                            <FontAwesomeIcon icon={faArrowRight} />
                          </a>}
                        </div>
                      </div>
                    ))}
                  </div>}
                </div>
              </div>
            ))}

            <div className='col-lg-12'>
              {btmTxt && <Content className='btm-txt' source={btmTxt} />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommandSetList
