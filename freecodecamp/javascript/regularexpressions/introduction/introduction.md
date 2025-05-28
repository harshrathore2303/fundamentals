# Regular expressions
A regular expression allows a us to match a string pattern.
for example: email, password etc.
With regular expressions, you can do things like find and replace text, verify that input data follows the format required, and and other similar things.
## We can use regex for more matching 
- A set of characters that can be used in the language, called the alphabet.
- Concatenation: ab means "the character a followed by the character b".
- Union: a|b means "either a or b".
- Kleene star: a* means "zero or more a characters".

We can do matching without regrex as well but it requires unneccessary logic and consume time as well.

# Creation
We can create regex in two ways-
- Using a regular expression literal  
const expression = /Harshit#123/;

- Using contructor  
const expression = new RegExp("Harshit#123"); //new RegExp(pattern [, flags])
