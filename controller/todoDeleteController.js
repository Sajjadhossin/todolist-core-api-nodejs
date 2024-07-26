const Todo = require("../model/todoModel");

let todoDeleteController = async (req, res)=> {
    const {id} = req.params

    await Todo.findByIdAndDelete(id)
    res.send("Delete Successful")
}
module.exports = todoDeleteController;