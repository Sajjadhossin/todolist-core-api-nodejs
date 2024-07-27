let Todo = require("../model/todoModel")

let getAllTodoController = async(req,res) => {
    let data = await Todo.find({postedBy: req.user._id}).populate("postedBy", "userName")

    if (data.length === 0) {
            return res.send({
                message: `Hello ${req.user.userName}, you have no todo items.`
            });
        }
    res.send({
        message: `Hello ${req.user.userName}, here is your todo list`, 
        data: data
    })
}

module.exports = getAllTodoController