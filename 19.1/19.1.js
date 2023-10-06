const firstLi = document.querySelector('li'); 
const startHereLi = firstLi.nextElementSibling; 
startHereLi.textContent = 'main title'; 
///////


const subList = startHereLi.nextElementSibling.firstElementChild;
const newLi = document.createElement('li'); 
newLi.textContent = 'subtitle 4'; 
subList.appendChild(newLi);
////

const mainList = document.querySelector('body > ul');
const lastLi = mainList.lastElementChild;
lastLi.remove();
////
document.title = "Master Of The Dom";
////
document.querySelector('p').textContent = 'Hey its me the new test here';
