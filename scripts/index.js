let inputFields;
const success=7;
const fail=5;
let wrongGuess=0;
let checkvalue=0;
let {word,riddle}=riddles[Math.floor(Math.random()*riddles.length)];
document.querySelector(".hint-text b").innerHTML=riddle;
document.querySelector(".content b").innerHTML=word;
console.log(word,riddle);
let wordLetters = word.split("");
inputFields = document.querySelectorAll(".input-underline");

const clickingButton = (button)=>{
  button.addEventListener("click", () => {
    const letter = button.textContent;
    if(wrongGuess==fail){
      document.getElementsByClassName("game-model lost")[0].style.display="flex";//ClassName returns a collection of elements
    }
    if (wordLetters.includes(letter)) {
        wordLetters.forEach((wordLetter, index) => {
            if (wordLetter === letter) {
                inputFields[index].value = letter;
                checkvalue+=1;
                // console.log(checkvalue);
            }
            if(checkvalue===success){
              document.getElementsByClassName("game-model win")[0].style.display="flex";
            }
        });
    }
    else{
      wrongGuess+=1;
      document.querySelector(".hangman-box img").src="hangman-"+wrongGuess+".svg";
      const chanceElement = document.querySelector('.chances b');
      let currentValue = parseInt(chanceElement.textContent, 10);//converts the current text(string) to a number.
      chanceElement.textContent = currentValue + 1;
    }
    button.disabled = true;
});
}

const buttons = document.querySelectorAll(".keyboard button");
const addEventListenerToEachButt = ()=>{
  buttons.forEach(button => {
    clickingButton(button);
  });
}

const winloss = () =>{
  const newriddle=riddles[Math.floor(Math.random()*riddles.length)];
  word=newriddle.word;
  riddle=newriddle.riddle;
  wordLetters = word.split(""); 
  console.log(word,riddle);
  document.querySelector(".hangman-box img").src="hangman-"+0+".svg";
  const chanceElement = document.querySelector('.chances b');
  chanceElement.textContent = 0;
  inputFields.forEach(input=>{
    input.value='';
  })
  buttons.forEach(button => button.disabled = false);
  wrongGuess = 0;
  checkvalue = 0;
  document.querySelector(".hint-text b").innerHTML=riddle;
  document.querySelector(".content b").innerHTML=word;
}

const youlost = ()=>{
  winloss();
  document.getElementsByClassName("game-model lost")[0].style.display="none"; 
}
const playAgainLost=document.querySelector(".play-again.lost");
playAgainLost.addEventListener("click",youlost);


const youwon = ()=>{
  winloss();
  document.getElementsByClassName("game-model win")[0].style.display="none";
} 
const playAgainWin=document.querySelector(".play-again.win");
const youWon=playAgainWin.addEventListener("click",youwon);

addEventListenerToEachButt();

