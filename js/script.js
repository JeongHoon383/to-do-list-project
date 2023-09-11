let inTodo = document.getElementById("todo");
let addButton = document.getElementById("add");
let tabs = document.querySelectorAll(".task-tabs div");
let mode = "all";
let taskList = [];
let filterList = []; // 체크된 종목 담아주는 곳

console.log(tabs);
addButton.addEventListener("click", addTask);

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTask() {
  let task = {
    id: randomIdGenerate() /* 입력되는 테스크에 매번 다른 아이디를 부여함 why? toggle 함수가 어떤 값을 선택해야되는지 알려주기 위해서 */,
    todoValue: inTodo.value,
    isComplete: false, // check를 누른순간 true로 바꿔주기 위해 만듬, 만들어서 뭐하냐? -> 테스크 지워지고 다시 생성되고
  };
  taskList.push(task);
  console.log(taskList);

  render();
}

function render() {
  let list = [];
  if (mode == "all" || mode == 'done') {
    list = taskList;
  } else if (mode == "ongoing") {
    list = filterList;
  }
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task">
      <div class="task-done">${list[i].todoValue}</div>
      <div>
        <button onclick="toggleComplete('${list[i].id}')">Check</button>
        <button onclick="deleteTask('${list[i].id}')">Delete</button>
      </div>
    </div><!-- task -->
      `;
    } else {
      resultHTML += `<div class="task">
      <div>${list[i].todoValue}</div>
      <div>
        <button onclick="toggleComplete('${list[i].id}')">Check</button>
        <button onclick="deleteTask('${list[i].id}')">Delete</button>
      </div>
    </div><!-- task -->`;
    }
  }

  document.getElementById("taskBoard").innerHTML = resultHTML;
}

function toggleComplete(id) {
  /* false를 true로 바꿔줘야됨, 어떤 버튼을 누를건가? 그럼 그 어떤 버튼을 이 함수가 알아들을 수 있게 하는가? */
  console.log("id", id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
}

function deleteTask(id) {
  console.log("id", id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}

function filter(event) {
  mode = event.target.id; // 코드 간략화

  if (mode == "all") {
    render();
  } else if (mode == "ongoing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        //체크됐을때 true, 진행중은 체크되지 않은 것들을 넣어줘야됨)
        filterList.push(taskList[i]);
      }
    }

    render();
  } else if (mode == "done") {
    for (let i = 0; i < taskList.length; i++) {
      if(taskList[i].isComplete == true){
        filterList.push(taskList[i]);
      }
    }
  }

  console.log(filterList);
}

function randomIdGenerate() {
  return Math.random().toString(36).substr(2, 16);
}
