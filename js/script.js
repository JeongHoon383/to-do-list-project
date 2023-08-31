let computerNum = 0

let goButton = document.getElementById('go-btn')
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result')
let resetButton = document.getElementById('reset')
let chanceArea = document.getElementById('chance-save')
let chances = 5
let gameOver = false

console.log(resultArea);

goButton.addEventListener('click', play)
resetButton.addEventListener('click', rst)


function pickRandomNum (){
  computerNum = Math.floor(Math.random()*100)+1
  console.log(computerNum);
}

function play(){
  let userValue = userInput.value

  chances --;
  chanceArea.textContent = `남은 기회 :${chances}`
  console.log('chance', chances);

  if(userValue < computerNum){
    resultArea.innerHTML = 'up!!'
  }else if(userValue > computerNum){
    resultArea.innerHTML = 'down!!'
  }else{
    resultArea.innerHTML = '정답입니다!!'
  } 

  if(chances < 1 ){
    gameOver = true
    
  }

  if(gameOver == true){
    goButton.disabled = true
    
  }
}

function rst(){
  userInput.value = ''
  pickRandomNum()
  play()

  resultArea.innerHTML = '결과값이 여기 나옵니다!'
}

pickRandomNum()

