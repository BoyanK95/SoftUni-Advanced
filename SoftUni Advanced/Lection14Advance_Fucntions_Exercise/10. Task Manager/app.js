function solve() {
  document
    .getElementsByTagName("form")[0]
    .addEventListener("submit", createTask);
  let sections = Array.from(document.getElementsByTagName("section"));
  let openSection = sections[1];
  let inProgress = sections[2];
  let completeSection = sections[3];

  function createTask(e) {
    e.preventDefault();
    let form = e.target;
    let title = form.elements[0].value;
    let desc = form.elements[1].value;
    let date = form.elements[2].value;
    if (title.length ===0 || desc.length ===0) {
        return
    }

    let newArticle = createPartialArticle(title, desc, date, {class:"green", text:"Complete"}, {});
    openSection.children[1].innerHTML += newArticle
    debugger;
    createPartialArticle(
      title,
      desc,
      date,
      { class: "green", text: "Start" },
      { class: "red", text: "Delete" }
    );
    createPartialBtn();
    
  }
  function createPartialArticle(title, desc, date, firstBtnInfo, secBtnInfo) {
    let article = document.createElement('article')
    let buttons = createPartialBtn(firstBtnInfo, secBtnInfo);
    let innerHtml =
      `<article>` +
      `<h3>${title}</h3>` +
      `<p>Description: ${desc}</p>` +
      `<p>Due Date:${date}</p>` +
      `<div class="flex">` +
      buttons ;

      return innerHtml;
      
  }
  function createPartialBtn(firstBtnInfo, secBtnInfo) {
    let buttons = `<button class="${firstBtnInfo.class}">${firstBtnInfo.text}</button>` +
                  `<button class="${secBtnInfo.class}">${secBtnInfo.text}</button>`
    return buttons;
  }
}
