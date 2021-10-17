const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: { type: String, required: true },
    body: String,
    date: Date,
    userRef: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
}, { timestamps: true })

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;