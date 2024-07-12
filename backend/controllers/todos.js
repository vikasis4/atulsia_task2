const Todos = require('../model/todos');

// The functions do the work as per their name and we are using Try/catch for better error handling

const createNote = async (req, res) => {
    try {
        var toDo = await Todos.create({
            text: req.body.text
        })
        res.json({ status: true, toDo })
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false })
    }
}
const deleteNote = async (req, res) => {
    try {
        await Todos.destroy({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json({ status: true })
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false })
    }
}
const getAll = async (req, res) => {
    try {
        var toDo = await Todos.findAll()
        res.json({ status: true, toDo })
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false })
    }
}
const updateStatus = async (req, res) => {
    try {
        await Todos.update(
            { completed: req.body.completed },
            {
                where: {
                    id: req.body.id
                }
            }
        )
        res.json({ status: true })
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false })
    }
}

module.exports = { createNote, deleteNote, getAll, updateStatus }