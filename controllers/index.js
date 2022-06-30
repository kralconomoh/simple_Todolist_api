const Todo = require("../models/todo");

// Create a single todo
exports.createTodo = (req, res, next) => {
  const { title, description } = req.body;
  console.log(req.body)
  const todo = new Todo({
    title,
    description
  });

  todo
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send({...err, message: err.message, extraMessage:"Something went wrong"});
    });
};

// fetch a single todo
exports.fetchTodo = (req, res, next) => {
  const { id } = req.params;
  Todo.findOne({ _id: id })
    .then((data) => {
      if (data) {
        res.status(201).json(data);
      }
    })
    .catch((err) => {
      res.status(500).send({...err, message: err.message, extraMessage:"Todo not found!"});
    });
};

// update a todo
exports.updateTodo = (req, res, next) => {
  const {id} = req.params
  const { title, description} = req.body;
  Todo.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true })
    .then((data) => {
      if (data) {
        res.status(201).json(data);
      }
    })
    .catch((err) => {
      res.status(500).send({...err, message: err.message, extraMessage:"Invalid Todo Id or bad network"});
    });
};

// delete a todo
exports.deleteTodo = (req, res, next) => {
  const { id } = req.params;

  Todo.findByIdAndDelete({ _id: id })
    .then((data) => {
      if (data) {
        res.status(201).json({ message: "task deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({...err, message: err.message, extraMessage:"Invalid Todo Id!"});
    });
};

// get all todos
exports.fetchAllTodo = (req, res, next) => {
  Todo.find({})
    .then((data) => {
      if (data) {
        res.status(201).json(data);
      }
    })
    .catch((err) => {
      res.status(500).send({...err, message: err.message, extraMessage:"Something went wrong"});
    });
};
