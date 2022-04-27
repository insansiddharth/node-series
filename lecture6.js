const express = require('express');
const { readFileSync, writeFile } = require('fs');
const app = express();

app.use(express.json())

const usersData = readFileSync('./users.json','utf-8') //tread file synchronously

const dataObj = JSON.parse(usersData)

app.get("/users",(req,res)=>{        //getting users data  // read
    res.send(dataObj)
})

app.post("/users",(req,res)=>{   //write
    const newUser = req.body
    const userSize = dataObj.length //4

    dataObj.push({id:userSize+1,  ...newUser})

    const dataList= JSON.stringify(dataObj)

    writeFile("users.json", dataList,(err)=>{
        if(err) console.log(err)
    });
    res.send("writing data")
})


app.patch("/users/:id",(req,res)=>{     //update data
    const updatedData = req.body
    const id= req.params.id
    const updateData = dataObj.map((user)=>{
        if(user.id==id) user.email= updatedData.email
        return user;
    })

    console.log("~ updateData", updateData)
    writeFile("users.json", JSON.stringify(updateData),(err)=>{
        if(err) console.log(err)
    });
    res.send("patch request")
})


app.delete("/users/:id",(req,res)=>{       //delete 
    const id = req.params.id

    const updateData = dataObj.filter((user)=>{
        if(user.id!=id) return user
    })

    writeFile("users.json", JSON.stringify(updateData),(err)=>{
        if(err) console.log(err)
        else res.send("Delete successfully")
    });
})



app.listen(3002,()=>{
    console.log("server started at port "+3002)
})

