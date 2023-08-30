//12300원을 받았을때 각각 얼마로 출력되는지 구해주면 됨
let unit = [50000, 10000, 5000, 1000, 500, 100]
function money(money){
  for(let i = 0; i < unit.length; i++){

    let num = Math.floor(money / unit[i])
    console.log(unit[i]+ '*' + num);
    money = money - (unit[i]*num)
  }
}

console.log(money(12300));