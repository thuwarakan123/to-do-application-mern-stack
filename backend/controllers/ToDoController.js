const ToDoModel = require('../models/ToDoModel');

// Controller to get all ToDos
const getAllToDos = async (req, res) => {
    try {
      const todos = await ToDoModel.find();
      res.status(200).send(todos);
    } 
    catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
};

// Controller to create a new ToDo
const saveToDo = async (req, res) => {
    const { title, description, completed } = req.body;
    try {
        ToDoModel
        .create({ title, description, completed })
        .then((data) => {
            console.log('Added Successfully...')
            console.log(data)
            res.send(data)
        })
    } catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
};

// Controller to update a ToDo by ID
const updateToDo = async (req, res) => {
  const { id, title, description, completed } = req.body;
  try {
    ToDoModel
    .findByIdAndUpdate(id, { title, description, completed })
    .then((data) => res.send(data))
  } 
  catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

// Controller to delete a ToDo by ID
const deleteToDo = async (req, res) => {
  const { id } = req.body;
  try {
    ToDoModel
    .findByIdAndDelete(id)
    .then(()=>res.send("Deleted Successfully..."))
  } 
  catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllToDos,
  saveToDo,
  updateToDo,
  deleteToDo
};