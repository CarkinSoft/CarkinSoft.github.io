
document.querySelector("#authorInfoBtn").addEventListener("click", displayAuthorInfo);

//global variables
let data = "";

getRandomQuote();

function displayAuthorInfo(){
  document.querySelector("#bio").textContent = data.bio;
  document.querySelector("#authorPhoto").src = data.picture;
}

async function getRandomQuote() {

    let url = 'https://csumb.space/api/famousQuotes/getRandomQuote.php';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        data = await response.json();
        console.log(data);
        document.querySelector("#quote").textContent = data.quoteText;
        document.querySelector("#author").textContent = `${data.firstName}  ${data.lastName}`;

       

        //alert(data.quoteText)
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    }
}

function displayQuotes(){
    let numberOfQuotes = document.querySelector("#numberOfQuotes").value;
}


