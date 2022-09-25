function subtract() {
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;
  const result = document.getElementById("result");
  num1 = Number(num1);
  num2 = Number(num2);

  let subtraction = num1 - num2;

  result.innerHTML = subtraction;

  console.log(result);
}
