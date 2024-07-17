const User = require("../model/userModel");
const bcrypt = require('bcrypt')

let loginController = async(req, res)=> {
    const {userName, password} = req.body;

    if(userName == " " || userName == undefined) {
        return res.send("Username is required");
    }
    if(password == " " || password == undefined) {
        return res.send("Password is required");
    }

    // check if the user already exists or not
    let existingUser = await User.findOne({userName: userName});
    if(existingUser == null) { 
        return res.send("Not found any account with the given username");
    }

    bcrypt.compare(password, existingUser.password, function(err, result) {
        if (result) {
            return res.send({
                message: `You are login successfully, ${existingUser.userName}`,
                id: existingUser._id,
                userName: existingUser.userName
            });
        } else {
            return res.send("Incorrect password. Please try again");
        }
    });
}

module.exports = loginController;