#! /usr/bin/env node

import inquirer from "inquirer"

// 1) Computer will generate a random number - Done.

// 2) User input for guessing number - Done.

// 3) compare your input with computer generated number and show result


const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome To My Number Guessing Game")

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6 ",
    }
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulation You Guessed Right Number.")
}else{
    console.log("You Guessed Wrong Number")
}
