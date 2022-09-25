//DOM Manipulation

//targeting with querrySelectorAll
const listItem = document.querySelectorAll('.listItems');

//iterating through the selected array and changing it
for (let i = 0; i < listItem.length; i++) {
    listItem[i].style.fontSize = '2rem'
    
}

//Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);

//Modifying the text of an element

const firstListItem = document.querySelector('.listItems');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

li.innerText = 'X-men'

//Modifying Attributes and Classes

const title = document.getElementById('main-heading')
console.log(title);

li.setAttribute('id','main-heading')

//Remove Element

li.remove();

//Event Listeners

//element.addEventListener("click", function)

const clickMeBtn = document.querySelector('button');

function alertBtn() {
    alert('I am a PRO CODERR !!!');
}

clickMeBtn.addEventListener("click", alertBtn)