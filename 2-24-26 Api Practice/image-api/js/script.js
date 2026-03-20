async function displayImage(){

    let imageSelection = document.querySelector("select").value;
    let url = "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=" + imageSelection;
    let response = await fetch(url);
    let data = await response.json();

    let imageElement = document.createElement("#img");
    imageElement.src = data.hits[0].webformatURL;

    let imageDisplay = document.querySelector("#imageDisplay");
    document.querySelector(#imageDisplay).innerHTML = "";
    document.querySelector(#imageDisplay).append(imageElement);

    console.log(data);
}