import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Content from '../components/Content'

import '../stylesheets/components/PricingComparison.css'

class PricingComparison extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: -1,
      isMobile: false
    }
  }

  componentDidMount () {
    if(this.isMobileDevice()) {
      this.setState({ index: window.location.search ? 1 : 0, isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }
  }

  handleLinkBreak = s => {
    if(s.indexOf('(') === -1) {
      return s
    } else {
      return (
        <span>{s.split('(')[0]}<br />({s.split('(')[1]}</span>
      )
    }
  }

  handleTableFilter = (data, index) => {
    if(index !== -1) {
      let a = { ...data[index], index }
      return [a]
    }
    return data
  }

  handleComparisonFilter = (data, index) => {
    const a = Object.keys(data[0]).filter(i => i !== 'features')
    let arr = ['playground', 'starter', 'pro', 'enterprise']
    arr = arr.filter(j => a.includes(j))
    const name = arr[index]
    if(index !== -1) {
      return data.map(i => ({ [name]: i[name], features: i.features }))
    } else {
      return data
    }
  }

  handleUsageFilter = (data, index) => {
    const a = Object.keys(data[0]).filter(i => i !== 'features')
    let arr = ['playground', 'starter', 'pro', 'enterprise']
    arr = arr.filter(j => a.includes(j))
    const name = arr[index]
    if(index !== -1) {
      return data.map(i => ({ [name]: i[name], features: i.features }))
    } else {
      return data
    }
  }

  handleChange = e => {
    this.setState({ index: e.target.value })
  }

  isMobileDevice = () => {
    return (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent));
  };

  render () {
    const { tableList, comparisonList, showButton, handleClick, pageName, usage, note, noteTop } = this.props
    const { index, isMobile } = this.state
    const filteredTableList = this.handleTableFilter(tableList, index)
    const filteredComparisonList = this.handleComparisonFilter(comparisonList, index)
    const filteredUsage = !!usage ? this.handleUsageFilter(usage, index) : []

    const buttonElem = (o, index) => {
      if(pageName === 'Platform') {
        return <button className='btn btn-app' onClick={() => handleClick(isMobile ? parseInt(o.index) : index)}>{o.button }</button>
      }
      if(pageName === 'Commander for Slack' || pageName === 'Commander for Mattermost' || pageName === 'Commander for Teams') {
        if(o.index === undefined) {
          if(index === 0 || index === 2) {
            return <button className='btn btn-app' onClick={() => handleClick(isMobile ? parseInt(o.index) : index)}>{o.button }</button>
          }
          if(index === 1) {
            if (showButton) {
              return <Fragment>{o.button && <button className='btn btn-app' onClick={() => handleClick((isMobile ? parseInt(o.index) : index), true)}>Upgrade</button>}</Fragment>
            }
            if (!showButton) {
              return <Fragment>
                {o.description && <Content className='btn-message' source={o.description} />}
                <button className='btn btn-app' onClick={() => handleClick(isMobile ? parseInt(o.index) : index)}>{o.button}</button>
              </Fragment>
            }
          }
        } else {
          if (showButton) {
            return <Fragment>{o.button && <button className='btn btn-app' onClick={() => handleClick((isMobile ? parseInt(o.index) : index), true)}>Upgrade</button>}</Fragment>
          }
          if (!showButton) {
            return <Fragment>
              {o.description && <Content className='btn-message' source={o.description} />}
              <button className='btn btn-app' onClick={() => handleClick(isMobile ? parseInt(o.index) : index)}>{o.button}</button>
            </Fragment>
          }
        }
      }
    }

    return (
      <div className='PricingComparison section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='text-capitalize'>Nimbella {pageName}</h2>
              {!!usage && <Content className='mb-5' source={noteTop} />}
              <hr className='mb-5' />
              {isMobile && !showButton && <div className='d-flex'>
                Select a plan:&nbsp;
                <div className='select-wrap select-mobile'>
                  <select name="" id="" value={index} onChange={this.handleChange}>
                    {tableList.map((i, index) => (
                      <option key={i.level + index} value={index}>{i.level}</option>
                    ))}
                  </select>
                </div>
              </div>}

              <table width='100%'>
                <tbody>
                <tr>
                  {!isMobile && <th style={{width: `${100/(filteredTableList.length + 1)}%`}} />}
                  {filteredTableList.map((i, index) => (
                    <th colSpan={isMobile ? 2 : 1} key={i.level + index} style={{width: `${100/(filteredTableList.length + 1)}%`}}>{i.level}</th>
                  ))}
                </tr>
                <tr className='table'>
                  {!isMobile && <td style={{width: `${100/(filteredTableList.length + 1)}%`}} />}
                  {filteredTableList.map((i, index) => (
                    <td colSpan={isMobile ? 2 : 1} key={i.level + index} style={{width: `${100/(filteredTableList.length + 1)}%`}}>
                      <h2>
                        {i.value && !isNaN(i.value) ? (<span>${i.value} USD</span>) : i.value}
                        <p className='note'>{i.unit}</p>
                      </h2>
                      {pageName === 'Platform' && <p>{i.description}</p>}
                    </td>
                  ))}
                </tr>

                <tr className='table button'>
                  {!isMobile && <td />}
                  {filteredTableList.map((i, index) => (
                    <td colSpan={isMobile ? 2 : 1} valign='middle' key={i.level + index}>
                      { buttonElem(i, index) }
                    </td>
                  ))}
                </tr>

                {filteredComparisonList.map((i, index) => (
                  <tr key={i.features + index} className='comparison'>
                    <td>
                      {this.handleLinkBreak(i.features)}
                    </td>
                    {i.playground && <td>
                      {(i.playground === 'true') && <FontAwesomeIcon icon={faCheck} /> }
                      {(i.playground === 'false') && <FontAwesomeIcon icon={faTimes} /> }
                      {(i.playground !== 'true' && i.playground !== 'false') && <Content source={i.playground} />}
                    </td>}
                    {i.starter && <td>
                      {(i.starter === 'true') && <FontAwesomeIcon icon={faCheck} /> }
                      {(i.starter === 'false') && <FontAwesomeIcon icon={faTimes} /> }
                      {(i.starter !== 'true' && i.starter !== 'false') && <Content source={i.starter} />}
                    </td>}
                    {i.pro && <td>
                      {(i.pro === 'true') && <FontAwesomeIcon icon={faCheck} /> }
                      {(i.pro === 'false') && <FontAwesomeIcon icon={faTimes} /> }
                      {(i.pro !== 'true' && i.pro !== 'false') && <Content source={i.pro} />}
                    </td>}
                    {i.enterprise && <td>
                      {(i.enterprise === 'true') && <FontAwesomeIcon icon={faCheck} /> }
                      {(i.enterprise === 'false') && <FontAwesomeIcon icon={faTimes} /> }
                      {(i.enterprise !== 'true' && i.enterprise !== 'false') && <Content source={i.enterprise} />}
                    </td>}
                  </tr>
                ))}
                </tbody>
              </table>


              {!!usage && <h3 className='w-100 section-title' id='usage-limits' >Usage Limits</h3>}
              {/*{!!usage && <a id='usage-limits' className='anchor-offset' name='usage-limits' />}*/}
              {!!usage && <table width='100%'>
                <tbody>
                <tr>
                  {!isMobile && <th style={{width: `${100/(filteredTableList.length + 1)}%`}} />}
                  {filteredTableList.map((i, index) => (
                    <th colSpan={isMobile ? 2 : 1} key={i.level + index} style={{width: `${100/(filteredTableList.length + 1)}%`}}>{i.level}</th>
                  ))}
                </tr>

                {filteredUsage.map((i, index) => (
                  <tr key={i.features + index} className='comparison'>
                    <td>
                      {this.handleLinkBreak(i.features)}
                    </td>
                    {i.playground && <td>
                      {(i.playground === 'true') && <FontAwesomeIcon icon={faCheck} /> }
                      {(i.playground === 'false') && <FontAwesomeIcon icon={faTimes} /> }
                      {(i.playground !== 'true' && i.playground !== 'false') && <Content source={i.playground} />}
                    </td>}
                    {i.starter && <td>
                      {(i.starter === 'true') && <FontAwesomeIcon icon={faCheck} /> }
                      {(i.starter === 'false') && <FontAwesomeIcon icon={faTimes} /> }
                      {(i.starter !== 'true' && i.starter !== 'false') && <Content source={i.starter} />}
                    </td>}
                    {i.pro && <td>
                      {(i.pro === 'true') && <FontAwesomeIcon icon={faCheck} /> }
                      {(i.pro === 'false') && <FontAwesomeIcon icon={faTimes} /> }
                      {(i.pro !== 'true' && i.pro !== 'false') && <Content source={i.pro} />}
                    </td>}
                    {i.enterprise && <td>
                      {(i.enterprise === 'true') && <FontAwesomeIcon icon={faCheck} /> }
                      {(i.enterprise === 'false') && <FontAwesomeIcon icon={faTimes} /> }
                      {(i.enterprise !== 'true' && i.enterprise !== 'false') && <Content source={i.enterprise} />}
                    </td>}
                  </tr>
                ))}
                </tbody>
              </table>}
              {!!usage && <Content className='mt-5' source={note} />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PricingComparison)
