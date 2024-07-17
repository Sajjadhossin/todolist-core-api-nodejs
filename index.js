require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dbConnection = require("./helper/dbConnection");
const registrationController = require('./controller/registrationController');
const loginController = require('./controller/loginController');

// call dbConnection to test connection with db
dbConnection();
app.use(express.json());

app.post('/registration', registrationController);
app.post('/login', loginController);

app.listen(8000)
