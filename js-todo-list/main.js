// TO DO
document.addEventListener("DOMContentLoaded", function (){

  const selectAll = document.querySelectorAll('li');
  selectAll.forEach(li => li.addEventListener('click',function(){
    // console.log(li)
    if (li.className !== "checked" ){
     li.className = "checked"}
    else{li.className = ""}

  })
  )
  const closeBtn = document.querySelector(".container")
  
  closeBtn.addEventListener('click',function(e){
    console.log(e)
    if(e.target.innerText == 'x'){
    e.target.parentNode.remove();}
  });

  const input = document.querySelector('#input')
  const addBtn = document.querySelector('#addBtn')
  const todoList = document.querySelector('.container')


    addBtn.addEventListener('click',function(e){
    const inputValuebtn = input.value.trim();
    if(inputValuebtn !== "" ){
    
    const todo_span = document.createElement("span")
    const todo = document.createElement("li")

    todo_span.innerText = 'x'
    todo_span.classList.add('close')
    todo.innerHTML = input.value
    todo.appendChild(todo_span)
    todoList.appendChild(todo)
    input.value = "";

    }
 });

  

});