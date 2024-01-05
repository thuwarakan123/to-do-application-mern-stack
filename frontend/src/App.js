import React, { useState, useEffect } from 'react';
import "bootswatch/dist/flatly/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import AddToDo from "./components/addToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from './utils/HandleApi';
import Table from './components/Table';
import CheckMessage from './components/Message';

function App() {
  const headingStyle = {
    fontWeight: 900,
    textAlign: 'center'
  }

  const buttonStyle = {
    fontWeight: 800,
    marginRight: 0
  }

  const [toDo, setToDo] = useState([]);
  const [show, setShow] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    toDoDescription: '',
    completed: false
  });

  const handleClose = () => {
    setShow(false);
    setFormData({
      title: '',
      toDoDescription: '',
      completed: false
    });
    setIsValid(false);
    setIsUpdate(false);
  } 

  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    if(name === 'completed'){
      setFormData({
        ...formData,
        completed: checked,
      });
    }
    else{
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const openEdit = (data) => {
    console.log(data)
    setIsUpdate(true);
    setFormData({
      ...data,
      toDoDescription: data.description
    });
    handleShow();
  }

  const OpenDelete = (data) => {
    setOpenDelete(true);
    setFormData(data);
  }

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setFormData({
      title: '',
      toDoDescription: '',
      completed: false
    });
  };

  const handleSave = async () => {
    if (!formData.title) {
      setIsValid(true);
      return;
    }

    if (isUpdate) {
      const inputData = {
        title: formData.title,
        description: formData.toDoDescription,
        completed: formData.completed,
        id: formData._id
      };
      updateToDo(inputData, setToDo);
    } 
    else {
      const inputData = {
        title: formData.title,
        description: formData.toDoDescription,
        completed: false
      };
      addToDo(inputData, setToDo);  
    }
    handleClose();
  };

  const deleteData = () => {
    deleteToDo({id: formData._id}, setToDo);
    handleCloseDelete();
  }

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  return (
    <div className="App m-4">
      <h1 style={headingStyle}>To Do List</h1>
      <div className="text-end" style={{paddingRight:0}}>
        <Button variant="primary" className='my-3' onClick={handleShow} style={buttonStyle}> + Add To Do</Button>
      </div>

      <Table
        rows={toDo}
        openEdit={openEdit}
        OpenDelete={OpenDelete}
      />

      {
        show &&
      <AddToDo
       show={show}
       handleClose={handleClose}
       formData={formData}
       handleInputChange={handleInputChange}
       handleSave={handleSave}
       isValid={isValid}
       isUpdate={isUpdate}
      />
      }
      {
        openDelete && 
        <CheckMessage
         handleClose={handleCloseDelete}
         show={openDelete}
         handleDelete={deleteData}
        />
      }
    </div>
  );
}

export default App;
