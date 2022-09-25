
function sum() {
  let firtsNum = document.getElementById("first").value;
  let secondNum = document.getElementById("second").value;

  let result = Number(firtsNum) + Number(secondNum);

  document.getElementById("result").textContent = `Result: ${result}`;
}
