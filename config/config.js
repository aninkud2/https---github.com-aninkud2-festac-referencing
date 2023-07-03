require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DATABASE
mongoose.connect(url).then(()=>{
    console.log('Connected to database')
}).catch((error)=>{
    console.log(error.message)
})