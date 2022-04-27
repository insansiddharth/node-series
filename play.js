const obj = {
    name:"rohan",
    age:6
}

console.log(obj)
const jsonObj=JSON.stringify(obj)
console.log(jsonObj)
const obj2 = JSON.parse(jsonObj)
console.log("~ obj2", obj2)