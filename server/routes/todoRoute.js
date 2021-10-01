const express = require('express');
const { model } = require('mongoose');
const {getAllTodos, createNewTodo} = require('../controllers/todoController')

const router = express.Router();

router.get('/', getAllTodos)
router.post('/', createNewTodo)

module.exports = router;