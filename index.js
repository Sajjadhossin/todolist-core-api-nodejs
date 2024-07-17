require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dbConnection = require("./helper/dbConnection");
const registrationController = require('./controller/registrationController');

// call dbConnection to test connection with db
dbConnection();
app.use(express.json());

app.post('/registration', registrationController);

app.listen(8000)
