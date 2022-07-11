'use strict';

const info = JSON.parse(window.localStorage.getItem('data'));
console.log(info);
let ul = document.createElement('ul');
document.body.append(ul);

for(let elem in info){
    let li = document.createElement('li');
    li.innerHTML = `${elem}: ${info[elem]} `;
    ul.append(li);
}

