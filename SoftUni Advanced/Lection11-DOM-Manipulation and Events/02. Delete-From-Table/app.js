function deleteByEmail() {
    let emailInput = document.querySelector('input[name = "email"]');
    let resultEl = document.getElementById('result')
    let custumersEmails = document.querySelectorAll('tr td:nth-of-type(2)');

    let custumersArr = Array.from(custumersEmails)
    let targetElement = custumersArr.find(x => x.textContent == emailInput.value);
    
    if (targetElement) {
        targetElement.parentNode.remove();
        resultEl.textContent = 'Deleted.'
    }else{
        resultEl.textContent = 'Not found';
    }
}

    //Old Way of deleting  child elements
    //  targetElement.parentNode.removeChild(targetElement);


    //New and easyer way of deleting childNodes
    // targetElement.remove()

    //Deleting the whole parrent row
