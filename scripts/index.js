let inputFields;

document.addEventListener("DOMContentLoaded", () => {//loaded after the whole documents is loaded mostly used when we use inputs and buttons
  const {word,riddle}=riddles[Math.floor(Math.random()*riddles.length)];
  document.querySelector(".hint-text b").innerHTML=riddle;
  document.querySelector(".content b").innerHTML=word;
  console.log(word,riddle);
  const wordLetters = word.split("");
  inputFields = document.querySelectorAll(".input-underline"); 
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
            const chanceElement = document.querySelector('.chances b');
            let currentValue = parseInt(chanceElement.textContent, 10);//converts the current text(string) to a number.
            chanceElement.textContent = currentValue + 1;
          }
          if(wrongGuess==6){
            document.getElementsByClassName("game-model")[0].style.display="flex";//ClassName returns a collection of elements
          }
          button.disabled = true;
      });
  });
});

const playAgain=document.querySelector(".play-again");
playAgain.addEventListener("click",()=>{
  document.getElementsByClassName("game-model")[0].style.display="none";
  const chanceElement = document.querySelector('.chances b');
  let currentValue = parseInt(chanceElement.textContent, 10);
  chanceElement.textContent = 0;
  inputFields.forEach(input=>{
    input.value='';
  })
});

  