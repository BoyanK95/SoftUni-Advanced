function sumTable() {
  let tables = document.querySelectorAll("td");
  let sum = document.getElementById("sum");

  let result = 0
  
  for (let i = 1; i < tables.length - 1; i+=2) {
    let number = Number(tables[i].innerHTML);
    
    result += number
  }
   sum.innerHTML = result
}
