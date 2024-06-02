"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
`#! /usr/bin/env node6`;
const inquirer_1 = __importDefault(require("inquirer"));
console.log(`Welcome to Interesting Number Guessing Game`);
let secretNumber = Math.floor(Math.random() * 10 + 1);
let myLoop = true;
let attemps = 1;
while (myLoop) {
    let userInput = await inquirer_1.default.prompt({
        type: `number`,
        name: `userNum`,
        message: `Enter your number!`
    });
    let { userNum } = userInput;
    console.log(`\nYour attemped No ${attemps}`);
    if (userNum === secretNumber)
        wonMath();
    if (userNum > secretNumber)
        greaterNum();
    if (userNum < secretNumber)
        lessNum();
    function wonMath() {
        console.log(`Congratulations!your guessed number ${userNum} is correct`);
        console.log(`\nYou have attempted ${attemps} time to guess the right number!`);
        myLoop = false;
    }
    function greaterNum() {
        console.log(`\nYour guessed number is greater than actual number... `);
        attemps++;
    }
    function lessNum() {
        console.log(`\nYour guessed number is less than actual number...`);
        attemps++;
    }
}
