let Todo = require("../model/todoModel")

let getAllTodoController = async(req,res) => {
    let data = await Todo.find({}).populate("postedBy")
    res.send(data);
}

module.exports = getAllTodoController