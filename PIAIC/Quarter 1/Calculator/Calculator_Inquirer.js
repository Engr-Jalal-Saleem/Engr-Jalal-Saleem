"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
function main() {
    inquirer_1.default
        .prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter first number",
        },
        {
            type: "input",
            name: "num2",
            message: "Enter second number",
        },
        {
            type: "list",
            choices: ["+", "-", "*", "/"],
            name: "Operation",
            message: "Enter Operation",
        }
        /* Pass your questions in here */
    ])
        .then(function (answers) {
        console.log(answers);
        // Use user feedback for... whatever!!
    })
        .catch(function (error) {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
        else {
            // Something else went wrong
        }
    });
    // let num1: number = 5;
    // let num2: number = 8;
    // let operation: string = "+";
    // if (operation == "+") {
    //   sum(num1, num2);
    // } else if (operation == "-") {
    //   subract(num1, num2);
    // } else if (operation == "*") {
    //   multlyply(num1, num2);
    // } else if (operation == "/") {
    //   division(num1, num2);
    // } else {
    //   console.log("Invalid Operation");
    // }
}
function sum(num1, num2) {
    var result = num1 + num2;
    console.log("Sum:", result);
}
function subract(num1, num2) {
    var result = num1 - num2;
    console.log("Substraction", result);
}
function multlyply(num1, num2) {
    var result = num1 * num2;
    console.log("Multiplication:", result);
}
function division(num1, num2) {
    var result = num1 / num2;
    console.log("DIvision:", result);
}
main();
