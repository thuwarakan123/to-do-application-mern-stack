import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const getAllToDo = (setToDo) => {
    axios.get(baseUrl)
    .then(({data}) =>{
        console.log(data);
        setToDo(data);
    })
};

const addToDo = (inputData, setToDo) => {
    axios.post(`${baseUrl}/save`, inputData)
    .then(({data}) =>{
        console.log(data);
        getAllToDo(setToDo);
    })
};

const updateToDo = (inputData, setToDo) => {
    axios.post(`${baseUrl}/update`, inputData)
    .then(({data}) =>{
        console.log(data);
        getAllToDo(setToDo);
    })
};

const deleteToDo = (inputData, setToDo) => {
    axios.post(`${baseUrl}/delete`, inputData)
    .then(({data}) =>{
        console.log(data);
        getAllToDo(setToDo);
    })
};

export { getAllToDo, addToDo, updateToDo, deleteToDo }