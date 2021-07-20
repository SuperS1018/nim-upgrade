import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Alert extends Component {
  toggle = async () => {
    await this.props.toggle()
    const { cb } = this.props.content
    if(cb && {}.toString.call(cb) === '[object Function]') {
      cb()
    }
  }
  render () {
    const { show, content } = this.props
    return (
      <div>
        <Modal isOpen={show} toggle={this.toggle} style={{top: '100px'}}>
          <ModalHeader toggle={this.toggle} className='align-items-center'>{content.title}</ModalHeader>
          <ModalBody>
            {typeof content.message === 'string' && <p className='mt-3' dangerouslySetInnerHTML={{ __html: content.message }} />}
            {typeof content.message === 'object' && <div>{content.message}</div>}
          </ModalBody>
          <ModalFooter style={{paddingBottom: '20px'}}>
            <Button className='btn btn-app btn-small' onClick={this.toggle}>{content.btn ? content.btn : 'Close'}</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Alert
