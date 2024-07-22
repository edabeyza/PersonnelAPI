"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose@latest express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/

const express = require("express");
const app = express();

// For reading the dotenv file
require('dotenv').config()
const PORT = process.env.PORT || 8000


/*------------------------------------------------*/

// For accepting JSON data
app.use(express.json())

// For catch the async errors
require('express-async-errors')

/* ------------------------------------------------------- */
// For connecting the DB
require('./src//configs/db.connection')()
/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/error.handler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()