function editElement(element, match, replacer) {
  while (element.textContent.includes(match)) {
    element.textContent = element.textContent.replace(match, replacer);
  }
}

// Regex solution
function regeXeditElement(element, match, replacer) {

const pattern = new RegExp(match, 'g')

element.textContent = element.textContent.replace(pattern, replacer);

}