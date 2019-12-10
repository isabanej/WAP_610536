let nickyname = 'emino';
console.log(nickyname);

// we can not have these in our js code
//Should be meaningful don't use like these variables x, b
// cannot start with a number (1name)
// Cannot contain a space or hyphen(-)
//Are case-sensitive

let firstName = 'Josh';
let lastName = 'Munezero';

console.log(firstName + ' ' + lastName);

// we cannot use const i.e, const interestRate = 0.3;
//we use let
let interestRate = 0.3;
interestRate =2;
console.log(interestRate)


//Boolean
let name = 'ISABANE';// String Literal
let age = 25;//Number Literal
let isApproved = false; // Boolean Literal
let firstNameUnd = undefined; // Undefined variable assign
let selectedColor = null;// selectedColor is now an object

//One thing separate js from others languages
//Java Script is a Dynamic Language
//Let see object when we say object think about an object ex: persons - persons has names, address, age encodeURI.apply.
let person ={
    name: 'ISABANE',
    age: 25
}
console.log(person)
//Dot Notation 
person.name='Josh';
//Bracket Notation
person['name'] = 'Jean';
// u can dicide which one to use between Dot and Bracket Notation
console.log(person.name)


//


let selectedColors = ['red','blue'];
console.log(selectedColors[1] +' '+selectedColors[0] )

//we can add another index like
//arrays are dynamic it can change and expand automatically

selectedColors[2] = 'green';
console.log(selectedColors[2])

//array is object in javascript
//we can access array properties using dot notation
//let see
console.log(selectedColors.length)


//Functions

function greet(){
    console.log('Hello world');
    }
//we can call our function
greet();

//let say hello Emino
//pass parameter ex:(name)
//This function is performing a task
function greetEm(name,lastname,firstName){
console.log('hello'+ ' ' + name+' '+lastName+' '+firstName);
}
//by passing argurment ex:(Emino)
greetEm('Emino','Janvier','Isabane');
greetEm('Josh','Josue','Munezero');
greetEm('Mikiki','Marcel','Gashema');

// let's see Calculating a value
function square(number){
    return number * number;
}
square(2) // or 
let number  = square(2) 
console.log(number)// or
console.log(square(2))

// Error loading File
// 'use strict';
function gogogo(){
let script = document.createElement('script');
script.src = "./Buggy Page #1_files/bugyy1.js.download"; // no such script
document.head.append(script);

script.onerror = function() {
  alert("Error loading " + this.src); // Error loading ./Buggy Page #1_files/bugyy1.js.download
};
}
console.log(gogogo())

//Catch error on your page
window.onerror = function(message, url, line, col, errorObj) {
    alert(`${message}\n${url}, ${line}:${col}`); // or 
    console.log(message)
  };