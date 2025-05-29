const regExpStr = "A1b2C3";
const result = regExpStr.match(/[a-zA-Z0-9]/g); //for matching all
console.log(result); // ['A', '1', 'b', '2', 'C', '3']
