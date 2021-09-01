const inputBox = document.querySelector(".inputf input");
const addBtn = document.querySelector(".inputf button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = (e) => {
  let userEnteredValue = inputBox.value; 
  if(userEnteredValue.trim() != 0){ 
    addBtn.classList.add("active");
    if(e.keyCode==13){
      addBtn.click();
  }
  }else{
    addBtn.classList.remove("active");
  }
}
showTodos();

addBtn.onclick = () => { 
  let userEnteredValue = inputBox.value; 
  let getLocalStorageData = localStorage.getItem("Todos");
  if(getLocalStorageData == null){ 
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData);
  }
  listArray.push(userEnteredValue);
  localStorage.setItem("Todos", JSON.stringify(listArray));
  showTodos();
  addBtn.classList.remove("active");
}

function showTodos(){
  let getLocalStorageData = localStorage.getItem("Todos");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length;
  if(listArray.length > 0){
    deleteAllBtn.classList.add("active");
  }else{
    deleteAllBtn.classList.remove("active");
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${index+1}. ${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
}

// delete todo
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("Todos");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("Todos", JSON.stringify(listArray));
  showTodos();
}

// delete all todos
deleteAllBtn.onclick = ()=>{
  listArray = []; 
  localStorage.setItem("Todos", JSON.stringify(listArray));
  showTodos(); 
}