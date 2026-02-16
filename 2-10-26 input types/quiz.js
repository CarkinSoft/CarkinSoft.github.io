//document.querySelector("button").addEventListener("click", gradeQuiz);

function gradeQuiz() {
    //alert("Grading Quiz...");
    //let userAnswer = document.querySelector("#quiz1").value;
    //console.log(userAnswer);
}

function shuffleQ1Choices() {
    let Q1choices = ["Winton", "D.va", "Mercy", "Winston"];
    let randomArray = _.shuffle(Q1choices);

    for (let i of randomArray) {
        let radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "quiz1";
        radioElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        document.querySelector("#quiz1Choices").append(labelElement);
        labelElement.append(radioElement);

        console.log(labelElement);
    }

}
shuffleQ1Choices();