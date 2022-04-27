
// function add(a, b){
//     return a+b;
// }

const { readFileSync } = require("fs");

// const sub = function(a,b){     //anonymous function
//     return a-b;
// }

// const mul = (a,b)=>{
//     return (a*b)
// }


// Arrow function

// const add2= (a, b) =>  a+b;


// const printing =  a =>{
//     console.log(a)
// }


// callback function
/////////////////////////////////
// function fun2(callback1){  
//     console.log(callback1(4)); 
// }

// fun2((a)=>{
//     return a*a;
// });



/////////
// fun1   // fetching api data 
// fun2  // using printing data from fun1

// fun3   // console.log("running")


// SetTIME OUT

// const arr =[]

// function fun1(){
//     setTimeout(()=>{
//         arr.push(5)
//     },0)
// }
// console.log("~ arr", arr) 
// fun1();



/////////////////
// Destructuring

// arrays and objects

// const arr=["ram","shyam","suresh","mohan","sohan"]

// const a=arr[0];
// const b=arr[1];
// const arr2=[];
// for(let i=2;i<arr.length();i++) arr2.push(arr[i])
// const [a,b,...arr2] = arr

// console.log("a", a)
// console.log("b", b)
// console.log("arr2", arr2)

// const obj = {
//     fname: "mahesh",
//     age: 46,
//     score:9
// }


// // const fname= obj.fname;
// // const score= obj.score;
// // const age= obj.age;

// const {fname: fisrstName  ,age, score} = obj;
// // fisrstName="pavan"

// console.log(fisrstName)
// console.log(score)
// console.log(age)

// spread Operator

// const arr1=[1,2,3,4]
// const arr2=[6,7,8,9]

// const arr3 = [...arr1, 5, ...arr2]
// console.log("arr3", arr3)


var obj1 = {
    fname: "mahesh",
    age: 46,
    score:9
}
var obj2 = {
    lname: "kumar",
    houseNo: 25
}


var obj3= {
    ...obj1,...obj2
}

console.log(obj3)

// var obj1 = {
//     fname: "mahesh",
//     // age: 46,
//     score:9
// }

// const bio=({fname:firstName,age="adult"})=>{
//     console.log(`My name is ${firstName}. and I am ${age}`);
// }
// bio(obj1);


// synchronous; blocking
// asynchronous: non-blocking
// const data= readFileSync('text1.txt','utf-8')
// console.log( data)

// const fs = require('fs')
// console.log("~ fs", fs)

// const data = fs.readFile("text1.txt",'utf-8',(err,text)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(text)
//     }
// })

// const path = require('path');

// const file = __filename;
// console.log("~ file", file)
// console.log( path.dirname(file))

// const os=require('os')

// console.log(os.hostname())












