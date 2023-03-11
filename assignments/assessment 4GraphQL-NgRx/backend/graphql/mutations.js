const Todo = require("../models/Todo").model;

const mutations = {
    addTodo: async (_, { input }, { pubsub }) => {
        const count = await Todo.find().count();
        const newTodo = await Todo.create({
            id: count + 1,
            ...input,
        });
        pubsub.publish("todo", {
            todo: {
                mutation: "CREATE_TODO",
                data: newTodo,
            },
        });
        return {
            ...newTodo._doc,
            _id: newTodo._id.toString(),
        };
    },
    updateTodo: async (_, { input }, { pubsub }) => {
        const { id, ...reqBody } = input;
        const todo = await Todo.findOne({ id: id, isDeleted: false });
        if (!todo) {
            throw new Error(`Todo with id ${id} not found`);
        }
        const updatedTodo = await Todo.findOneAndUpdate(
            { id: id },
            { $set: reqBody },
            { new: true }
        );
        pubsub.publish("todo", {
            todo: {
                mutation: "UPDATE_TODO",
                data: updatedTodo,
            },
        });
        return {
            ...updatedTodo._doc,
            _id: updatedTodo._id.toString(),
        };
    },
    deleteTodo: async (_, { id }, { pubsub }) => {
        const todo = await Todo.findOne({ id: id });
        if (!todo) {
            throw new Error(`Todo with id ${id} not found`);
        }
        const deletedTodo = await Todo.findOneAndUpdate(
            { id: id },
            { $set: { isDeleted: true } },
            { new: true }
        );
        pubsub.publish("todo", {
            todo: {
                mutation: "DELETE_TODO",
                data: deletedTodo,
            },
        });
        return {
            ...deletedTodo._doc,
            _id: deletedTodo._id.toString(),
        };
    },
};

module.exports = mutations;
