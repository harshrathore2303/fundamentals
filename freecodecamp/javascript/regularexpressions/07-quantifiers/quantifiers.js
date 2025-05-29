// + (One or more)
const text = "lo loo looo";
const regex = /lo+/g;
console.log(text.match(regex)); 
// Output: ['lo', 'loo', 'looo']

// {2,3} (Between 2 and 3 times)

const text1 = "lo loo looo loooo";
const regex1 = /o{2,3}/g;
console.log(text1.match(regex1)); 
// Output: ['oo', 'ooo', 'ooo']

// Combine with groups and optional parts
const text2 = "color or colour?";
const regex2 = /colou?r/g;

console.log(text2.match(regex2)); 
// Output: ['color', 'colour']