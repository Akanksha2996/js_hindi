let score = "33aaaaaa"
console.log(typeof score);
console.log(typeof (score));

// Number se number ko string and string ko number mai badal skta h 
// "33" =33
// "33abc" = NaN
// TRUE = 1; FALSE = 0

// string  ko Number mai convert
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// string  ko Boolean mai convert
let booleanNumber = "akak"
let booNo = Boolean(booleanNumber)
console.log(booNo);

// 1 = true; 0 = false
// "" =  false 
// "aaku" = true

// number ko string mai convert
let someString = 55
let othervalue = String(someString)
console.log(othervalue);
console.log(typeof othervalue);
