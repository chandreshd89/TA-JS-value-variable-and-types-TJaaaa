// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = +prompt("Add a number");
if (num % 2 === 0) {
  alert(`num is even`);
} else {
  alert(`num is odd`);
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA = +prompt("Add first number");
let numB = +prompt("Add second number");

if (numA > numB) {
  alert(`${numA} max`);
} else if (numA < numB) {
  alert(`${numB} max`);
}

// 3. Convert the above code using`?` terniary operator
numA > numB ? alert(`${numA} max`) : alert(`${numB} max`);
/*

4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("Enter your House name,stark or lannister");

if (houseName === "stark") {
  alert(" Winter is coming");
} else if (houseName === "lannister") {
  alert(" A lannister always pays his debt");
} else {
  alert(" All men must die");
}

// 5. Convert the above code using`?` terniary operator
houseName === "stark"
  ? alert(" Winter is coming")
  : houseName === "lannister"
  ? alert(" A lannister always pays his debt")
  : alert(" All men must die");

// Switch

switch (true) {
  case houseName === "stark":
    alert(" Winter is coming");
    break;
  case houseName === "lannister":
    alert(" A lannister always pays his debt");
    break;
  default:
    alert(" All men must die");
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = +prompt("Enter a Month");
switch (month) {
  case 1:
    alert("January");
    break;
  case 2:
    alert("February");
    break;
  case 3:
    alert("March");
    break;
  case 4:
    alert("April");
    break;
  case 5:
    alert("May");
    break;
  case 6:
    alert("June");
    break;
  case 7:
    alert("July");
    break;
  case 8:
    alert("August");
    break;
  case 9:
    alert("September");
    break;
  case 10:
    alert("October");
    break;
  case 11:
    alert("November");
    break;
  case 12:
    alert("December");
    break;
  default:
    alert("invalid");
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000`tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = prompt("what is your salary?");

if (salary <= 20000) {
  alert(salary - (salary * 10) / 100);
} else if (salary <= 40000) {
  alert(salary - (salary * 20) / 100);
} else if (salary >= 50000) {
  alert(salary - (salary * 30) / 100);
} else {
  alert("invalid input");
}

//  if..else vs switch

switch (true) {
  case salary <= 20000:
    alert(salary - (salary * 10) / 100);
    break;
  case salary <= 40000:
    alert(salary - (salary * 20) / 100);
    break;
  case salary >= 50000:
    alert(salary - (salary * 30) / 100);
    break;
  default:
    alert("invalid input");
}

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = prompt("Enter your marks");

if (marks > 100) {
  alert("Marks can't be greater than 100");
} else if (marks > 80 && marks <= 100) {
  alert("Grade A");
} else if (marks > 50 && marks <= 80) {
  alert("Grade B");
} else if (marks > 30 && marks <= 50) {
  alert("Grade c");
} else if (marks >= 0) {
  alert("Grade D");
} else {
  alert("invalid");
}

switch (true) {
  case marks > 100:
    alert("Marks can't be greater than 100");
    break;
  case marks > 80 && marks <= 100:
    alert("Grade A");
    break;
  case marks > 50 && marks <= 80:
    alert("Grade B");
    break;
  case marks > 30 && marks <= 50:
    alert("Grade c");
    break;
  case marks >= 0:
    alert("Grade D");
    break;
  default:
    alert("invalid");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt(`What is the weather like outside?`);

if (weather === "sunny") {
  alert(`Wear a T-shirt`);
} else if (weather === "rainy") {
  alert(`Don't forget to take your raincoat`);
} else if (weather === "hot") {
  alert(`Get a hanky`);
} else if (weather === "freezing") {
  alert(`Get your sweeter on`);
} else {
  alert(`Not a valid input`);
}

switch (true) {
  case weather === "sunny":
    alert(`Wear a T-shirt`);
    break;
  case weather === "rainy":
    alert(`Don't forget to take your raincoat`);
    break;
  case weather === "hot":
    alert(`Get a hanky`);
    break;
  case weather === "freezing":
    alert(`Get your sweeter on`);
    break;
  default:
    alert(`Not a valid input`);
}
