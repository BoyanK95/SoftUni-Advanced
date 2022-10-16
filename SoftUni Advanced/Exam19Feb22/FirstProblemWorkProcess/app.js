function solve() {
  const firstNameInput = document.getElementById("fname");
  const lastNameInput = document.getElementById("lname");
  const emailInput = document.getElementById("email");
  const birthInput = document.getElementById("birth");
  const positionInput = document.getElementById("position");
  const salaryInput = document.getElementById("salary");
  const hireWorkerBtn = document.getElementById("add-worker");
  const tbodyContainerEl = document.getElementById("tbody");
  const budgetSum = document.getElementById("sum");

  hireWorkerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      !firstNameInput.value ||
      !lastNameInput.value ||
      !emailInput.value ||
      !birthInput.value ||
      !positionInput.value ||
      !salaryInput.value
    ) {
      return;
    } else {
      addWorker(
        e,
        firstNameInput.value,
        lastNameInput.value,
        emailInput.value,
        birthInput.value,
        positionInput.value,
        salaryInput.value
      );

      firstNameInput.value = "";
      lastNameInput.value = "";
      emailInput.value = "";
      birthInput.value = "";
      positionInput.value = "";
      salaryInput.value = "";
    }
  });

  function addWorker(
    e,
    firstName,
    lastName,
    emailInput,
    birth,
    position,
    salary
  ) {
    let trRootEl = document.createElement("tr");
    let fnameTdEl = document.createElement("td");
    let lnameTdEl = document.createElement("td");
    let emailTdEl = document.createElement("td");
    let birthTdEl = document.createElement("td");
    let positionTdEl = document.createElement("td");
    let salaryTdEl = document.createElement("td");
    let buttonTd = document.createElement("td");

    let firedBtn = document.createElement("button");
    firedBtn.classList.add("fired");
    firedBtn.textContent = "Fired";
    buttonTd.appendChild(firedBtn);
    firedBtn.addEventListener('click', fireWorker)

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";
    buttonTd.appendChild(editBtn);
    editBtn.addEventListener("click", (e) =>
      editWorker(e, firstName, lastName, emailInput, birth, position, salary)
    );

    fnameTdEl.textContent = firstName;
    lnameTdEl.textContent = lastName;
    emailTdEl.textContent = emailInput;
    birthTdEl.textContent = birth;
    positionTdEl.textContent = position;
    salaryTdEl.textContent = salary;

    trRootEl.appendChild(fnameTdEl);
    trRootEl.appendChild(lnameTdEl);
    trRootEl.appendChild(emailTdEl);
    trRootEl.appendChild(birthTdEl);
    trRootEl.appendChild(positionTdEl);
    trRootEl.appendChild(salaryTdEl);
    trRootEl.appendChild(buttonTd);
    tbodyContainerEl.appendChild(trRootEl);

    let budgetSumNum = Number(budgetSum.innerText);
    salary = Number(salary);

    budgetSum.textContent = (budgetSumNum + salary).toFixed(2);
  }

  function editWorker(
    e,
    _firstName,
    _lastName,
    _emailInput,
    _birth,
    _position,
    _salary
  ) {
    e.preventDefault()
    firstNameInput.value = _firstName;
    lastNameInput.value = _lastName;
    emailInput.value = _emailInput;
    birthInput.value = _birth;
    positionInput.value = _position;
    salaryInput.value = _salary;

    let budgetSumNum = Number(budgetSum.innerText);
    _salary = Number(_salary);
    budgetSumNum -= _salary

    budgetSum.textContent = budgetSumNum.toFixed(2)
    e.target.parentElement.parentElement.remove()
  }

  function fireWorker(e) {
    let currentSalary = Number(e.currentTarget.parentElement.parentElement.querySelectorAll('td')[5].textContent)
    let budget = Number(budgetSum.textContent)

    let resultSum = budget - currentSalary
    budgetSum.textContent = resultSum.toFixed(2)
    e.currentTarget.parentElement.parentElement.remove()
    
  }
}
solve();
