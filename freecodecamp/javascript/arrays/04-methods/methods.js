const arr = [3, 54, 44, 63, 98, -1];
const str = "The quick brown fox jumps over the lazy dog";


// join
// string does not support join
console.log(arr.join())
console.log(arr.join("#"))


// split(separator, limit), limit is optional
// array doesnot support split 
console.log(str.split());   // [ 'The quick brown fox jumps over the lazy dog' ]
console.log(str.split(" "));    // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// findIndex(callback)
console.log(arr.findIndex((num) => num < 10)) // return index 5
console.log(arr.findIndex((num) => num < -10)) // return index -1
