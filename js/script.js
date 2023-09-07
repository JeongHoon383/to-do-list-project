let inTodo = document.getElementById('todo')
let addButton = document.getElementById('add')
let result = document.getElementById('result')
let todoSave = []

addButton.addEventListener('click',add)

function add(){
  let todoValue = inTodo.value
  result.textContent = todoValue
  todoSave.push(todoValue)
  
}



