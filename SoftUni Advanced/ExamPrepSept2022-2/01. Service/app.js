window.addEventListener("load", solve);

function solve() {
    document.querySelector('button[type="submit"]').addEventListener('click', createTask);
    let productTypeInput = document.getElementById('type-product');
    let descriptionInput = document.getElementById('description');
    let nameInput = document.getElementById('client-name');
    let phoneNumInput = document.getElementById('client-phone');
    let recivedOrdersSection = document.getElementById('received-orders')
    const completeSection = document.getElementById('completed-orders');
    const clearBtn = document.querySelector('.clear-btn').addEventListener('click', clear)


    function createTask(e) {
        e.preventDefault()
        let productType = productTypeInput.value
        let description = descriptionInput.value
        let clienName = nameInput.value
        let phoneNum = phoneNumInput.value

        if (!description || !clienName || !phoneNum) {
            return
        }

        productType.value = '';
        descriptionInput.value = ''
        nameInput.value = ''
        phoneNumInput.value = ''

        createOrder(productType, description, clienName, phoneNum)
    }
    function createOrder(productType, description, clienName, phoneNum) {
        let divContainer = document.createElement('div');
        divContainer.classList.add('container');

        let h2El = document.createElement('h2');
        h2El.textContent = `Product type for repair: ${productType}`
        let h3El = document.createElement('h3');
        h3El.textContent = `Client information: ${clienName}, ${phoneNum}`
        let h4El = document.createElement('h4');
        h4El.textContent = `Description of the problem: ${description}`

        let startRepairBtn = document.createElement('button')
        startRepairBtn.classList.add('start-btn')
        startRepairBtn.textContent = 'Start repair'
        startRepairBtn.addEventListener('click', startRepair)

        let finishBtn = document.createElement('button');
        finishBtn.classList.add('finish-btn');
        finishBtn.addEventListener('click', finishRepair)
        finishBtn.textContent = 'Finish repair';
        finishBtn.setAttribute('disabled', true);

        divContainer.appendChild(h2El);
        divContainer.appendChild(h3El);
        divContainer.appendChild(h4El);
        divContainer.appendChild(startRepairBtn);
        divContainer.appendChild(finishBtn);
        recivedOrdersSection.appendChild(divContainer);
    }

    function startRepair(e) {
        let eBtn = e.currentTarget
        eBtn.setAttribute('disabled', true)
        e.currentTarget.parentElement.getElementsByClassName('finish-btn')[0].disabled = false
    }

    function finishRepair(e) {
        let divEl = e.currentTarget.parentElement
        completeSection.appendChild(divEl)
        Array.from(divEl.querySelectorAll('button')).forEach(btn => {
            btn.remove();
        });
    }
    function clear(e) {
        let divElArr = Array.from(e.currentTarget.parentElement.getElementsByClassName('container'))
        divElArr.forEach(div => {
            div.remove()
        });
    }
}