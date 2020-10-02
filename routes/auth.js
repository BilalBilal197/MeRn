const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const User = 

router.get('/', (req, res)=>{
    res.send("hello")
})

router.post('/signup',(req,res)=>{
    const {name, email,password} = req.body
    if(!email || !password || !name){
        return res.status(422).json({error:"please add all the fields"})
    }
    // res.json({message:"successfully posted"})

})

module.exports = router