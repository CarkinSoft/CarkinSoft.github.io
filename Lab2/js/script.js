const guessBtn = document.querySelector("#guessBtn");
guessBtn.addEventListener("click", guess);

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

document.querySelector("#Userguesses").textContent = "Previous Guesses: ";
document.querySelector("#guessCount").textContent = 7;
document.querySelector("#displayResponse").textContent = "";
document.querySelector("#attemptMsg").textContent = "";
document.querySelector("#userGuess").value = "";
document.querySelector("#userGuess").textContent = "1-99";

let wins = Number(document.querySelector("#gameWins").textContent);
let losses = Number(document.querySelector("#gameLosses").textContent);
let isGameOver = false;

function guess(){

    if (isGameOver) {
        return;
    }

    let userGuess = document.querySelector("#userGuess").value;
    let guessCount = document.querySelector("#guessCount").textContent;
    let guessRemaining = Number(document.querySelector("#guessCount").textContent);

    document.querySelector("#Userguesses").textContent += ` ${userGuess} `;

    if (userGuess == ""){
        document.querySelector("#displayResponse").textContent = "Please enter a valid number!";
        return;
    }
    if (userGuess == "0"){
        document.querySelector("#displayResponse").textContent = "Please enter a valid number!";
        document.querySelector("#displayResponse").style.color = "red";
        document.querySelector("#displayResponse").style.fontWeight = "bold";
        document.querySelector("#userGuess").value = "";
        return;
    }
    if (userGuess >= 100){
        document.querySelector("#displayResponse").textContent = "Please enter a valid number!";
        document.querySelector("#displayResponse").style.color = "red";
        document.querySelector("#displayResponse").style.fontWeight = "bold";
        document.querySelector("#userGuess").value = "";
        return;
    }

    if (guessRemaining <= 0){
        losses += 1;
        document.querySelector("#gameLosses").textContent = losses;
        isGameOver = true;
        document.querySelector("#guessBtn").textContent = "Play Again";
        guessBtn.removeEventListener("click", guess);
        guessBtn.addEventListener("click", resetGame);
        document.querySelector("#displayResponse").textContent = "Game Over!";
        document.querySelector("#displayResponse").style.color = "red";
        document.querySelector("#displayResponse").style.fontWeight = "bold";
        document.querySelector("#displayResponse").style.fontSize = "20px";
        return;
    }

    if (userGuess == randomNumber){
        document.querySelector("#displayResponse").textContent = "You guessed it!";
        document.querySelector("#displayResponse").style.color = "green";
        document.querySelector("#displayResponse").style.fontWeight = "bold";
        document.querySelector("#displayResponse").style.fontSize = "20px";

        if (guessRemaining <= 7) {
            document.querySelector("#attemptMsg").textContent = "You got it in ${guessCount} guesses. Congratulations!!!";
        }
        else {
            document.querySelector("#attemptMsg").textContent = "You got it in ${guessCount} guesses";
        }

        wins += 1;
        document.querySelector("#gameWins").textContent = wins;
        isGameOver = true;
        document.querySelector("#guessBtn").textContent = "Play Again";
        guessBtn.removeEventListener("click", guess);
        guessBtn.addEventListener("click", resetGame);
        return;
    }
    else if (userGuess > randomNumber){
        document.querySelector("#displayResponse").textContent = "Too high!";
        document.querySelector("#displayResponse").style.color = "red";
        document.querySelector("#displayResponse").style.fontWeight = "bold";
        document.querySelector("#displayResponse").style.fontSize = "20px";
    }
    else if (userGuess < randomNumber){
        document.querySelector("#displayResponse").textContent = "Too low!";
        document.querySelector("#displayResponse").style.color = "blue";
        document.querySelector("#displayResponse").style.fontWeight = "bold";
        document.querySelector("#displayResponse").style.fontSize = "20px";
    }
    else{
        document.querySelector("#displayResponse").textContent = "Invalid input!";
        document.querySelector("#displayResponse").style.color = "darkred";
        document.querySelector("#displayResponse").style.fontWeight = "underline";
        document.querySelector("#displayResponse").style.fontSize = "20px";
    }

    guessRemaining -= 1;
    document.querySelector("#guessCount").textContent = guessRemaining;
    document.querySelector("#userGuess").value = "";

    if (guessRemaining <= 0) {
        losses += 1;
        document.querySelector("#gameLosses").textContent = losses;
        isGameOver = true;
        document.querySelector("#guessBtn").textContent = "Play Again";
        guessBtn.removeEventListener("click", guess);
        guessBtn.addEventListener("click", resetGame);
        document.querySelector("#displayResponse").textContent = "Game Over!";
        document.querySelector("#displayResponse").style.color = "red";
        document.querySelector("#displayResponse").style.fontWeight = "bold";
        document.querySelector("#displayResponse").style.fontSize = "20px";
        document.querySelector("#Userguesses").textContent = "The Number Was: " + randomNumber;
    }
    return;
}

function resetGame(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    isGameOver = false;

    document.querySelector("#Userguesses").textContent = "Previous Guesses: ";
    document.querySelector("#guessCount").textContent = 7;
    document.querySelector("#displayResponse").textContent = "";
    document.querySelector("#attemptMsg").textContent = "";
    document.querySelector("#userGuess").value = "";
    document.querySelector("#userGuess").textContent = "1-99";

    document.querySelector("#guessBtn").textContent = "Submit Guess";
    guessBtn.removeEventListener("click", resetGame);
    guessBtn.addEventListener("click", guess);
}