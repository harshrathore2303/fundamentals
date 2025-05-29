const regExpLiteral = /Hello/gi; //'i' is used to ignore the case-sensitive. 'g' for global search. Use of 'g' can be seen in exec and match.
const regExpStr = 'Hello world! hello there';

console.log(regExpLiteral.test(regExpStr)) //returns true because regExpStr has Hello.
console.log(regExpLiteral.exec(regExpStr));
console.log(regExpStr.match(regExpLiteral));
console.log(regExpStr.search(regExpLiteral)); //returns first match string index
console.log(regExpStr.replace(regExpLiteral, "Namaste")); //here "Namaste" replace all "/Hello/i" because 'g' flag is used.
