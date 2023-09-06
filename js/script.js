let computerNum = 0

let inNum = document.getElementById('user-input')
let btn = document.getElementById('go-btn')
let result = document.getElementById('result')
let reset = document.getElementById('reset')
let chances = 5


btn.addEventListener('click',play) //(이벤트 이름, 함수이름), 함수 이름이 있으면 실행 시켜줘야됨
reset.addEventListener('click',resetBtn)

function ranNum(){
  computerNum = Math.floor(Math.random() *100 + 1)
  console.log(computerNum);
  
  }

function play(){
  chances--
  console.log('기회', chances);
  let userValue = inNum.value
  if(userValue > computerNum){
    result.innerHTML = 'Down!!'
  }else if(userValue < computerNum){
    result.innerHTML = 'up!!'
  }else{
    result.innerHTML = '맞췄습니다!!'
  }

  if(chances < 1){
    btn.disabled = true
  }
}

function resetBtn() {
  ranNum()
  result.innerHTML = ''
  inNum.value = ''
  inNum.focus()
}

ranNum()