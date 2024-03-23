#! /usr/bin/env node
 import inquirer from "inquirer";

// 1) computer  will generate a random number

// 2)user input for guessing number

// 3)compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.floor(Math.random()* 6+1));
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message : "Please guess a number 1-6",
    },
]);

// conditional statement
if(answers.userGuessedNumber === "randomNumber"){
    console.log("congtratulations! you guessed right number")
} else {
    console.log("you guessed wrong number")
}