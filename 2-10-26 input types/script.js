
//EventListeners
let colorBtn = document.querySelector( '#colorBtn').addEventListener("click", updateTextColor);

function updateTextColor(){
    document.querySelector( 'body').style.color = document.querySelector( '#colorInput').value;
}