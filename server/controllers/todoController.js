const TodoModel = require('../models/todo')

const getAllTodos = async (req, res) => {
  try {
    const userRef = req.body.userRef;
    const todos = await TodoModel.find({}).where({ userRef });
    res.status(200).json(todos)
  } catch (error) {
    res.status(403).json(error)
  }
}

const createNewTodo = async (req, res) => {
  try {
    const newTodo = new TodoModel(req.body);
    const response = await newTodo.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(403).json(error)
  }
}

const deleteTodo = async (req, res) => {
  try {
    const todoID = req.params.id;
    const userRef = req.body.userRef;
    await TodoModel.deleteOne({ _id: todoID }).where(userRef);
    res.status(200).json();

  } catch (error) {
    res.status(403).json(error)
  }
}

const editTodo = async (req, res) => {
  try {
    const todoID = req.body._id;
    const userRef = req.body.userRef;
    const response = await TodoModel.findByIdAndUpdate({ _id: todoID }, req.body, { new: true }).where(userRef);
    res.status(200).json(response);
  } catch (error) {
    res.status(403).json(error)
  }
}

module.exports = { getAllTodos, createNewTodo, deleteTodo, editTodo };
