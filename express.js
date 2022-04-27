const express = require('express');
const { readFileSync } = require('fs');
const app = express();

const PORT=8091

const users= readFileSync('./user.txt','utf-8') //mongo

const usersObj = JSON.parse(users)  // json to object

const usersLength =  usersObj.users.length
console.log("~ usersLength", usersLength)

app.get("/users",(req,res)=>{       // getting all users
    res.send({sucess:"success", usersLength:usersLength, usersObj })
})

app.listen(PORT,()=>{
    console.log("Server started at " + PORT)
})