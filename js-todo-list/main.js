// TO DO
document.addEventListener("DOMContentLoaded", function (){
                                    // 增加check功能
  const checked = document.querySelector('ul')
    checked.addEventListener('click',(e) => {
      if (e.target.className !== "checked" ){
      e.target.className = "checked"}
      else{e.target.className = ""}
    })
                                     // 按 x 移除功能
  const closeBtn = document.querySelector('ul')
    closeBtn.addEventListener('click',(e) => {
      if(e.target.innerText == 'x'){
      e.target.parentNode.remove();}
    })
                                      // key in輸入功能
  const inPut = document.querySelector('input')
  const todoItem = document.querySelector('span')
  const todo_ul = document.querySelector('ul')
  
    todoItem.addEventListener('click',(e) => {
      const todoList = document.createElement('li')
      todoList.innerHTML = inPut.value
      todo_ul.appendChild(todoList)
                                      //  key in後增加 x 關閉功能
      const closeSpan =document.createElement('ul')
      closeSpan.innerText = 'x'            
      closeSpan.classList.add('close')
      todoList.appendChild(closeSpan)
    })
});

