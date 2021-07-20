import React from 'react'
import PropTypes from 'prop-types'
import MoveTo from 'moveto'
import { withRouter } from 'react-router-dom'

const AnchorLink = ({
  children,
  href,
  className = '',
  options,
  onClick = () => {},
  toleranceElement, // elementQuery e.g. '.Nav' – element height will be used as tolerance
  ...props
}) => {
  const defaultOptions = {
    tolerance: 50,
    duration: 800,
    easing: 'easeOutQuart',
    container: window
  }

  const target = href.replace(/^\//, '')

  const handleClick = e => {
    e.preventDefault()
    if (toleranceElement) {
      defaultOptions.tolerance =
        document.querySelector(toleranceElement).offsetHeight - 1
      console.log(defaultOptions.tolerance)
    }
    const moveTo = new MoveTo(Object.assign(defaultOptions, options))
    try {
      moveTo.move(document.querySelector(target))
    } catch (err) {}
    props.history.replace(`${props.history.location.pathname}${target}`)
    if (onClick) onClick(e)
  }

  return (
    <a href={href} className={`AnchorLink ${className}`} onClick={handleClick}>
      {children}
    </a>
  )
}

AnchorLink.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  options: PropTypes.object,
  className: PropTypes.string,
  toleranceElement: PropTypes.string
}

export default withRouter(AnchorLink)
