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