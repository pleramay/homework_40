'use strict';

document.getElementById('submit').onclick = function getElem(event){
   
   let inputs = document.querySelectorAll('input, select, textarea');
   inputs = Array.from(inputs);
   
   const data = inputs.reduce((prev, item) =>{
       prev[item.name] = item.value;
       return prev;
   }, {});

   event.preventDefault();

   localStorage.setItem('data', JSON.stringify(data));
   window.open('list_form.html');
}
