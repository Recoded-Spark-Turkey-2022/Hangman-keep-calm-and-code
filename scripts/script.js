document.addEventListener("DOMContentLoaded", (event) => {
  hangmanIndex = 0;

  const buttonsArea = document.querySelector(".letter-buttons");

  //create alphabet array
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letterArr = alphabet.split("");

  //example word, we will get the real word with fetch
  const fetchAPIWord = "future";
  const gameWord = fetchAPIWord.split("");
  console.log(gameWord);

  //add buttons as html elements
  letterArr.forEach((letter) => {
    const letterBtn = document.createElement("button");
    letterBtn.innerText = letter;
    letterBtn.className = "letter-button";
    letterBtn.id = `${letter}Letter`;
    letterBtn.style.marginRight = "5px"; //with css it can be change
    buttonsArea.appendChild(letterBtn);
    letterValue = letterBtn.textContent;
    letterBtn.addEventListener("click", () => {
      checkWord(letterBtn);
    });
  });

  //gets hangman lines
  const head = document.getElementById("head");
  const leg1 = document.getElementById("leg1");
  const leg2 = document.getElementById("leg2");
  const arm1 = document.getElementById("arm1");
  const arm2 = document.getElementById("arm2");
  const body = document.querySelectorAll("#body1, #body2, #body3");
  console.log(body);

  //collects lines in an array
  const hangman = [head, arm1, arm2, leg1, leg2, body]; //must to add body

  //function checks the letters contain and turn T/F
  //after that it change the visibility of hangman lines
  function checkWord(findLetter) {
    //console.log(findLetter.innerText);
    let hasLetter = gameWord.includes(findLetter.innerText);
    if (!hasLetter) {
      //checks how many mistake right does user have
      if (hangmanIndex >= hangman.length) {
        console.log("game over");
      } 
      else {
        //this if checks the last element, body
        if ( hangmanIndex == hangman.length-1) {
            document.getElementById("body1").style.display = "block"
            document.getElementById("body2").style.display = "block"
            document.getElementById("body3").style.display = "block"
            hangmanIndex += 1
        } 
        else {
          hangman[hangmanIndex].style.display = "block";
          hangmanIndex += 1;
        }
      }
    }
  }
  //event.preventDefault();
});

//apsent
//couldn't solve what if come to same letter
