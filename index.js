const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require("dotenv").config();
mongoose.connect(process.env.DB_CONNECTION_URL,()=>{
    console.log("connected to db");
})

// this middleware pass the body and after that it return in form of JSON
app.use(bodyParser.json());

app.use("/",require('./routes/root'))

app.listen(process.env.PORT,function(){
    console.log("succesfully on ", 8000)
    
})