const http = require('http')

const port=8000;

const server = http.createServer();

server.on("request",(req,res)=>{
    console.log("request received")
    res.write("hello from server")
    res.end();
})


server.listen(8091,()=>{
    console.log("SERVER STARTED")
})








