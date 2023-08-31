let computerNum = 0

let goButton = document.getElementById('.go-btn')
console.log(goButton);


function pickRandomNum (){
  computerNum = Math.floor(Math.random()*100)+1
  console.log(computerNum);
}

function play(){
  console.log("게임시작");
}

pickRandomNum()