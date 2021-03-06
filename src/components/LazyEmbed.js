import React from 'react'
import 'intersection-observer'
import Observer from '@researchgate/react-intersection-observer'

import '../stylesheets/components/LazyEmbed.css'

class LazyEmbed extends React.Component {
  static defaultProps = {
    lazy: true
  }

  state = {
    src: null,
    dataSrc: this.props.src,
    loaded: !this.props.lazy
  }

  handleIntersection = e => {
    if (e.isIntersecting) {
      this.setState({
        src: this.state.dataSrc,
        loaded: true
      })
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if(nextProps.src !== prevState.src) {
      return {
        src: nextProps.src,
        dataSrc: nextProps.src
      }
    }
    return null
  }

  render () {
    let className = this.props.className || ''
    if (this.state.loaded) className += ' loaded'
    const options = {
      onChange: this.handleIntersection,
      onlyOnce: true,
      rootMargin: '0% 0% 100%'
    }

    return (
      <Observer {...options}>
        <div
          className={`LazyEmbed ${className}`}
          dangerouslySetInnerHTML={{ __html: this.state.src }}
        />
      </Observer>
    )
  }
}

export default LazyEmbed
