const express = require("express")
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
dotenv.config()
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true}).then(()=>{
    console.log("DB connection sucessfully")
}).catch((err)=>{
    console.log(err)
})
app.use(express.json());

app.listen(process.env.PORT || 4001,()=>{
    console.log("Server is running")
})