let inTodo = document.getElementById('todo')
let addButton = document.getElementById('add')
let taskList = []

addButton.addEventListener('click',addTask)

function addTask(){
  let todoValue = inTodo.value
  taskList.push(todoValue)
  console.log(todoValue);
  
  
}



