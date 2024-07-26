const { response } = require("express");
let Todo = require("../model/todoModel")

let todoEditController = async(req, res)=> {
    const {id, title, image, description} = req.body

    let existingTodo = await Todo.findOne({_id: id});

    if(existingTodo == null) {
        return res.send("Todo not found");
    }

    let updateData = {
        title: title || existingTodo.title,
        image: image || existingTodo.image,
        description: description || existingTodo.description
    }

    let update = await Todo.findByIdAndUpdate({_id:id}, updateData, {new:true});
    res.send(update)
}

module.exports = todoEditController;