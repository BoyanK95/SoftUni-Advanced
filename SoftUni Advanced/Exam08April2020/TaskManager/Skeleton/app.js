function solve() {

    const taskInput = document.getElementById('task');
    const descrInput = document.getElementById('description')
    const dueDateInput = document.getElementById('date')
    const addBtn = document.getElementById('add')
    const openSectionRootDiv = document.querySelectorAll('div')[4]
    const inProgressSectionRootDiv = document.getElementById('in-progress')

    addBtn.addEventListener('click', addTast)

    function addTast(e) {
        e.preventDefault()
        let taskName = taskInput.value
        let description = descrInput.value
        let date = dueDateInput.value

        if (!taskName || !description || !date) {
            return
        }
        const articleRootEl = document.createElement('article')
        const h3El = document.createElement('h3')
        h3El.textContent = taskName
        const descEl = document.createElement('p')
        descEl.textContent = `Description: ${description}`
        const dateEl = document.createElement('p')
        dateEl.textContent = `Due Date: ${date}`

        const divBtnEl = document.createElement('div')
        divBtnEl.classList.add('flex')
        const startBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')
        startBtn.textContent = 'Start'
        deleteBtn.textContent = 'Delete'
        startBtn.className = `green`
        deleteBtn.className = `red`
        
        divBtnEl.appendChild(startBtn)
        divBtnEl.appendChild(deleteBtn)

        articleRootEl.appendChild(h3El)
        articleRootEl.appendChild(descEl)
        articleRootEl.appendChild(dateEl)
        articleRootEl.appendChild(divBtnEl)

        openSectionRootDiv.appendChild(articleRootEl)



        startBtn.addEventListener('click', startTast)
        deleteBtn.addEventListener('click', deleteTask)

        taskInput.value = ''
        descrInput.value = ''
        dueDateInput.value = ''
    }
    function startTast(e) {
        let articleEl = e.currentTarget.parentElement.parentElement
        articleEl.querySelector('div').remove()
        const btnDiv = document.createElement('div')
        const deleteBtn = document.createElement('button')
        const finishBtn = document.createElement('button')
        btnDiv.classList.add('flex')
        deleteBtn.classList.add('red')
        finishBtn.classList.add('orange')

        deleteBtn.textContent = 'Delete'
        finishBtn.textContent = 'Finish'

        btnDiv.appendChild(deleteBtn)
        btnDiv.appendChild(finishBtn)
        articleEl.appendChild(btnDiv)
        inProgressSectionRootDiv.appendChild(articleEl)
        
        deleteBtn.addEventListener('click', deleteTask)
        finishBtn.addEventListener('click', finishTask)
    }

    function deleteTask(e) {
        e.currentTarget.parentElement.parentElement.remove()
    }

    function finishTask(e) {
        let articleEl = e.currentTarget.parentElement.parentElement
        document.querySelectorAll('div')[9].appendChild(articleEl)
        articleEl.querySelector('div').remove()
    }
}