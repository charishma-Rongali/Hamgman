document.addEventListener("DOMContentLoaded", () => {//loaded after the whole documents is loaded mostly used when we use inputs and buttons
  const {word,riddle}=riddles[Math.floor(Math.random()*riddles.length)];
  document.querySelector(".hint-text b").innerHTML=riddle;
  console.log(word,riddle);
  const wordLetters = word.split("");
  const inputFields = document.querySelectorAll(".input-underline"); 
  const buttons = document.querySelectorAll(".keyboard button"); 
  let wrongGuess=0;
  buttons.forEach(button => {
      const buttonChanges=0;
      button.addEventListener("click", () => {
          const letter = button.textContent;
          if (wordLetters.includes(letter)) {
              wordLetters.forEach((wordLetter, index) => {
                  if (wordLetter === letter) {
                      inputFields[index].value = letter;
                  }
              });
          }
          else{
            wrongGuess+=1
            console.log(wrongGuess);
          }
          if(wrongGuess==6){
            document.getElementsByClassName("game-model")[0].style.display="flex";
          }
          button.disabled = true;
      });
  });
});


  