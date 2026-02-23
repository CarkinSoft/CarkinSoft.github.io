
let zipElement = document.querySelector("#zipCode").value;
zipElement.addEventListener("change", displayCity);
// document.querySelector("#password").addEventListener("click", displaySuggestions);


async function displayCity(){

    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    console.log(url);

    let response = await fetch(url);
    console.log(response);

    let data = await response.json();
    console.log(data);

    document.querySelector("#city").textContent = data.city;
    document.querySelector("#latitude").textContent = data.latitude;
    document.querySelector("#longitude").textContent = data.longitude;
}

async function displayStates() {
    let url = "https://csumb.space/api/allStatesAPI.php"

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data.state);

        for (let i of data) {
            let optionEl = document.createElement("option");
            optionEl.textContent = i.state;
            document.querySelector("#state").append(optionEl);
            optionEl.value = i.usps;
        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } //catch
displayStates()
}
