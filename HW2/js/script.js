// Check and X image sources
const CHECK_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/960px-Eo_circle_green_checkmark.svg.png";
const X_IMG = "https://www.freeiconspng.com/thumbs/x-png/x-png-15.png";

let score = 0;
let attempts = parseInt(localStorage.getItem("total_attempts") || "0", 10);

document.addEventListener("DOMContentLoaded", () => {
    displayQ4Choices();
    updateAttemptsText();

    document.querySelector("#submitBtn").addEventListener("click", gradeQuiz);
});

function displayQ4Choices() {
    const q4Choices = ["Maine", "Rhode Island", "Maryland", "Delaware"];
    shuffleArray(q4Choices);

    const box = document.querySelector("#q4Choices");
    box.innerHTML = "";

    for (let i = 0; i < q4Choices.length; i++) {
        const state = q4Choices[i];
        const id = state.toLowerCase().replaceAll(" ", "_");

        box.innerHTML += `
      <div class="choice-item">
        <input type="radio" name="q4" id="${id}" value="${state}">
        <label for="${id}">${state}</label>
      </div>
    `;
    }
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

function isFormValid() {
    const v = document.querySelector("#validationFdbk");
    v.className = "my-3";
    v.innerHTML = "";

    const q1 = document.querySelector("#q1").value.trim();
    const q2 = document.querySelector("#q2").value;
    const q4Checked = document.querySelector("input[name=q4]:checked");
    const q5 = document.querySelector("#q5").value.trim();

    if (q1 === "") {
        v.classList.add("text-danger", "fw-bold");
        v.innerHTML = "Please answer question 1.";
        return false;
    }
    if (q2 === "") {
        v.classList.add("text-danger", "fw-bold");
        v.innerHTML = "Please choose an answer for question 2.";
        return false;
    }
    if (!q4Checked) {
        v.classList.add("text-danger", "fw-bold");
        v.innerHTML = "Please pick an answer for question 4.";
        return false;
    }
    if (q5 === "") {
        v.classList.add("text-danger", "fw-bold");
        v.innerHTML = "Please answer question 5.";
        return false;
    }

    return true;
}

function rightAnswer(index, msg) {
    document.querySelector(`#q${index}Feedback`).className = "feedback correct";
    document.querySelector(`#q${index}Feedback`).textContent = msg || "Correct";
    document.querySelector(`#markImg${index}`).innerHTML = `<img class="mark-img" src="${CHECK_IMG}" alt="correct">`;
    score += 20;
}

function wrongAnswer(index, msg) {
    document.querySelector(`#q${index}Feedback`).className = "feedback wrong";
    document.querySelector(`#q${index}Feedback`).textContent = msg || "Incorrect";
    document.querySelector(`#markImg${index}`).innerHTML = `<img class="mark-img" src="${X_IMG}" alt="incorrect">`;
}

function gradeQuiz() {
    // reset score each submit
    score = 0;
    document.querySelector("#congratsMsg").textContent = "";

    if (!isFormValid()) return;

    // Q1 (text)
    const q1Response = document.querySelector("#q1").value.trim().toLowerCase();
    if (q1Response === "sacramento") {
        rightAnswer(1);
    } else {
        wrongAnswer(1, "Incorrect (Answer: Sacramento)");
    }

    // Q2 (dropdown)
    const q2Response = document.querySelector("#q2").value;
    if (q2Response === "Alaska") {
        rightAnswer(2);
    } else {
        wrongAnswer(2, "Incorrect (Answer: Alaska)");
    }

    // Q3 (checkboxes)
    const correctIds = ["Washington", "Jefferson", "Lincoln", "Roosevelt"];
    const wrongIds = ["Franklin", "Jackson"];

    const allCorrectChecked = correctIds.every(id => document.querySelector(`#${id}`).checked);
    const noWrongChecked = wrongIds.every(id => !document.querySelector(`#${id}`).checked);

    if (allCorrectChecked && noWrongChecked) {
        rightAnswer(3);
    } else {
        wrongAnswer(3, "Incorrect (must select ONLY the 4 presidents on Mount Rushmore)");
    }

    // Q4 (radio)
    const q4Response = document.querySelector("input[name=q4]:checked").value;
    if (q4Response === "Rhode Island") {
        rightAnswer(4);
    } else {
        wrongAnswer(4, "Incorrect (Answer: Rhode Island)");
    }

    // Q5 (number)
    const q5Response = parseInt(document.querySelector("#q5").value, 10);
    if (q5Response === 50) {
        rightAnswer(5);
    } else {
        wrongAnswer(5, "Incorrect (Answer: 50)");
    }

    // total score + color rule
    const totalScoreDiv = document.querySelector("#totalScore");
    totalScoreDiv.textContent = `Total Score: ${score}/100`;
    totalScoreDiv.className = "score-box " + (score >= 80 ? "score-good" : "score-bad");

    // congratulatory message if above 80
    if (score > 80) {
        document.querySelector("#congratsMsg").textContent = "Nice job! You scored above 80!";
    }

//     // attempts
//     attempts += 1;
//     localStorage.setItem("total_attempts", String(attempts));
//     updateAttemptsText();
// }
//
// function updateAttemptsText() {
//     document.querySelector("#totalAttempts").textContent = `Total Attempts: ${attempts}`;
}