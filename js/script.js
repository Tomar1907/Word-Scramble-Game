const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const inputField = document.querySelector("input");
const timeText = document.querySelector(".time b");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

let correctWord , timer; 

const initTimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(()=>{
        if(maxTime>0){
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time's Up! ${correctWord.toUpperCase()} was the correct word `);
        initGame();
    },1000)
}

const initGame = () =>{
    initTimer(30)
    let randomObj = words[Math.floor(Math.random() * words.length)]
    let wordArray = randomObj.word.split("")
    for(let i = wordArray.length - 1; i > 0 ; i--){
        let j = Math.floor(Math.random() * (i+1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
    }
    wordText.innerHTML = wordArray.join("")
    hintText.innerHTML = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength" , correctWord.length);
}
initGame()

const checkWord = ()=>{
    let userWord = inputField.value.toLocaleLowerCase()
    if(!userWord) return alert("Please enter a word to check")
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${userWord.toUpperCase()} is the correct word`);
    initGame()
}

refreshBtn.addEventListener("click", initGame)
checkBtn.addEventListener("click", checkWord)