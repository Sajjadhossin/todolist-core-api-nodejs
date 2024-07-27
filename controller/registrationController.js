const bcrypt = require('bcrypt');
const User = require("../model/userModel");

let registrationController = async(req, res)=> {
    const { userName, password} = req.body;
    console.log(userName, password);

    if(userName == " " || userName == undefined) {
        return res.send("User name is required");
    }

    if(password == " " || password == undefined) {
        return res.send("Password is required");
    }

    // Check if the user is already registered or not.
    let existingUser =await User.findOne({userName: userName})
    if(existingUser !=null) {
        return res.send("User already exists");
    }

    bcrypt.hash(password, 10, async function(err,hash) {
        let user = new User({
            userName: userName,
            password: hash
        });
        user.save();
        res.send({
            message: `Hello ${userName}, your registration is successfully done.`,
            id: user._id,
            userName: user.userName
        });
    })
}

module.exports = registrationController;