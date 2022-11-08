const parentButton = document.querySelector(".button-container");
const buttonsArea = document.querySelector(".letter-buttons");
const randomWordDiv = document.querySelector(".random-word");
const allFigureParts = document.querySelectorAll(".figure-part");
const hintBtn = document.getElementById('hint-btn')
const playAgainBtn = document.getElementById('play-again-btn')
let gameWord;
//gets hangman lines
const head = document.getElementById("head");
const leg1 = document.getElementById("leg-1");
const leg2 = document.getElementById("leg-2");
const arm1 = document.getElementById("arm-1");
const arm2 = document.getElementById("arm-2");
const body1 = document.getElementById("body-1");
const body2 = document.getElementById("body-2");
const body3 = document.getElementById("body-3");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");

//collects lines in an array
const hangman = [
  line1,
  line2,
  head,
  arm1,
  arm2,
  leg1,
  leg2,
  body1,
  body2,
  body3,
]; //must to add body

let hangmanIndex = 0;

//create alphabet array
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const letterArr = alphabet.split("");

//add buttons as html elements
letterArr.forEach((letter, index) => {
  const letterBtn = document.createElement("button");
  letterBtn.innerText = letter;
  letterBtn.className = "letter-button";

  letterBtn.id = `${letter}Letter`;
  letterBtn.style.marginRight = "5px"; //with css it can be change
  buttonsArea.appendChild(letterBtn);
  letterValue = letterBtn.textContent;
  letterBtn.addEventListener("click", (e) => {
    checkWord(letterBtn, e.target);
  });
});

//function checks the letters contain and turn T/F
//after that it change the visibility of hangman lines
function checkWord(findLetter, selectedButton) {
  //console.log(findLetter.innerText);

  let hasLetter = gameWord.includes(findLetter.innerText);

  if (!hasLetter) {
    {
      //this if checks the last element, body
      if (hangman.length >= hangmanIndex) {
        hangman[hangmanIndex].style.display = "block";

        selectedButton.classList.add("selected");
        selectedButton.disabled = true;

        hangmanIndex += 1;
        if (hangmanIndex === hangman.length - 1) {
          console.log("last chance");
        } else if (hangmanIndex === hangman.length) {
          console.log("game over");
        }
      }
    }
  } else {
    gameWord.forEach((singleWord, index) => {
      if (singleWord === findLetter.innerText) {
        const selectedWord = document.getElementById(`single-letter-${index}`);
        selectedWord.innerText = singleWord.toUpperCase();
        selectedButton.disabled = true;
      }
    });
  }
}

//*Getting Random Name  */

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    );
    if (response.ok) {
      const data = await response.json();
      const randomLetters = data[0].split("");
      gameWord = randomLetters;
      randomLetters.forEach((singleLetter, index) => {
        const letterBox = document.createElement("span");
        letterBox.setAttribute("class", "single-letterBox");
        letterBox.setAttribute("id", `single-letter-${index}`);

        letterBox.innerText = "";
        randomWordDiv.appendChild(letterBox);
      });
      console.log(randomLetters);
    }
  } catch (error) {
    console.log(error);
  }
};
fetchData();

// function enableLetterBtn(){
// for (let i = 0; i < buttonsArea.length; i++){
//     console.log(i)
// }
// }

playAgainBtn.addEventListener("click" , () => {
    hangmanIndex = 0;
    const allBtns = document.querySelectorAll('.letter-button')
    console.log(allBtns)
   allBtns.forEach((btn) => {
    btn.disabled = false ;
    btn.classList.remove("selected")
   })
   hangman.forEach((e) => {
    e.style.display = "none"
   })
   const fetchData = async () => {
    try {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word?number=1"
      );
      if (response.ok) {
        const data = await response.json();
        const randomLetters = data[0].split("");
        gameWord = randomLetters;
        randomLetters.forEach((singleLetter, index) => {
          const letterBox = document.createElement("span");
          letterBox.setAttribute("class", "single-letterBox");
          letterBox.setAttribute("id", `single-letter-${index}`);
  
          letterBox.innerText = "";
          randomWordDiv.appendChild(letterBox);
        });
        console.log(randomLetters);
      }
    } catch (error) {
      console.log(error);
    }
  };
})