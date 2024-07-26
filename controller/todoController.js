let Todo = require("../model/todoModel")

let todoController = (req, res) => {
    const {title, description, postedBy} = req.body

    if (!title || title.trim() === "") {
        return res.send("Title is required");
    }
    if (!req.file || req.file.path.trim() === "") {
        return res.send("Image is required");
    }

    let todo = new Todo({
        title: title.trim(),
        image: req.file.path,
        description: description,
        postedBy: postedBy
    })

    todo.save();

    res.send({message: "Todo Create Sucesscully done"})
}

module.exports = todoController