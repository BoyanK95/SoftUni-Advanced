function extractText() {
  // let listItems = document.querySelectorAll('li')
  // let resultForm = document.getElementById('result')

  // for (let list of listItems) {
  //    resultForm.innerHTML += list.innerHTML;

  // }

  let ulElement = document.getElementById("items");
  let result = document.getElementById("result");

  result.textContent = ulElement.textContent;
}
