const express = require('express');
const { getAllTodos, createNewTodo, deleteTodo, editTodo } = require('../controllers/todoController')

const router = express.Router();

router.get('/', getAllTodos)
router.post('/', createNewTodo)
router.put('/', editTodo)
router.delete('/:id', deleteTodo)

module.exports = router;