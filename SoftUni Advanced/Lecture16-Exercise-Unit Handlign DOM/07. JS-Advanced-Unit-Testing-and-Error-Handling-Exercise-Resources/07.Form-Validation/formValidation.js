function validate() {
  let userName = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confurmPassword = document.getElementById("confirm-password");
  let isCompany = document.getElementById("company");
  let submitBtn = document.getElementById("submit");

  isCompany.addEventListener("change", (e) => {
    if (isCompany.checked) {
      document.getElementById("companyInfo").style.display = "block";
    } else {
      document.getElementById("companyInfo").style.display = "none";
    }
  });

  submitBtn.addEventListener("click", (e) => {
    console.log(e);
    let validOut = [];

    let userTest = /^[A-Za-z0-9]{3,20}$/;
    let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
    let passTest = /^[\w]{5,15}$/;

    if (userTest.exec(userName.value) === null) {
      userName.style.borderColor = "red";
      validOut.push(false);
    } else {
      userName.style.borderColor = "";
      validOut.push(true);
    }

    if (emailTest.exec(email.value) === null) {
      email.style.borderColor = "red";
      validOut.push(false);
    } else {
      email.style.borderColor = "";
      validOut.push(true);
    }

    if (
      password.value === confurmPassword.value &&
      passTest.exec(password.value) !== null
    ) {
      confurmPassword.style.borderColor = "";
      password.style.borderColor = "";
      validOut.push(true);
    } else {
      confurmPassword.style.borderColor = "red";
      password.style.borderColor = "red";
      validOut.push(false);
    }

    if (isCompany.checked) {
      let company = document.getElementById("companyNumber");
      if (company.value < 1000 || company.value > 9999) {
        company.style.borderColor = "red";
        validOut.push(false);
      } else {
        company.style.borderColor = "";
        validOut.push(true);
      }
    }

    if (validOut.includes(false)) {
      document.getElementById("valid").style.display = "block";
    } else {
      document.querySelector("#valid").style.display = "none";
    }
  });
}
