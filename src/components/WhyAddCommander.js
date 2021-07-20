import React, { Component } from 'react'

import '../stylesheets/components/WhyAddCommander.css'
import Content from '../components/Content'

class WhyAddCommander extends Component {
  render () {
    const { title, subtitle, list, slack, commander } = this.props.data
    return (
      <div className='WhyAddCommander'>
        <div className='container'>
          <div className='row'>
            <div className='WhyAddCommander--Head col-lg-12'>
              {title && <h2>{title}</h2>}
              {subtitle && <p>{subtitle}</p>}
            </div>

            {list && list.length > 0 && <div className='col-lg-12'>
              <table width='100%'>
                <thead>
                <tr>
                  <td width='30%'>&nbsp;</td>
                  <td width='35%' align='center'>
                    {slack.logo && <img src={slack.logo} alt='Slack Icon' width='50' />}
                    {slack.thead && <p>{slack.thead}</p>}
                  </td>
                  <td width='35%' align='center'>
                    {commander.logo && <img src={commander.logo} alt='Commander Slack Icon' width='128' />}
                    {commander.thead && <p>{commander.thead}</p>}
                  </td>
                </tr>
                </thead>

                <tbody>
                {list.map((i, index) => (
                  <tr valign='middle' key={i.feature + index}>
                    <td height='60px' valign='middle'>{i.feature}</td>
                    <td height='60px' align='center'><Content source={i.slack} /></td>
                    <td height='60px' align='center'><Content source={i.commander} /></td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>}
          </div>
        </div>
      </div>
    )
  }
}

export default WhyAddCommander
