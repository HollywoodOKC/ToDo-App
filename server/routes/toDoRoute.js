const express = require("express");
const router = express.Router();
const { getTodos, createToDo, deleteToDo, toggleToDoStatus } = require("../controllers/toDoController");

router.get("/todos", getTodos);
router.post("/todo/new", createToDo);
router.delete("/todo/delete/:id", deleteToDo)
router.get("/todo/toggleStatus/:id", toggleToDoStatus)

module.exports = router;