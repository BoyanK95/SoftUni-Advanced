window.addEventListener('load', solve);

function solve() {
    const typeInput = document.getElementById('type-product')
    const descriptionInput = document.getElementById('description')
    const nameInput = document.getElementById('client-name')
    const phoneInput = document.getElementById('client-phone')
    const sendFormBtn = document.querySelector('button')
    const recOrdersRootSection = document.getElementById('received-orders')
    const completedOrdersSection = document.getElementById('completed-orders')
    const clearBtn = document.getElementsByClassName('clear-btn')[0]

    clearBtn.addEventListener('click', clearOrders)

    sendFormBtn.addEventListener('click', sendForm)

    function sendForm(e) {
        e.preventDefault()
        let type = typeInput.value
        let description = descriptionInput.value
        let clientName = nameInput.value
        let phone = phoneInput.value

        if (!description || !clientName || !phone) {
            return
        }
        let divContainer = createDiv(type, description, clientName, phone)
        recOrdersRootSection.appendChild(divContainer)

        descriptionInput.value = ''
        nameInput.value = ''
        phoneInput.value = ''
        typeInput.value = ''

    }
    function createDiv(type, description, clientName, phone) {
        const divContainer = document.createElement('div')
        divContainer.classList.add('container')
        const h2El = document.createElement('h2') 
        const h3El = document.createElement('h3') 
        const h4El = document.createElement('h4') 
        const startRepairBtn = document.createElement('button') 
        const finishRepairBtn = document.createElement('button')
        startRepairBtn.className = 'start-btn' 
        finishRepairBtn.className = 'finish-btn' 
        finishRepairBtn.setAttribute('disabled', true)

        h2El.textContent = `Product type for repair: ${type}`
        h3El.textContent = `Client information: ${clientName}, ${phone}`
        h4El.textContent = `Description of the problem: ${description}`

        startRepairBtn.textContent = 'Start repair'
        finishRepairBtn.textContent = 'Finish repair'


        divContainer.appendChild(h2El)
        divContainer.appendChild(h3El)
        divContainer.appendChild(h4El)
        divContainer.appendChild(startRepairBtn)
        divContainer.appendChild(finishRepairBtn)

        startRepairBtn.addEventListener('click', startRepair)
        finishRepairBtn.addEventListener('click', finishRepair)
        
        return divContainer
    }

    function finishRepair(e) {
        let divEl = e.currentTarget.parentElement
        completedOrdersSection.appendChild(divEl)
        divEl.querySelectorAll('button').forEach(b=>b.remove())
    }

    function startRepair(e) {
        e.currentTarget.setAttribute('disabled', true)
        let finishBtn = e.currentTarget.parentElement.querySelectorAll('button')[1]
        finishBtn.disabled = false
    }

    function clearOrders(e) {
        e.currentTarget.parentElement
        .querySelectorAll('div')
        .forEach(div => div.remove())
    }
}