function solve() {
    const recInput = document.getElementById('recipientName')
    const titleInput = document.getElementById('title')
    const messageInput = document.getElementById('message')
    const ulListOfMailRootEl = document.getElementById('list')
    const ulSentMailsRootEl = document.getElementsByClassName('sent-list')[0]
    const trashRootEl = document.getElementsByClassName('delete-list')[0]

    const addBtn = document.getElementById('add')
    const resetBtn = document.getElementById('reset')
    addBtn.addEventListener('click', addMail)
    resetBtn.addEventListener('click', reset)

    function addMail(e) {
        e.preventDefault()
        let recName = recInput.value
        let title = titleInput.value
        let message = messageInput.value
        if (!recName || !title || !message) {
            return
        }

        let liRootEl = document.createElement('li')
        let h4TitleEl = document.createElement('h4')
        let h4NameEl = document.createElement('h4')
        let spanEl = document.createElement('span')
        let divBtnEl = document.createElement('div')
        let sendBtn = document.createElement('button')
        let deleteBtn = document.createElement('button')

        h4TitleEl.textContent = `Title: ${title}`
        h4NameEl.textContent = `Recipient Name: ${recName}`
        spanEl.textContent = `${message}`

        sendBtn.textContent = 'Send'
        deleteBtn.textContent = 'Delete'

        divBtnEl.setAttribute('id', 'list-action')
        sendBtn.setAttribute('id', 'send')
        sendBtn.setAttribute('type', 'submit')
        deleteBtn.setAttribute('type', 'submit')
        deleteBtn.setAttribute('id', 'delete')

        divBtnEl.appendChild(sendBtn)
        divBtnEl.appendChild(deleteBtn)
        liRootEl.appendChild(h4TitleEl)
        liRootEl.appendChild(h4NameEl)
        liRootEl.appendChild(spanEl)
        liRootEl.appendChild(divBtnEl)
        ulListOfMailRootEl.appendChild(liRootEl)

        sendBtn.addEventListener('click', sendMail)
        deleteBtn.addEventListener('click', deleteMail)

        recInput.value = ''
        titleInput.value = ''
        messageInput.value = ''
    }
    function sendMail(e) {
        let liEl = e.currentTarget.parentElement.parentElement
        let title = liEl.querySelectorAll('h4')[0].textContent.split(': ')[1]
        let recName = liEl.querySelectorAll('h4')[1].textContent.split(': ')[1]
        
        let liRootEl = document.createElement('li')
        let spanNameEl = document.createElement('span')
        let spantitleEl = document.createElement('span')
        let divBtnEl = document.createElement('div')
        let deleteBtn = document.createElement('button')

        spanNameEl.textContent = `To: ${recName}`
        spantitleEl.textContent = `Title: ${title}`
        deleteBtn.textContent = `Delete`
        deleteBtn.setAttribute('type', 'submit')
        deleteBtn.setAttribute('class', 'delete')
        divBtnEl.setAttribute('class', 'btn')

        divBtnEl.appendChild(deleteBtn)
        liRootEl.appendChild(spanNameEl)
        liRootEl.appendChild(spantitleEl)
        liRootEl.appendChild(divBtnEl)

        ulSentMailsRootEl.appendChild(liRootEl)

        deleteBtn.addEventListener('click', deleteMail)
        e.currentTarget.parentElement.parentElement.remove()
    }

    function deleteMail(e) {
        let liEl = e.currentTarget.parentElement.parentElement
        if (liEl.querySelector('h4')) {
            let title = liEl.querySelectorAll('h4')[0].textContent.split(': ')[1]
            let recName = liEl.querySelectorAll('h4')[1].textContent.split(': ')[1]

            let liRootEl = document.createElement('li')
            let spanNameEl = document.createElement('span')
            let spanTitleEl = document.createElement('span')

            spanNameEl.textContent = `To: ${recName}`
            spanTitleEl.textContent = `Title: ${title}`

            liRootEl.appendChild(spanNameEl)
            liRootEl.appendChild(spanTitleEl)
            trashRootEl.appendChild(liRootEl)

            liEl.remove()
        }else{
            let title = liEl.querySelectorAll('span')[0].textContent.split(': ')[1]
            let recName = liEl.querySelectorAll('span')[1].textContent.split(': ')[1]
    
            let liRootEl = document.createElement('li')
            let spanNameEl = document.createElement('span')
            let spanTitleEl = document.createElement('span')
    
            spanNameEl.textContent = `To: ${recName}`
            spanTitleEl.textContent = `Title: ${title}`
    
            liRootEl.appendChild(spanNameEl)
            liRootEl.appendChild(spanTitleEl)
            trashRootEl.appendChild(liRootEl)
    
            liEl.remove()
            debugger
        }

    }

    function reset(e) {
        e.preventDefault()
        let recName = recInput.value
        let title = titleInput.value
        let message = messageInput.value
        if (!recName || !title || !message) {
            return
        }
        recInput.value = ''
        titleInput.value = ''
        messageInput.value = ''
    }
}
solve()