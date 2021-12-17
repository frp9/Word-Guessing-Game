//array of words for the game
const arrayOfWords = ["CHIMPANZEE", "LEMON", "ELEPHANT", "DONKEY", "JUNGLE", "PLANT", "BOARD", "POTATO", "ANGEL", "WINTER", "WINDOW", "BEACH", "WATCH", "BOTTLE", "TUBE", "LOBSTER", "HONEY", "ICECREAM", "GARAGE", "TELESCOPE", "TRUCK", "WIZARD", "TABLE", "APPLE", "UMBRELLA", "PACKAGE", "JACKET", "GRASS", "BUILDING", "STAND", "PHONE", "MOUSE", "KEYBOARD"];

//randomly selects the word from array to make game interesting
let word = "";
let totalLives = 7;
let wrongGuess = 0;
let hiddenWord = [];
let targets = [];

console.log(word);

const startButtonPressed = () => {
    
    totalLives = 7;
    document.querySelector("#score").innerText = totalLives;

    word = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
       
    hiddenWord = [];

    //THis will print the required dashes 
    for (i = 0; i < word.length; i++) 
    {
        hiddenWord.push("_");        
    }

        console.log(word);
        
        document.getElementById("word-box").innerText = hiddenWord.join(" ");

        for (let j = 0; j < targets.length; j++){

            targets[j].disabled = false;
        }

        targets = [];
}



const letterClicked = (event) => {

    let check = true;

    let displayer = "";

    let spacing = "";

    console.log(event);
    if (event.target.classList.contains("btn-letter") === true) {
        console.log("alpha")
        
        targets.push(event.target);

       event.target.disabled = true;

       let letter = event.target.innerText;

       for (let j = 0; j < word.length; j++ ) {

            if (letter === word[j]) {
                hiddenWord[j] = letter;
                
                check = false;
            }
            displayer = displayer + hiddenWord[j] + " ";

            spacing = spacing + hiddenWord[j];
       }

       if (check){
           alert("No Match Found!");

           totalLives--;

           document.querySelector("#score").innerText = totalLives;
       }


       console.log(displayer);
       document.querySelector("#word-box").innerText = displayer;
       console.log(letter);

    }


    if (totalLives == 0) {
        alert(`YOU LOSE! \n Secret word was ${word}`);
    }

    if (word === spacing) {
        alert("YOU WIN!");
    }

}


document.querySelector("button").addEventListener("click", startButtonPressed);

document.querySelector("div").addEventListener("click", letterClicked);
