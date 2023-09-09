let inTodo = document.getElementById('todo')
let addButton = document.getElementById('add')
let taskList = []

addButton.addEventListener('click',addTask)


function addTask(){
  let task = {
    id : randomIdGenerate(),/* 입력되는 테스크에 매번 다른 아이디를 부여함 why? toggle 함수가 어떤 값을 선택해야되는지 알려주기 위해서 */
    todoValue : inTodo.value,
    isComplete : false // check를 누른순간 true로 바꿔주기 위해 만듬, 만들어서 뭐하냐? -> 테스크 지워지고 다시 생성되고 
  }
  taskList.push(task)
  console.log(taskList);

  render()
}

function render(){
  let resultHTML = '';
  for(let i =0;i < taskList.length;i++){
    if(taskList[i].isComplete == true){
      resultHTML += `<div class="task">
      <div class="task-done">${taskList[i].todoValue}</div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
        <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
      </div>
    </div><!-- task -->
      `
    }else{
      resultHTML += `<div class="task">
      <div>${taskList[i].todoValue}</div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
        <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
      </div>
    </div><!-- task -->`
    }
  }

  document.getElementById('taskBoard').innerHTML = resultHTML;
}

function toggleComplete(id){ /* false를 true로 바꿔줘야됨, 어떤 버튼을 누를건가? 그럼 그 어떤 버튼을 이 함수가 알아들을 수 있게 하는가? */
  console.log('id', id);
  for(let i=0;i < taskList.length;i++){
    if(taskList[i].id == id){
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render()
  console.log(taskList);
}

function deleteTask(id){
  console.log('id', id);
  for(let i =0;i < taskList.length;i++){
    if(taskList[i].id == id){
      
    }
  }
}

function randomIdGenerate(){
  return Math.random().toString(36).substr(2, 16);
}




