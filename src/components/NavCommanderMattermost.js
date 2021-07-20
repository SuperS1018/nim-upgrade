import React, { Component, Fragment } from 'react'
import { googleAnalyticsEvent } from '../util/ga'

import LogoCommander from './LogoCommander'
import NavLink from './NavLink'
import '../stylesheets/components/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { isMobile } from '../util/misc'
import { Link } from 'react-router-dom'

class NavigationCommanderTeams extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: false,
      isOpen: false,
      isMobile: false
    }
  }

  componentDidMount () {
    this.unlisten = this.props.history.listen(this.close)
    this.handleDimensions()
    window.addEventListener('resize', this.handleDimensions)
  }

  componentWillUnmount () {
    this.unlisten()
    window.removeEventListener('resize', this.handleDimensions)
  }

  handleDimensions = () => {
    const { isOpen } = this.state
    if(isOpen) {
      this.setState({ isOpen: false })
    }
    if (window.innerWidth <= 991) {
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: isMobile()})
    }
  }

  close = () => {
    this.setState({
      isOpen: false
    })
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    this.props.handleSearchClose();
  }

  handleShowContentSearch = () => {
    this.props.handleShowContentSearch(this.searchRef)
  }

  render () {
    const { isOpen, isMobile } = this.state
    const {
      list,
      contentSearch,
      handleSearchKeyDown,
      contentSearchResult,
      handleSearchResultClick,
      isContentSearch,
      handleSearchClose,
      next,
      showNext
    } = this.props

    return (
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-commander mattermost${isMobile ? ' mobile' : '' }`}>
        <div className='container-fluid'>
          <div className='navbar-brand logo-wrap'>
            <Link className='navbar-brand d-flex align-items-center' to='/'>
              <LogoCommander />
              <span className='logo-text'><span className='text-small'>Docs</span><br />Commander</span>
            </Link>
          </div>
          <button className='navbar-toggler mr-5' type='button' onClick={this.toggle}>
            {!isOpen && <FontAwesomeIcon icon={faBars} />}
            {isOpen && <FontAwesomeIcon icon={faTimes} />}
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className='navbar-nav mr-auto'>
              { list.map((i, index) => (
                <Fragment key={i + index}>
                  {i !== 'Installing' && <li className='nav-item'>
                    <NavLink className='nav-link' to={`/docs/commander/mattermost/${i.toLowerCase().replace(/ /g, '-')}` } onClick={() => googleAnalyticsEvent(8, 'Commander Header', i)}>{i}</NavLink>
                  </li>}
                </Fragment>
              ))}
            </ul>

            <div className='search-wrap mr-3'>
              <div className={`input-wrap`}>
                <FontAwesomeIcon icon={faSearch} onClick={this.handleShowContentSearch}  />
                <input type="text" className={`search-input ${isContentSearch ? 'show' : ''}`} placeholder='Content search' onKeyDown={handleSearchKeyDown} ref={input => this.searchRef = input} />
              </div>

              {contentSearch && !!contentSearchResult.length && <div className='search-result'>
                <ul>
                  {contentSearchResult.map((i, index) => (
                    <li key={i.ref + index}>
                      <a className='truncate' href='#foo' onClick={e => {handleSearchResultClick(e); this.setState({ isOpen: false })}} title={i.ref}>
                        {i.ref}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className='result-count'>
                  <button className='btn btn-app btn-small float-left' onClick={() => {handleSearchClose(); this.setState({ isOpen: false })}}>Close</button>
                  {showNext && <button className='btn btn-app btn-small float-left ml-2' onClick={next}>next</button>}
                  <span>{contentSearchResult.length} result{contentSearchResult.length > 1 ? 's' : ''}</span>
                </p>
              </div>}
            </div>

            <div className='auth-wrap'>
              <div className='mt-2 mt-md-0 button'>
                <NavLink className='btn btn-mattermost mr-3' to='/docs/commander/mattermost/quickstart#quickstart' onClick={() => googleAnalyticsEvent(0, 'Commander Header', 'Add to Slack')}>Setup in Mattermost</NavLink>
                <NavLink className='btn btn-app mr-3' to='/'>Home</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavigationCommanderTeams
