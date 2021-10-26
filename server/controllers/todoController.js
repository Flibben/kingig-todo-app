const TodoModel = require('../models/todo');
const UserModel = require('../models/user');

const getAllTodos = async (req, res) => {
  try {
    const { userRef } = req.body;
    const todos = await TodoModel.find({}).where({ userRef });
    const user = await UserModel.find({ _id: userRef });
    const userDisplayName = user[0].displayName;
    res.status(200).json({ displayName: userDisplayName, todos });
  } catch (error) {
    res.status(403).json(error);
  }
};

const createNewTodo = async (req, res) => {
  try {
    const newTodo = new TodoModel(req.body);
    const response = await newTodo.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(403).json(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoID = req.params.id;
    const { userRef } = req.body;
    await TodoModel.deleteOne({ _id: todoID }).where(userRef);
    res.status(200).json();
  } catch (error) {
    res.status(403).json(error);
  }
};

const editTodo = async (req, res) => {
  try {
    const todoID = req.body._id;
    const { userRef } = req.body;
    const response = await TodoModel.findByIdAndUpdate(
      { _id: todoID },
      req.body,
      { new: true },
    ).where(userRef);
    res.status(200).json(response);
  } catch (error) {
    res.status(403).json(error);
  }
};

module.exports = {
  getAllTodos, createNewTodo, deleteTodo, editTodo,
};
