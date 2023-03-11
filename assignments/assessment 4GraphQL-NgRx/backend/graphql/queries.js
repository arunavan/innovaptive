const Todo = require("../models/Todo").model;

const queries = {
    todos: async () => {
        const todoWithUsers = await Todo.find({ isDeleted: false });
        return todoWithUsers.map((todo) => {
            return {
                ...todo._doc,
                _id: todo._id.toString(),
            };
        });
    },
    getTodo: async (_, { id }) => {
        const todo = await Todo.findOne({ id: id, isDeleted: false });
        return {
            ...todo._doc,
            _id: todo._id.toString(),
        };
    },
    searchTodo: async (_, { title }) => {
        const todos = await Todo.find({
            title: { $regex: title, $options: "i" },
            isDeleted: false,
        });
        return todos.map((todo) => {
            return {
                ...todo._doc,
                _id: todo._id.toString(),
            };
        });
    },
};

module.exports = queries;
