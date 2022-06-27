import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const ApiError = ({error, statusCode}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <h2>Oops, there was a problem retriving the info you requested. Please check the details and retry in few. </h2>
        <Button variant="primary" onClick={handleShow}>
          View Details
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{`Error Text: ${error}`}</div>
          <div>{`Status Code: ${statusCode}`}</div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ApiError