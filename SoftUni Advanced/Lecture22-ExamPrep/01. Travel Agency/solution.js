window.addEventListener('load', solution);

function solution() {
  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');

  const block = document.getElementById('block');
  let infoPreviewUlElement = document.getElementById('infoPreview')

  // submitBtn.disabled = fasle;
  // editBtn.disabled = true;
  // continueBtn.disabled = true;

  const fullNameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const phoneNumInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const postalCodeInput = document.getElementById('code');

  const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));

  submitBtn.addEventListener('click', (e)=>{
    if (!fullNameInput.value || !emailInput) {
      return
    }else {
      let fullName = document.createElement('li')
      fullName.textContent = `Full Name: ${fullNameInput.value}`;
      infoPreviewUlElement.appendChild(fullName);
      fullNameInput.value = '';

      let email = document.createElement('li')
      email.textContent = `Email: ${emailInput.value}`;
      infoPreviewUlElement.appendChild(email);
      emailInput.value = '';

      let phoneNum = document.createElement('li')
      phoneNum.textContent = `Phone Number: ${phoneNumInput.value}`;
      infoPreviewUlElement.appendChild(phoneNum);
      phoneNumInput.value = '';
      
      let address = document.createElement('li')
      address.textContent = `Address: ${addressInput.value}`;
      infoPreviewUlElement.appendChild(address);
      addressInput.value = '';

      let postcode = document.createElement('li')
      postcode.textContent = `Postal Code: ${postalCodeInput.value}`;
      infoPreviewUlElement.appendChild(postcode);
      postalCodeInput.value = '';

      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;
    }
  });

  editBtn.addEventListener('click', (e)=>{
    let liItems = Array.from(e.target.parentElement.parentElement.querySelectorAll('li'));
    
    
    for (let i = 0; i < inputValues.length - 1; i++) {
      let value = liItems[i].textContent.split(': ')[1]
      inputValues[i].value = value;
      liItems[i].remove();
    }

    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
    
  });

  continueBtn.addEventListener('click', (e)=>{
    block.innerHTML = '';

    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';

    block.appendChild(h3);
  })

}
