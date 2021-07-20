import React, { Component } from 'react'
import AuthComponent from '../components/AuthComponent'
import Breadcrumb from '../components/Breadcrumb'

import '../stylesheets/views/Signup.css'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lock: null
    }
  }

  handleAuthenticatedCondition = () => {
    let forParam = new URLSearchParams(window.location.search).get('for')
    const { lock } = this.props

    if(/netlify\/#auth=/i.test(window.location.href)) {
      forParam += window.location.hash
    }

    forParam && this.setState({ forParam })
    lock && this.setState({ lock })
  }

  componentDidMount () {
    this.handleAuthenticatedCondition()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if(prevProps !== this.props) {
      this.handleAuthenticatedCondition()
    }
  }

  render () {
    const { list } = this.props
    const { lock } = this.state
    return (
      <div className='Signup page'>
        <Breadcrumb className='bg-g no-banner' />
        <div className='container-fluid'>
          <div className='row'>
            <div className='Signup--List col-md-6'>
              <div>
                <ul className='list-unstyled'>
                  {list.map((i, index) => (
                    <li className='Signup--Item' key={i.title + index}>
                      <img src={i.icon} alt="" />
                      <span className='text-wrap'>
                      <h3>{i.title}</h3>
                      <p>{i.desc}</p>
                    </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='col-md-6'>
              <AuthComponent type='signup' lock={lock} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Signup
