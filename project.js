//--Walkthrough--
// 1. Deposit
// 2. Determine number of betting lines
// 3. Collect bet amount
// 4. Spin slot machine
// 6. User bet outcome
// 7. Play again...or no more money broke ahh will never win a gajillion

// function deposit(){
//     return 1
// }

// const x = deposit();    if we return 1 here, x is one because that is what the deposit call returns. quick functions brush up


const prompt = require("prompt-sync")(); //input getter for JS from installed package

//ES6 Arrow function, same thing as above
//get user input
const deposit = () => {
    let depositAmount = prompt("Enter deposit amount: ")
    let intDepositAmt = parseFloat(depositAmount);
};

deposit();