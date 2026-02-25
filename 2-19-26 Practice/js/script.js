let zipElement = document.querySelector("#zipCode");
let stateElement = document.querySelector("#state");
let passElement = document.querySelector("#pass2");
let userElement = document.querySelector("#user");

userElement.addEventListener("change",displayuser)
zipElement.addEventListener("change", displayCity);
stateElement.addEventListener("change", displayCounty);
passElement.addEventListener("click",displaypass);

displayStates();
async function displayStates(){
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error accessing API endpoint")
            }
        const data = await response.json();
        console.log(data);
        //alert(data[0].state);

        for (let i of data){
            let optionEl = document.createElement("option");
            optionEl.textContent = i.state;
            optionEl.value = i.usps;

            document.querySelector("#state").append(optionEl);
    
        }


        } catch (err) {
                if (err instanceof TypeError) {
                    alert("Error accessing API endpoint (network failure)");
                } else {
                    alert(err.message);
                }
        } //catch    
}

//displayCounty()
async function displayCounty(){
  let url = " https://csumb.space/api/countyListAPI.php?state=ca";
    console.log(url);
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      //alert(data[0].state);

  for (let i of data){
            let optionEl = document.createElement("option");
            optionEl.textContent = i.county;
            optionEl.value = i.usps;

            document.querySelector("#county").append(optionEl);
    
        }
      

}
async function displaypass(){
  let url = "https://csumb.space/api/suggestedPassword.php?length=8";
  console.log(url);
      let response = await fetch(url);
      console.log(response);
      let data = await response.json();
      console.log(data);
      let textEl = data.password;
      
      //alert(data[0].state);
      document.querySelector("#pass").textContent = data.password;


}

async function displayuser(){


  let userpCode = userElement.value;
    let url = " https://csumb.space/api/usernamesAPI.php?username="  + userpCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //alert(data.city);
    document.querySelector("#user2").textContent = data.available;

}

async function displayCity(){
    //alert("displaying city...")
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //alert(data.city);
    document.querySelector("#city").textContent = data.city;
    document.querySelector("#latitude").textContent = data.latitude;
    document.querySelector("#longitude").textContent = data.longitude;
}

