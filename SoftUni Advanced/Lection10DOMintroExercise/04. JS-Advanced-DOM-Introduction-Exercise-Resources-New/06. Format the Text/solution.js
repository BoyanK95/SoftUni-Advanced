function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output")
  let arrText = input.split(".").filter(x=>x.length>0);
  

  for (let i = 0; i < arrText.length; i += 3) {
    let res = [];
    for (let x = 0; x < 3; x++) {
      if (arrText[i + x]) {
        res.push(arrText[i+x])
      }
    }
    let resText = res.join(". ") + ".";
    output.innerHTML += `<p>${resText}</p>`;
  }

}
