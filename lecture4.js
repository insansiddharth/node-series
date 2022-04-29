// const EventEmmiter = require('events')

// const emitter = new EventEmmiter();

// //custom events

// emitter.on("dataUpdated",(keyword)=>{           //registering
//     console.log("Data has been updated "+keyword)
// })

// emitter.emit("dataUpdated","name") ;  //raised the listen

// fun1()

const fs = require("fs");

const superagent = require("superagent");

const readFileProm = (file) => {
  return new Promise((resolve, rejected) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) rejected(err);
      else resolve(data);
    });
  });
};

const writeFileProm = (filename, data) => {
  return new Promise((resolve, rejected) => {
    fs.writeFile(filename, data, (err) => {
      if (err) rejected(err);
      else resolve();
    });
  });
};


readFileProm("file1.txt")
  .then((data) => {
    return superagent.get(
      `https://www.breakingbadapi.com/api/characters?name=${data}`
    );
  })
  .then((res) => {
    return writeFileProm("nickname.txt", res._body[0].nickname);
  })
  .then(() => console.log("write succesful"))
  .catch((err) => console.log(err));



//   console.log(superagent.get(`https://www.breakingbadapi.com/api/characters?name=Walter`))


// ASYNC AWAIT

const updateFile = async ()=>{
    try{
        const file1Text = await readFileProm("fie1.txt");
        const resp = await superagent.get(`https://www.breakingbadapi.com/api/characters?name=${file1Text}`)
        const writeText= await writeFileProm("nickname.txt",'utf-8', resp._body[0].nickname)
    } catch(err) {
        console.log("error: ", err)
    }
}

updateFile()



