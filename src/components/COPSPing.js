import React, { Component } from 'react'
import { fetchCloudNginxPing, fetchCloudHttpsPing, fetchCloudIcmpPing } from '../action'
import PropTypes from 'prop-types'

import COPSPingComponent from './COPSPingComponent'

class COPSPing extends Component {
  render () {
    const { from, to } = this.props
    return (
      <div>
        <COPSPingComponent from={from} to={to} data={fetchCloudNginxPing(from, to)} title={'Nginx Ping Endpoint'} />
        <COPSPingComponent from={from} to={to} data={fetchCloudHttpsPing(from, to)} title={'Apigcp Ping Endpoint'} />
        <COPSPingComponent from={from} to={to} data={fetchCloudIcmpPing(from, to)} title={'Icmp Ping Endpoint'} />
      </div>
    )
  }
}

export default COPSPing

COPSPing.propTypes = {
  from: PropTypes.object.isRequired,
  to: PropTypes.object.isRequired
}
