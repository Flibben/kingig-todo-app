const TodoModel = require('../models/todo')

  const getAllTodos = async (req, res) => {
     const todos = await TodoModel.find();
      res.json(todos);
  }

  const createNewTodo = async(req, res) => {
    console.log(req.body)
    const newTodo = new TodoModel(req.body) 
    const response = await newTodo.save();
    res.json(response);
  }

  module.exports = {getAllTodos, createNewTodo};
