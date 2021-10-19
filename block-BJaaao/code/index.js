// Using alert, prompt, confirm and console

/*

1. Do the following using `alert` function. When you find any square bracket
 replace that to the value of the variable.

*/

let num1 = 21;
let num2 = 32;

/*
- Create a variable named `language` and store the value of `JavaScript` in it
- Alert message saying `I am learning [language]`
- Alert `The value of num1 is [num1] and the value of num2 is [num2]`
- Alert `The sum of [num1] and [num2] is [num1 + num1]`
*/
let language = "Javascript";
alert(`I am learning ${language}`);
alert(num1 + num2);

/*
2. Do the following using `alert`, `prompt` and `confirm` and `console`

  - Using prompt accept the name of the user and store it a variable names `userName`
  - Using prompt accept the profession of the user and store it a variable names`userProfession`
  - Using confirm check if user is adult or not and store the value in `isAdult`
  - Alert message `I am [userName] a [userProfession]`
  - Log the message `I am [userName] a [userProfession]`
  - Alet message `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
  - Log the message using console.log `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
*/

let userName = prompt("what is your Name?");
let userProfession = prompt("what is your Profession?");
let isAdult = confirm("Are you an Adult?");

alert(`I am ${userName} a ${userProfession}`);
alert(`username:${userName}`);
alert(`adult:${isAdult}`);
alert(`profession:${userProfession}`);

console.log(userName);
console.log(userProfession);
console.log(isAdult);

/*
. Addition using prompt

  - Accept two number values form user and store them in `numA` and`numB`.
  - Alert the sum of both numbers. [numA + numB]
  - Alert [numA - numB]
  - Alert [numA * numB]
  - Log using console.log [numA - numB]
  - Log using console.log [numA * numB]
*/
let numA = Number(prompt("Enter a first Number"));
let numB = Number(prompt("Enter a second Number"));

const add = numA + numB;
const sub = numA - numB;
const mul = numA * numB;

alert(add);
alert(sub);
alert(mul);
console.log(sub);
console.log(mul);
