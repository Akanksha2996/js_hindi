// primitive datatypes 7 cataegories
// 7 types : string , Number, Boolean, null, undefined , Symbol, BigInt,  
// javscript  dynamically typed h

const score = 110
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail;

// table mai sari valure print ki
console.table([score, scoreValue, isLoggedIn, outsideTemp, useremail])
console.table([typeof score,typeof scoreValue,typeof isLoggedIn,typeof outsideTemp, typeof useremail]);

// Number ko string mai convert kiya
let numberScore = String(score);
console.log(numberScore);
console.log(typeof numberScore);

// symbol ko bale same value do vo same output nhi deta h
const id = Symbol("123")
const anotherid = Symbol("123")
 console.log(id === anotherid);


//  Big number

const bigInt = 1234567896555444444444444444n

// Reference (Non Primitive)
// Array, Objects, functions

// Array
const heros = ["shaktiman", "nagraj", "doga"];
console.log(heros[2]);

//  objects 
let myobj = {
    name:"Akanksha",
    age:22,
}
console.log(myobj);

//  functions
const prinCall =  function(){
    console.log("Hello Akanksha baby");
}
prinCall()

function myfun(a,b) {
 let c= a+b;
 return c;
}
const result = myfun(5,88)
console.log(result);
