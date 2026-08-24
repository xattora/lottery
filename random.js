let labelNumber = document.getElementById("labelNum");
let resetButton = document.getElementById("resBut");
let rollButton = document.getElementById("rollBut");
let yourNumber = document.getElementById("yourNum");
let resultNumber = document.getElementById("result");

let earnedBalance = document.getElementById("earnedBal")
let currentBalance = 0
let currentBalanceText = document.getElementById("currentBal");
let inputButton = document.getElementById("inputBut")


inputButton.onclick = function(){
    
    let inputBalance = Number(document.getElementById("inputBal").value);
   
    currentBalance += inputBalance
    currentBalanceText.textContent = `$${currentBalance}`   
}


rollButton.onclick = function(){
    if (currentBalance <= 0) {
        window.alert("You have no balance");
        return;
    }
   
    let inputNumber = Number(document.getElementById("inputNum").value);
     if (inputNumber <= 0) {
        window.alert("You have not entered your lucky number");
        return;
    }
    yourNumber.textContent = inputNumber; 

    let betNumber = Number(document.getElementById("betNumber").value);
    let randomNumber = Math.ceil(Math.random() * 20);
    labelNumber.textContent = randomNumber; 

    let winnings = betNumber * 16;
   
    
    if (randomNumber == inputNumber) {
        currentBalanceText.textContent = `$${currentBalance += winnings - betNumber}`
        resultNumber.textContent = `Congratulations! You win the game and get $${winnings}`
        earnedBalance.textContent = `$${winnings}`
    } else {
        currentBalanceText.textContent = `$${currentBalance -= betNumber}`
        resultNumber.textContent = `You lose the game and the money`
    }
    console.log(earnedBalance)
}

resetButton.onclick = function(){
    inputBalance = document.getElementById("inputBal").value = "";
    currentBalanceText.textContent = "$0"
    currentBalance = 0
    labelNumber.textContent = 0;
    document.getElementById("inputNum").value = "";
    document.getElementById("betNumber").value = "";
    resultNumber.textContent = "Start The Game Again";
    yourNumber.textContent = "";
}
