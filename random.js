let labelNumber = document.getElementById("labelNum");
let resetButton = document.getElementById("resBut");
let rollButton = document.getElementById("rollBut");
let yourNumber = document.getElementById("yourNum");
let resultNumber = document.getElementById("result");

rollButton.onclick = function(){
    let inputNumber = Number(document.getElementById("inputNum").value);
    let betNumber = Number(document.getElementById("betNumber").value);
    let winnings = betNumber * 60;
    
    yourNumber.textContent = inputNumber;    
    let randomNumber = Math.ceil(Math.random() * 100);
    labelNumber.textContent = randomNumber; 
    
    if (randomNumber == inputNumber) {
        resultNumber.textContent = `You Win The Game and Get $${winnings}`
    } else {
        resultNumber.textContent = `You Lose The Game and Lose The Money`
    }
}

resetButton.onclick = function(){
    labelNumber.textContent = 0;
    document.getElementById("inputNum").value = "";
    document.getElementById("betNumber").value = "";
    resultNumber.textContent = "Start The Game Again";
    yourNumber.textContent = "";
}