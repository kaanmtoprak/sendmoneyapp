const express = require('express');
const cors = require('cors');
const { connectDatabase } = require('./Database/connectDatabase');
const mongoose  = require('mongoose');
const routers  = require('./Routes/routers');
require('dotenv').config();


const app = express();

// Middlewares

app.use(cors());
app.use(express.json());
app.use('/',routers)

// Database Connection



// Route


// Listen

// app.get('/',(req,res)=>{
//     res.send("Hello!!")
// })

app.listen(process.env.PORT, ()=>{
    connectDatabase();
    console.log(`Server is on port ${process.env.PORT}`);
   
})