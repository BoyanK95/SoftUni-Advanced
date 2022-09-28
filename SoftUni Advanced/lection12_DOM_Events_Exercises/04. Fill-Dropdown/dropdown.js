function addItem() {
  let dropDownMenu = document.getElementById("menu");
  let inputText = document.querySelectorAll("input")[0];
  let inputValue = document.querySelectorAll("input")[1];

  let optionEl = document.createElement("option");
  optionEl.textContent = inputText.value;
  optionEl.value = inputValue.value;

  dropDownMenu.appendChild(optionEl);
  inputText.value = "";
  inputValue.value = "";
}
