const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: {type: String, required: true},
    body: String,
    date: Date
})

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;