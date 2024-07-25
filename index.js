require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dbConnection = require("./helper/dbConnection");
const registrationController = require('./controller/registrationController');
const loginController = require('./controller/loginController');
const todoController = require('./controller/todoController');
const multer  = require('multer')
const path = require('path');

// call dbConnection to test connection with db
dbConnection();
app.use(express.json());

// start image upload system
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './uploads')
    },
    filename: function (req, file, cb) { 
        console.log("file",file);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "_" + file.originalname )
    }
})

const upload = multer({ storage: storage })
// end image upload system


app.post('/registration', registrationController);
app.post('/login', loginController);
app.post('/createTask', upload.single('avatar'), todoController);

app.listen(8000)
