import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CheckMessage = (props) => {

  const { handleClose, show,  handleDelete } = props
  
  const titleStyle = {
    fontWeight: 900,
    fontSize: "18px"
  }

  const buttonStyle = {
    fontWeight: 900,
    width: "100px"
  }

  const pharaStyle = {
    fontWeight: 800,
    fontSize: "17px"
  }
  
  return (
    <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton className='bg-primary' closeVariant='white'>
          <Modal.Title className="text-light" style={titleStyle}> Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p style={pharaStyle}>Are you sure you want to delete ?</p>
            <div className="d-flex justify-content-end">
                <Button style={buttonStyle} onClick={handleDelete} className='mx-3'>Yes</Button>
                <Button style={buttonStyle} onClick={handleClose}>No</Button>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default CheckMessage