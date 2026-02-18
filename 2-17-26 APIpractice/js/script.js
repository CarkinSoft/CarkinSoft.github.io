
async function getMoviePoster() {
    try {

        let movieTitle = document.querySelector("#movieTitle").value;

        let url = "https://www.omdbapi.com/?apikey=12215ee6&s=super%20mario"

        let response = await fetch(url)
        let data = await response.json()

        console.log(data.Search[0].Poster);

        let imageElement = document.createElement("img");
        imageElement.src = data.Search[0].Poster;

        let headerElement = document.createElement("h1");
        headerElement.textContent = data.Search[0];
    }
}