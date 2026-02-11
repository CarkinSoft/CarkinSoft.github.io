const mosquito = document.querySelector("#mosquito");
const message = document.querySelector("#message");
let attempts = 0;

//event listeners
document.addEventListener("click", onDocClick);
mosquito.addEventListener("click", gameOver);

//clicking on any place within the document
function onDocClick(event) {
  if (event.target.id != "#mosquito") { //didn't hit the mosquito
	attempts++;
  }
  if (attempts == 3) {
	gameOver();
  }
}

//moves mosquito to a random position
function moveMosquito() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  mosquito.style.left = x + "px";
  mosquito.style.top = y + "px";
}

function gameOver() {
  if (attempts == 3) {
	message.textContent = "You lost!";
	mosquito.textContent = '😂';  // mosquito laughs at you
  } else {
	message.textContent = "Splat! You got it!";
	mosquito.textContent = '☠️';  // dead mosquito
  }
  clearInterval(moveInterval); // stop moving
}

// Move mosquito every second
const moveInterval = setInterval(moveMosquito, 1000);

moveMosquito(); // initial position
