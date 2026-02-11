
//EventListeners
let colorBtn = document.querySelector( '#colorBtn').addEventListener("click", updateTextColor);
let sizeBtn = document.querySelector('#sizeBtn').addEventListener("click", updateSize);
let bgBtn = document.querySelector('#bgBtn').addEventListener("click", updateBackground);

function updateTextColor(){
    let textColor = document.querySelector( '#colorInput').value;
    document.querySelector( 'body').style.color = textColor;
}

function updateSize(){
    let textSize = document.querySelector( '#sizeInput').value;
    document.querySelector( 'body').style.fontSize = textSize + 'em';
}

function updateBackground(){
    let bgColor = document.querySelector( '#bgInput').value;
    document.querySelector( 'body').style.backgroundColor = bgColor;
}