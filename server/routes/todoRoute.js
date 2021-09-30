const express = require('express');
const { model } = require('mongoose');
const getAllTodos = require('../controllers/todoController')

const router = express.Router();

router.get('/', getAllTodos)

module.exports = router;