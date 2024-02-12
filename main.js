const addBtn = document.querySelector('.add-btn')
const inputValue = document.querySelector('.input')
const error = document.querySelector('.error')
const todoContainer = document.querySelector('.todo-container')
let todoArray = JSON.parse(localStorage.getItem('todo')) || [] 

addBtn.addEventListener('click', function(){
    if (inputValue.value === ''){
        error.style.display = 'block'
        error.textContent = 'Please fill-in the fields'

    }else{
        todoContainer.innerHTML += `<div class="todo-div">
        <h3>${inputValue.value}</h3>
        <div class="delete">
            <a href="#"><i class="ri-delete-bin-line"></i></a>
        </div>
    </div>`

    
    let todoObject = {
        todoText: inputValue.value,
        id: Math.random()
    };
    todoArray.push(todoObject)

    localStorage.setItem('todo', JSON.stringify(todoArray))
    console.log(todoArray)

    inputValue.value = ''
}
})

function readFromStorage(){
  todoArray.forEach(element => {
    todoContainer.innerHTML += `<div class="todo-div">
        <h3>${element.todoText}</h3>
        <div class="delete">
            <a href="#"><i class="ri-delete-bin-line"></i></a>
        </div>
    </div>`
  });
}

readFromStorage()