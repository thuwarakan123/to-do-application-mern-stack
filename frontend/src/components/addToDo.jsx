import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddToDo = (props) => {

  const { handleClose, show, formData, handleSave, handleInputChange, isValid, isUpdate } = props
  
  const titleStyle = {
    fontWeight: 900,
    fontSize: "18px"
  }

  const labelStyle = {
    fontWeight: 800
  }

  const buttonStyle = {
    fontWeight: 900,
    minWidth:"100%"
  }
  
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton className='bg-primary' closeVariant='white'>
          <Modal.Title className="text-light" style={titleStyle}> + {isUpdate ? "Update To Do" : "Add To Do"} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="itemName">
                    <Form.Label style={labelStyle}>Title</Form.Label>
                    <Form.Control
                     type="text"
                     name="title"
                     value={formData.title}
                     onChange={handleInputChange}
                     isInvalid={isValid && !formData.title}
                    />
                    { 
                      isValid && !formData.title && (
                        <Form.Text className="text-danger">
                          Title is required!
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-4" controlId="itemDescription">
                    <Form.Label style={labelStyle}>Description</Form.Label>
                    <Form.Control
                     type="text"
                     name="toDoDescription"
                     as="textarea" 
                     rows={3}
                     value={formData.toDoDescription}
                     onChange={handleInputChange}
                    />
                </Form.Group>
                {
                  isUpdate && 
                  <Form.Group className="mb-4" controlId="completed">
                    <Form.Check
                     type="checkbox"
                     name="completed"
                     checked={formData.completed}
                     onChange={handleInputChange}
                     label="Is Completed"
                     style={labelStyle}
                    />
                  </Form.Group>
                }
                <Button style={buttonStyle} onClick={handleSave}>Save</Button>
            </Form>
        </Modal.Body>
    </Modal>
  )
}

export default AddToDo;