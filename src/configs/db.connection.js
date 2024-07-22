"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// MongoDB Connection:

// For import Mongoose
const mongoose = require('mongoose')

// For connecting DB
module.exports = () => {
    mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017/storeAPI')
        .then(() => console.log('* DB CONNECTED. *'))
        .catch(() => console.log('-- DB IS NOT CONNECTED. --'))
}