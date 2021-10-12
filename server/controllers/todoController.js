const TodoModel = require('../models/todo')

const getAllTodos = async (req, res) => {
  const userRef = req.body.userRef;
  console.log(userRef);
  const todos = await TodoModel.find({}).where({ userRef });
  console.log(todos);
  res.json(todos);
}

const createNewTodo = async (req, res) => {
  const newTodo = new TodoModel(req.body);
  const response = await newTodo.save();
  res.json(response);
}

const deleteTodo = async (req, res) => {
  const todoID = req.params.id;
  const userRef = req.body.userRef;
  await TodoModel.deleteOne({ _id: todoID }).where(userRef);
  res.status(200).send();
}

const editTodo = async (req, res) => {
  const todoID = req.body._id;
  const response = await TodoModel.findByIdAndUpdate({ _id: todoID }, req.body, { new: true });
  res.json(response);
}

module.exports = { getAllTodos, createNewTodo, deleteTodo, editTodo };
