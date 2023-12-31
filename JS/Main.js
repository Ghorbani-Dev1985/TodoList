const $ = document;
const Overlay = $.querySelector(".overlay")
const modal = $.querySelector("#modal")
const ModalBtns = $.querySelectorAll(".ModalBtn")
const CloseBtn = $.querySelector(".CloseBtn")
const AddNewTaskInput = $.querySelector('.AddNewTaskInput')
const AddNewTaskBtn = $.querySelector('.AddNewTaskBtn')
const AddNewTodoWrapper = $.querySelector('#AddNewTodoWrapper')
const ListItems = $.querySelectorAll('.list-items')
const Todos = $.querySelectorAll('.Todos')

let setId = 1;


function addTodo(){
  let NewLi = $.createElement('li');
  let NewImg = $.createElement('img');
  NewLi.innerHTML = AddNewTaskInput.value;
  NewLi.setAttribute('draggable' , true);
  NewLi.setAttribute('id' , setId);
  NewLi.setAttribute('class' , 'Todos');
  NewImg.setAttribute('src' , '../Assets/Images/Trash.svg');
  NewImg.setAttribute('class' , 'TrashIcon');
  NewLi.appendChild(NewImg);
  NewLi.setAttribute('class' , 'Todos');
  AddNewTodoWrapper.appendChild(NewLi);
  NewLi.addEventListener('dragstart' , dragstartHandler);
  NewImg.addEventListener('click' , deleteTodoHandler);
  CloseModal();
  AddNewTaskInput.value = "";
  setId++;
}
function deleteTodoHandler(e){
  e.target.parentElement.remove();
}
function dragstartHandler(e){
  e.dataTransfer.setData('elemId', e.target.id);
}
function dropHandler(e){
  let targetId = e.dataTransfer.getData('elemId')
    let targetElem = document.getElementById(targetId)
  e.target.append(targetElem)
 }
 function dragoverHandler(e){
  e.preventDefault();
}

// Modal
function OpenModal() {
  Overlay.style.display = "flex";
  modal.style.display = "flex";
}
function CloseModal() {
  Overlay.style.display = "none";
  modal.style.display = "none";
}
ModalBtns.forEach((ModalBtn) => {
  ModalBtn.addEventListener("click", OpenModal);
});
Overlay.addEventListener("click", CloseModal);
CloseBtn.addEventListener("click", CloseModal);
$.body.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    Overlay.style.display = "none";
    modal.style.display = "none";
  }
});

// Event Listeners
AddNewTaskBtn.addEventListener('click' , addTodo);
ListItems.forEach((ListItem) => {
  ListItem.addEventListener('dragover' , dragoverHandler);
});

ListItems.forEach((ListItem) => {
  ListItem.addEventListener('drop' , dropHandler);
});