// var variable
var msg; /* declaration */
msg="hello";  /* assigning */
console.log(msg)

var msg="hello" /* assigning + declaration= intialization */
console.log(msg)  

var msg="hello";
msg="hi";      /* reassigning */
console.log(msg)

var msg="hello";
var msg="hi";      /* redeclaration */
console.log(msg)

console.log(msg)
var msg="hello js" //hoisting

//let variable
let variable 
let msg; 
msg="hello"; 
console.log(msg)

let msg="hi";  /* declaration + assigning = intialization */
console.log(msg)

let msg="hello";
msg="hi";            /* reassigning */
console.log(msg)

let msg="hello";
let msg="hi";      /* doesn't support redeclaration */
console.log(msg)

console.log(msg)
let msg="hello js" /* doesn't supports hoisting */

//const variable
// const msg;
// msg="hello"; /* we can't declare and assign in multiple lines*/
// console.log(msg)

const msg="hello";
console.log(msg)   /* #declare and assigning the variable should be in one line*/

const message="hello";
message="hi";           /* doesn't support reassigning */
console.log(message)

// const data="hello";
// const data="hi";    /* doesn't support reassigning */
// console.log(data)

console.log(hoisting)
const hoisting="hi";    /* doesn't support hoisting */  