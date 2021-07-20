import React, { Component, Fragment } from 'react'

import Content from '../components/Content'
import TermsSidebar from '../components/TermsSidebar'

import '../stylesheets/views/Policy.css'

class Policy extends Component {
  render () {
    const { sidebar, fields } = this.props
    const { policyList1, policyList2, policyList3, intro } = fields

    return (
      <div className='TermsPolicy Policy container page'>
        <div className='row pt-5 pb-5'>
          <TermsSidebar list={sidebar} />
          <div className='Policy--Content col-md-9'>
            <h2>Privacy Policy</h2>
            <Content source={intro} />

            <ol className='first-ol'>
              {policyList1.map((i, index) => (
                <Fragment key={i.title + index}>
                  <li className='title'>{i.title}</li>
                  <Content source={i.content} />
                </Fragment>
              ))}

              <li className='title'>{policyList2.title}</li>
              <div className='content'>
                <p>{policyList2.paragraph}</p>
                <ol>
                  <li><code>{policyList2.sublist1.title}</code></li>
                  <Content source={policyList2.sublist1.content} />
                  <li><code>{policyList2.sublist2.title}</code></li>
                  <Content source={policyList2.sublist2.content1} />
                  <table>
                    <tbody>
                      <tr>
                        <th width='20%'>Type of Cookies</th>
                        <th width='50%'>Description</th>
                        <th width='30%'>Managing Settings</th>
                      </tr>
                      {policyList2.sublist2.table.map((i, index) => (
                        <tr key={i.type + index}>
                          <td>{i.type}</td>
                          <td><Content source={i.desc} /></td>
                          <td><Content source={i.settings} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Content source={policyList2.sublist2.content2} />
                  <li><code>{policyList2.sublist3.title}</code></li>
                  <Content source={policyList2.sublist3.content} />
                  <li><code>{policyList2.sublist4.title}</code></li>
                  <Content source={policyList2.sublist4.content} />
                  <li><code>{policyList2.sublist5.title}</code></li>
                  <Content source={policyList2.sublist5.content} />
                  <li><code>{policyList2.sublist6.title}</code></li>
                  <Content source={policyList2.sublist6.content} />
                </ol>
              </div>

              {policyList3.map((i, index) => (
                <Fragment key={i.title + index}>
                  <li className='title'>{i.title}</li>
                  <Content source={i.content} />
                </Fragment>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Policy
