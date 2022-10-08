function solve() {
  let addBtn = document.getElementById('add');
  let sections = document.getElementsByTagName('section');
  let openSection = sections[1];
  let inProgress = sections[2];
  let complete = sections[3];

  
  addBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dueDateInput = document.getElementById('date')
    
    if (!taskInput.value || !descriptionInput.value || !dueDateInput.value) {
      return
    }else{
      let newArticle = createArticle(taskInput, descriptionInput, dueDateInput, {class:"green", text:"Start"}, {class:"red", text:"Delete"})
      openSection.children[1].appendChild(newArticle);
      taskInput.value = '';
      descriptionInput.value = '';
      dueDateInput.value = '';
      
    }
    
  })
  function createArticle(taskInput, descriptionInput, dueDateInput, firstBtnInfo, secondBtnInfo) {
    let buttons = createPartialBtn(firstBtnInfo, secondBtnInfo);
    let article = document.createElement('article');

    let htmlEl =  `<h3>${taskInput.value}</h3>`                   +
                    `<p>Description: ${descriptionInput.value}</p>` +
                    `<p>Due date: ${dueDateInput.value}`            +
                              buttons ;                              
                         

      article.innerHTML = htmlEl;
      article.addEventListener('click', dispatchHandler)

     return article;
     
  }

  function createPartialBtn(firstBtnInfo, secondBtnInfo) {
    let buttons =  `<div class="flex">`                            +
                      `<button class="${firstBtnInfo.class}" >${firstBtnInfo.text}</button>`  +
                      `<button class="${secondBtnInfo.class}">${secondBtnInfo.text}</button>` +
                    `</div>`         
    return buttons;
  }

  function dispatchHandler(e) {
    if (e.target.tagName !== 'BUTTON') {
      return;
    }
    let cmdObj = cmd();
    let btnText = e.target.innerText.toLowerCase();

    cmdObj[btnText](e);
  }

  function cmd() {
    return {
        start: function(e) {
          inProgress.appendChild(e.currentTarget);
          e.target.parentElement.remove()
          e.currentTarget.innerHTML += createPartialBtn({class:"red", text:"Delete"}, {class:"orange", text:"Finish"});
          
          
        },
        delete: function(e) {
          e.currentTarget.remove();
        },
        finish: function(e) {
          complete.appendChild(e.currentTarget);
          e.target.parentElement.remove();         
        }
    }
  }
}
