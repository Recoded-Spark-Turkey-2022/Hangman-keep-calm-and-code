//*Getting Random Name  */

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    );
    if (response.ok) {
      const data = await response.json();
      const randomLetters = data[0].split("");
      randomLetterArr = randomLetters;
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

//**Adding functionality to alphabet letters */
const allAlphabetBtns = document.querySelectorAll(".btn-alphabet");
allAlphabetBtns.forEach((singleBtn, index) => {
  singleBtn.addEventListener("click", (e) => {
    console.log(e.target.value);

    console.log(randomLetterArr);
    //!we chose selected word by its id
    randomLetterArr?.forEach((letter, index) => {
      if (e.target.value === letter.toUpperCase()) {
        console.log("dang it");
        const selectedWord = document.getElementById(`single-letter-${index}`);
        console.log(e.target);
        selectedWord.innerText = letter.toUpperCase();
        //selected btn if it is true become disabled
        e.target.disabled = true;
      } else if (!randomLetterArr.includes(e.target.value.toLowerCase())) {
        //!here whether we  check if the user chose  wrong btn or not

        allFigureParts.forEach((singlePart, index) => {
          switch (index) {
            case 0:
              allFigureParts[index].classList.add("active");
              break;
            case 1:
              allFigureParts[index].classList.add("active");
              break;

            default:
              break;
          }
        });
      }
    });
  });
});
