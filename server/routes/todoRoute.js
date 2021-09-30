const express = require('express');
const { model } = require('mongoose');
const getAllTodos = require('../controllers/todoController')
console.log(getAllTodos)

const router = express.Router();

router.get('/', getAllTodos)

module.exports = router;