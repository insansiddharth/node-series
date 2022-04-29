//middleware

const express =require('express')
const app =express();

app.use(express.json())

const PORT = 3009;

app.post("/home", (req,res,next)=>{           // /users
    console.log(req.name)
    res.send({status:"success",data:"data"})
    next()
})

//sending data in req
// 1. req.body
// 2. req.params
// 3. req.query

const data = [
    {id:1, text: "1 am number 1"},
    {id:2, text: "1 am number 2"},
    {id:3, text: "1 am number 3"},
    {id:4, text: "1 am number 4"},
    {id:5, text: "1 am number 5"},
    {id:6, text: "1 am number 6"},
    {id:7, text: "1 am number 7"},
    {id:8, text: "1 am number 8"},
    {id:9, text: "1 am number 9"},
    {id:10, text: "1 am number 10"},
    {id:11, text: "1 am number 11"},
    {id:12, text: "1 am number 12"},
    {id:13, text: "1 am number 13"},
]

app.get("/users",(req,res,next)=>{
    const page = req.query.page
    const limit = req.query.limit

    const startId = (page-1)*limit +1 
    const endId = page *limit
    console.log()

    res.send({status:"success", total:data.length, obj: data.slice(startId-1,endId) })
    next()
})


app.listen(PORT, ()=>{
    console.log("Server started on Port ", PORT)
})
