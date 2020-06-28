const input = document.getElementById('input');
const enterBtn = document.getElementById('enterBtn');
const ul = document.querySelector('ul');

const createTodo = ()=>{
    let li = document.createElement('li')
    li.textContent = input.value
    ul.appendChild(li)
    let cancelTodo =  document.createElement('button')
    cancelTodo.appendChild(document.createTextNode("X"))
    cancelTodo.addEventListener('click' ,()=>{
        li.classList.toggle('cancel')
    })
    li.appendChild(cancelTodo);


    input.value =""
}
const addTask = ()=>{
    if(input.value.length > 0){
        createTodo()
    }
}
const inputEvent =()=>{
    if(input.value.length > 0 && event.which) {
        createTodo() 
    }
}
enterBtn.addEventListener("click" , addTask);
input,addEventListener("keypress" , InputEvent)

console.log()