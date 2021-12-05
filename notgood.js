document.addEventListener("DOMContentLoaded", function (){

  const selectAll = document.querySelectorAll('li');
  selectAll.forEach(li => li.addEventListener('click',function(){
                               
    if (li.className !== "checked" ){
     li.className = "checked"}
    else{li.className = ""}
                        
  })
  )
  const closeBtn = document.querySelector(".container")
                                   
  closeBtn.addEventListener('click',function(e){
    // console.log(e)
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
                              
      todo.innerHTML = input.value
      todoList.appendChild(todo)
      input.value = "";
      
      todo_span.innerText = 'x'            
      todo_span.classList.add('close')
      todo.appendChild(todo_span)

      const selectAll2 = document.querySelectorAll('li');
      selectAll2.forEach(li => li.addEventListener('click',function(){               
        if (li.className !== "checked" ){
        li.className = "checked"}
        else{li.className = ""}
                            
      })
      )
                                
   

    }
 });

  

});