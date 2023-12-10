const toDo = require("../models/toDoModel");

const getTodos = async (req, res) => {
    const toDos = await toDo.find();

    res.json(toDos);
};

const createToDo = (req, res) => {
    const todo = new toDo({
        id: 1,
        title: req.body.title
    });

    todo.save();
    res.json(toDo);
};

const deleteToDo = async (req, res) => {
    const deleteToDo = await toDo.findByIdAndDelete(req.params.id)
    res.json(deleteToDo)
};

const toggleToDoStatus = async (req, res) => {
    const todo = await toDo.findById(req.params.id)
    todo.complete = !todo.complete
    todo.save()
    res.json()
};

exports.getTodos = getTodos;
exports.createToDo = createToDo;
exports.deleteToDo = deleteToDo;
exports.toggleToDoStatus = toggleToDoStatus;