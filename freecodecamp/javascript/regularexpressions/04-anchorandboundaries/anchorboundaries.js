/* Anchor */

const regExpLiteral = /^cat/;
console.log(regExpLiteral.test('cat and mouse')); //true
console.log(regExpLiteral.test('The cat and mouse')); //false

const newregExpLiteral = /cat$/
console.log(newregExpLiteral.test('The mouse and the cat')); //true
console.log(newregExpLiteral.test('The cat and mouse')); //false

/* Word Boundaries */

// Syntax 1: /\b.../
// Match words that START with "code"
const regexPattern1 = /\bcode/gi;

const text1 = 'codec coder code decode';

console.log(text1.match(regexPattern1)); 
// Output: ['code', 'coder']
// Explanation: Matches words that start with "code" — excludes "decode"

// Syntax 2: /...\b/
// Match words that END with "code"
const regexPattern2 = /code\b/gi;

const text2 = 'codec coder code decode';

console.log(text2.match(regexPattern2)); 
// Output: ['code', 'decode']
// Explanation: Matches words ending with "code" — excludes "coder"

// Syntax 3: /\b...\b/
// Match the EXACT word "code"
const regexPattern3 = /\bcode\b/gi;

const text3 = 'codec coder code decode';

console.log(text3.match(regexPattern3)); 
// Output: ['code']
// Explanation: Matches only the standalone word "code"

