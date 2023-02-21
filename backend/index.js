const express = require("express")
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const productRoute = require('./routes/product')
const cors = require('cors');
const app = express()
dotenv.config()
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true}).then(()=>{
    console.log("DB connection sucessfully")
}).catch((err)=>{
    console.log(err)
})
app.use(express.json());
app.use(cors());
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
app.use('/api/products',productRoute)
app.listen(process.env.PORT || 4001,()=>{
    console.log("Server is running")
})