const TodoModel = require('../models/todo')

  const getAllTodos = async (req, res) => {
     const todos = await TodoModel.find()
      res.json(todos)
  }

  module.exports = getAllTodos;
