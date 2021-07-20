import React, { Component, Fragment } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import '../stylesheets/components/Modal.css'

class ModalComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      updateFromState: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.modal !== prevState.modal) {
      if(nextProps.updateFromState) {
        return {
          modal: !nextProps.modal,
          updateFromState: false
        }
      } else {
        return {
          modal: nextProps.modal,
          updateFromState: false
        }
      }

    }
    return null
  }

  handleClose = e => {
    e.preventDefault()
    this.setState(prevState => ({
      modal: !prevState.modal,
      updateFromState: true
    }))
    this.props.close(false)
  }

  render () {
    const { name, intro, image, className } = this.props;
    const { modal } = this.state;
    return (
      <div className={`modal-wrap ${className}`}>
        <Modal isOpen={modal} toggle={this.handleClose} className={this.props.className}>
          <ModalHeader toggle={this.handleClose}>{name}</ModalHeader>
          <ModalBody>
            {image ? <Fragment>
              <img src={image} alt={name} width='100%' />
              {intro}
            </Fragment> : <Fragment>{intro}</Fragment>}
          </ModalBody>
          <ModalFooter>
            {/*<Button color='primary' onClick={toggle}>Do Something</Button>{' '}*/}
            {/*<Button className='btn btn-outline-app' onClick={this.handleClose}>Close</Button>*/}
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ModalComponent
