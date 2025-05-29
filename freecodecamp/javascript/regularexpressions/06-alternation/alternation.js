// Match "cat" or "dog"
const text = "I have a cat and a dog.";
const regex = /cat|dog/g;

console.log(text.match(regex));


// Combine with groups and optional parts
const text1 = "color or colour?";
const regex1 = /colou?r/g;

console.log(text1.match(regex1)); 
// Output: ['color', 'colour']