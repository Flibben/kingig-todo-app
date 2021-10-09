const TodoModel = require('../models/todo')

const getAllTodos = async (req, res) => {
  const todos = await TodoModel.find();
  res.json(todos);
}

const createNewTodo = async (req, res) => {
  const newTodo = new TodoModel(req.body);
  const response = await newTodo.save();
  res.json(response);
}

const deleteTodo = async (req, res) => {
  const todoID = req.params.id;
  await TodoModel.deleteOne({ _id: todoID });
  res.status(200).send();
}

const editTodo = async (req, res) => {
  const todoID = req.body._id;
  const response = await TodoModel.findByIdAndUpdate({ _id: todoID }, req.body, { new: true });
  res.json(response);
}

module.exports = { getAllTodos, createNewTodo, deleteTodo, editTodo };
