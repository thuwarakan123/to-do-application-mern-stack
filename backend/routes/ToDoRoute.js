const {Router} = require('express');
const { getAllToDos, saveToDo, updateToDo, deleteToDo } = require('../controllers/ToDoController');

const router = Router();

router.get('/', getAllToDos);
router.post('/save', saveToDo);
router.post('/update', updateToDo);
router.post('/delete', deleteToDo);

module.exports = router;