async function displayImage(){

    let  imageSelection = document.querySelector("select").value;
    let url = " " + imageSelection;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //alert(data.city);
    document.querySelector("#user2").textContent = data.available;

}