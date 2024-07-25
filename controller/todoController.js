let Todo = require("../model/todoModel")

let todoController = (req, res) => {
    const {title, description, postedBy} = req.body

    let todo = new Todo({
        title: title,
        image: req.file.path,
        description: description,
        postedBy: postedBy

    })

    todo.save();

    res.send({message: "Todo Create Sucesscully done"})
}

module.exports = todoController