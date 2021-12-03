// TO DO
document.addEventListener("DOMContentLoaded", function (){

  const selectAll = document.querySelectorAll('li');
  selectAll.forEach(li => li.addEventListener('click',function(){
    console.log(li)
    if (li.className !== "checked" ){
     li.className = "checked"}
    else{li.className = ""}

  })
  )
});