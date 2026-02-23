// Slot machine state (customize starting balance)
let balance = 100;

// Available symbols (customize labels here)
const SYMBOLS = ["BAR", "7️⃣", "🍒"];

// Payout multipliers (customize multipliers here)
const MULTIPLIERS = { "BAR": 3, "🍒": 10, "7️⃣": 100 };

// UI
const wrapEl = document.getElementById("wrap");
const balanceEl = document.getElementById("balance");
const betEl = document.getElementById("bet");
const spinBtn = document.getElementById("spinBtn");
const messageEl = document.getElementById("message");
const resultTitleEl = document.getElementById("resultTitle");
const resultSubtitleEl = document.getElementById("resultSubtitle");
const outcomeGifEl = document.getElementById("outcomeGif");

const reels = [
    document.getElementById("reel1"),
    document.getElementById("reel2"),
    document.getElementById("reel3")
];

const LOSE_GIF_URL = "https://c.tenor.com/M6WgkbXFHjwAAAAC/tenor.gif";
const WIN_GIF_URL = "https://media.tenor.com/4OYd5OlYR9wAAAAM/gamba-xqc.gif";

// updates the current balance and disables spin if they run out
function render() {
    balanceEl.textContent = String(balance);
    spinBtn.disabled = balance <= 0;
}

// Shows a message to the player
function setMessage(text) {
    messageEl.textContent = text;
}

function setResult(title, subtitle) {
    resultTitleEl.textContent = title;
    resultSubtitleEl.textContent = subtitle;
}

function showOutcomeGif(url) {
    if (!outcomeGifEl) return;
    outcomeGifEl.src = url;
    outcomeGifEl.style.display = "block";
}

function hideOutcomeGif() {
    if (!outcomeGifEl) return;
    outcomeGifEl.style.display = "none";
    outcomeGifEl.removeAttribute("src");
}

// Returns a random symbol from SYMBOLS
function randomSymbol() {
    const index = Math.floor(Math.random() * SYMBOLS.length);
    return SYMBOLS[index];
}

// Checks if all three reels match
function isJackpot(a, b, c) {
    return a === b && b === c;
}

// Reads and validates the bet amount
function getBet() {
    const bet = Number(betEl.value);

    if (!Number.isFinite(bet) || bet <= 0) return null;
    if (!Number.isInteger(bet)) return null;

    return bet;
}

// Updates the page style based on win/lose state
function setOutcomeStyle(outcome) {
    wrapEl.classList.remove("win", "lose");
    if (outcome === "win") wrapEl.classList.add("win");
    if (outcome === "lose") wrapEl.classList.add("lose");
}

// Runs a single spin
function spin() {
    hideOutcomeGif();

    const bet = getBet();
    if (bet === null) {
        setOutcomeStyle("lose");
        setResult("Invalid Bet", "Enter a whole number (1 or more).");
        setMessage("Enter a whole-number bet (1 or more).");
        showOutcomeGif(LOSE_GIF_URL);
        return;
    }

    if (bet > balance) {
        setOutcomeStyle("lose");
        setResult("Not Enough Balance", "Lower your bet or restart.");
        setMessage("Bet is higher than your balance.");
        showOutcomeGif(LOSE_GIF_URL);
        return;
    }

    balance -= bet;

    const results = [randomSymbol(), randomSymbol(), randomSymbol()];

    for (let i = 0; i < reels.length; i++) {
        reels[i].textContent = results[i];
    }

    const [s1, s2, s3] = results;

    if (isJackpot(s1, s2, s3)) {
        const multiplier = MULTIPLIERS[s1] ?? 2;
        const winnings = bet * multiplier;
        balance += winnings;

        setOutcomeStyle("win");
        setResult("JACKPOT!", `Matched 3 ${s1}  |  Payout ×${multiplier}  |  Won $${winnings}`);
        setMessage(`JACKPOT! Matched 3 ${s1}. You won $${winnings} (bet × ${multiplier}).`);
        showOutcomeGif(WIN_GIF_URL);
    } else {
        setOutcomeStyle("lose");
        setResult("No Match", `Lost $${bet}. Spin again.`);
        setMessage(`No match. You lost $${bet}. Try again.`);
        showOutcomeGif(LOSE_GIF_URL);
    }

    if (balance <= 0) {
        setOutcomeStyle("lose");
        setResult("Out of Balance", "Refresh to keep playing.");
        setMessage("You are out of balance. Refresh to keep playing.");
        showOutcomeGif(LOSE_GIF_URL);
    }

    render();
}

// Event listeners
spinBtn.addEventListener("click", spin);
betEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") spin();
});

// Initial paint
render();
setOutcomeStyle("");
setResult("Starting Balance: $100", "Win it big, Or lose the house... Which will it be?");
setMessage("Set your bet and press Spin.");
hideOutcomeGif();