// exercise2
let firstName = "Fahmida";
let lastName = "Fami";
let yeatBirth = 2000;
let currentYear = 2025;
let age = currentYear - yeatBirth;

let message = "Hello, my name is " + firstName + " " + lastName + ". I am " + age + " years old and I'm learning javascript.";
document.getElementById("student_message").innerText = message;


// exercise3
let num1 = 101;
let num2 = 7;
let avarage = (num1 + num2)/2;
console.log(avarage.toFixed(2)); 


// console.log(result.toFixed(2)); 

// exercise4
var phone1 = 98868552;
var phone2 = 9986012356;
var phone3 = 876543123;

function isValidPhoneNumber(phone) {
      return phone.length === 10;
}
console.log(isValidPhoneNumber(phone1.toString())); // false
console.log(isValidPhoneNumber(phone2.toString())); // true
console.log(isValidPhoneNumber(phone3.toString())); // false

// exercise5
let result = (3 ** 2) + 6;
console.log("The result is: " + result);

// // exercise6
// a) var NAME;- valid 

// b) var $num1; -valid

// c) var typeof;- invalid

// d) var first-name;- invalid

// e) var attempt_2;- valid

// f) var 2ndAttempt;- invalid

// g) var full name; - invalid


// exercise7
var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity + number);
console.log(quantity - number);
console.log(pressure);
console.log(temperature);


// exercise8

let url1 = "www.udemy.com";
let transformed1 = "https://" + url1;
console.log(transformed1);  


let url2 = "https://www.google.com";
let transformed2 = url2.replace("https://", "");
console.log(transformed2);




var students = [ "John" , "Mary", "Paul" ];
students[2] = "Andrew Tout";
