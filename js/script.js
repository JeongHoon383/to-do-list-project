let inNum = document.getElementById('num')
let result = document.getElementById('result')

  function ranNum(){
  let setNum = Math.floor(Math.random() * 100)
  console.log('정답',setNum);
}

ranNum()

  document.querySelector('.ex1 button').addEventListener('click',e => {
    let userValue = inNum.value
    let getResult = result.value
    if(userValue == ranNum){
      console.log('정답입니다.');
    }
  })
ddd

