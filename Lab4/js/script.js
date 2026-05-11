
let zipElement = document.querySelector("#zipCode");

zipElement.addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", displayCounties);
document.querySelector("#username").addEventListener("input", validateUsername);
document.querySelector("#username").addEventListener("change", checkUsername);
document.querySelector("#password").addEventListener("input", validatePassword);
document.querySelector("#password").addEventListener("click", displaySuggestion);
document.querySelector("#passwordAgain").addEventListener("input", checkPasswordsMatch);

async function displayCity() {
    let zipCode = zipElement.value;

    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();

    if (!data.city) {
        document.querySelector("#zipMessage").textContent = "Zip code not found";
        document.querySelector("#zipMessage").className = "error";

        document.querySelector("#city").textContent = "";
        document.querySelector("#latitude").textContent = "";
        document.querySelector("#longitude").textContent = "";
        return;
    }

    document.querySelector("#zipMessage").textContent = "";
    document.querySelector("#city").textContent = data.city;
    document.querySelector("#latitude").textContent = data.latitude;
    document.querySelector("#longitude").textContent = data.longitude;
}

async function displayStates() {
    let url = "https://csumb.space/api/allStatesAPI.php";

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error accessing API endpoint");
        }

        let data = await response.json();

        for (let state of data) {
            let optionEl = document.createElement("option");
            optionEl.textContent = state.state;
            optionEl.value = state.usps;
            document.querySelector("#state").append(optionEl);
        }

    } catch (err) {
        alert(err.message);
    }
}

async function displayCounties() {
    let state = document.querySelector("#state").value;
    let countySelect = document.querySelector("#county");

    countySelect.textContent = "";

    let defaultOption = document.createElement("option");
    defaultOption.textContent = "Select a County";
    defaultOption.value = "";
    countySelect.append(defaultOption);

    if (state === "") {
        return;
    }

    let url = "https://csumb.space/api/countyListAPI.php?state=" + state;
    let response = await fetch(url);
    let data = await response.json();

    for (let item of data) {
        let optionEl = document.createElement("option");
        optionEl.textContent = item.county;
        optionEl.value = item.county;
        countySelect.append(optionEl);
    }
}

function validateUsername() {
    let username = document.querySelector("#username").value;
    let usernameMessage = document.querySelector("#usernameMessage");

    if (username.length < 3) {
        usernameMessage.textContent = "Username must be at least 3 characters";
        usernameMessage.className = "error";
        return false;
    } else {
        usernameMessage.textContent = "Username length is valid";
        usernameMessage.className = "success";
        return true;
    }
}

async function checkUsername() {
    let username = document.querySelector("#username").value;
    let usernameMessage = document.querySelector("#usernameMessage");

    if (username.length < 3) {
        validateUsername();
        return;
    }

    let url = "https://csumb.space/api/usernamesAPI.php?username=" + username;
    let response = await fetch(url);
    let data = await response.json();

    if (data.available) {
        usernameMessage.textContent = "Username is available";
        usernameMessage.className = "success";
    } else {
        usernameMessage.textContent = "Username is not available";
        usernameMessage.className = "error";
    }
}

function validatePassword() {
    let password = document.querySelector("#password").value;
    let passwordMessage = document.querySelector("#passwordMessage");

    if (password.length < 6) {
        passwordMessage.textContent = "Password must be at least 6 characters";
        passwordMessage.className = "error";
        return false;
    } else {
        passwordMessage.textContent = "Password length is valid";
        passwordMessage.className = "success";
    }

    checkPasswordsMatch();
    return true;
}

function checkPasswordsMatch() {
    let password = document.querySelector("#password").value;
    let passwordAgain = document.querySelector("#passwordAgain").value;
    let passwordAgainMessage = document.querySelector("#passwordAgainMessage");

    if (passwordAgain === "") {
        passwordAgainMessage.textContent = "";
        return false;
    }

    if (password === passwordAgain) {
        passwordAgainMessage.textContent = "Passwords match";
        passwordAgainMessage.className = "success";
        return true;
    } else {
        passwordAgainMessage.textContent = "Passwords do not match";
        passwordAgainMessage.className = "error";
        return false;
    }
}

function displaySuggestion() {
    let suggestions = [
        "blackwhite1",
        "simplepass2",
        "signup123",
        "basicpass9",
        "student2026"
    ];

    let randomIndex = Math.floor(Math.random() * suggestions.length);
    document.querySelector("#suggestedPassword").textContent = suggestions[randomIndex];
}

displayStates();
