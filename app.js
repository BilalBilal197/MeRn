const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')

mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})

mongoose.connection.on('error',(err)=>{
    console.log("error connecting", err)
})


//QwuFsWJfOqiQ3uAN

// const customMiddleware = (req, res, next) => {
//     console.log("middleware executed!")
//     next()
// }


// app.get('/',(req,res)=>{
//     console.log("home")
//     res.send("hello world")
// })

// app.get('/about',customMiddleware,(req,res)=>{
//     console.log("about")
//     res.send("about page")
// })

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})