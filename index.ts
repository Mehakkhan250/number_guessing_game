`#! /usr/bin/env node6`
import inquirer from "inquirer";

console.log(`Welcome to Interesting Number Guessing Game`);

let secretNumber = Math.floor(Math.random() * 10 + 1)
 
let myLoop = true;
let attemps = 1

while(myLoop){

    let userInput = await inquirer.prompt({
        type: `number`,
        name: `userNum`,
        message: `Enter your number!`
    });

    let {userNum} = userInput;
    console.log(`\nYour attemped No ${attemps}`);

    if(userNum === secretNumber) wonMath();
    if(userNum > secretNumber) greaterNum();
    if(userNum < secretNumber) lessNum();

function wonMath(){
    console.log(`Congratulations!your guessed number ${userNum} is correct`);
    console.log(`\nYou have attempted ${attemps} time to guess the right number!`);

    myLoop = false;
}
function greaterNum(){
    console.log(`\nYour guessed number is greater than actual number... `);
    attemps++
}
function lessNum(){
    console.log(`\nYour guessed number is less than actual number...`);
    attemps++
    }
}
