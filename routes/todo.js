const { createTodo, fetchTodo, updateTodo, deleteTodo, fetchAllTodo } = require("../controllers");

const router = require("express").Router();

// Create a single todo
router.post("/",createTodo);

// fetch a single todo
router.get("/todo/:id", fetchTodo);

// update a todo
router.post("/:id", updateTodo);

// delete a todo
router.delete("/:id", deleteTodo);

// get all todos
router.get("/all", fetchAllTodo);


module.exports = router;
