const obj = {
    name: "Harshit",
    age: 21
}

const json = JSON.stringify(obj); // JSON.stringify() is used to convert object to json data.
console.log(json)

console.log(JSON.parse(json)); //JSON.parse() is used to convert json data to object.

