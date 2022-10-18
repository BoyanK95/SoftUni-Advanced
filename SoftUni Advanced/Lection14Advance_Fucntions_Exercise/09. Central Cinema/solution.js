function solve() {
    const containerElement = document.getElementById('container')
    let inputFields = containerElement.querySelectorAll('input')
    const movieUlSection = document.getElementById('movies').querySelector('ul')
    const archiveSection = document.getElementById('archive')
    const ulArchiveRoot = archiveSection.querySelector('ul')
    let archiveSectionBtns = Array.from(archiveSection.querySelectorAll('button'))

    for (let button of archiveSectionBtns) {
        if (button.textContent == 'Clear') {
            button.addEventListener('click', clear)
        }
    }
    function clear(e) {
        let liElements = Array.from(e.currentTarget.parentElement.querySelectorAll('li'))
        liElements.forEach(element => {
            element.remove()
        });
        
    }

    
    
    const onScreenBtn = document.querySelector('button')
    onScreenBtn.addEventListener('click', createMovie)

    function createMovie(e) {
        e.preventDefault()
        let nameInput = inputFields[0].value
        let hall = inputFields[1].value
        let ticketPrice = inputFields[2].value

        

        if (!nameInput || !hall || !ticketPrice) {
            return
        }
       
        ticketPrice = Number(ticketPrice)
        createLiItem(nameInput, hall, ticketPrice)

        inputFields[0].value = '';
        inputFields[1].value = '';
        inputFields[2].value = '';

    }
    function createLiItem(nameInput, hall, ticketPrice) {
        let liRootEl = document.createElement('li');
        let spanNameEl = document.createElement('span')
        let strongHallEl = document.createElement('strong')

        let divEl = document.createElement('div')
        let stronPriceEl = document.createElement('strong')
        let inputEl = document.createElement('input')
        inputEl.setAttribute('placeholder', 'Tickets Sold')
        let archiveBtn = document.createElement('button')
        archiveBtn.textContent = 'Archive'
        
        archiveBtn.addEventListener('click', archive)

        spanNameEl.textContent = nameInput
        strongHallEl.textContent = `Hall: ${hall}`

        stronPriceEl.textContent = ticketPrice.toFixed(2)

        liRootEl.appendChild(spanNameEl)
        liRootEl.appendChild(strongHallEl)

        divEl.appendChild(stronPriceEl)
        divEl.appendChild(inputEl)
        divEl.appendChild(archiveBtn)
        liRootEl.appendChild(divEl)
        movieUlSection.appendChild(liRootEl)
    }
    function archive(e) {
        let movieName = e.currentTarget.parentElement.parentElement.querySelector('span').textContent
        let priceOfTicket = e.currentTarget.parentElement.querySelector('strong').textContent
        priceOfTicket = Number(priceOfTicket)
        let ticketSold = e.currentTarget.parentElement.querySelector('input').value
        ticketSold = Number(ticketSold);
        let totalSum = priceOfTicket * ticketSold
        if (!ticketSold) {
            return
        }
        let liRootEl = document.createElement('li')
        let spanNameEl = document.createElement('span')
        spanNameEl.textContent = movieName
        let strongTotalPriceEl = document.createElement('strong')
        strongTotalPriceEl.textContent = `Total amount: ${totalSum.toFixed(2)}`
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'

        deleteBtn.addEventListener('click', deleteCurrentLi)

        liRootEl.appendChild(spanNameEl)
        liRootEl.appendChild(strongTotalPriceEl)
        liRootEl.appendChild(deleteBtn)
        ulArchiveRoot.appendChild(liRootEl)
        e.currentTarget.parentElement.parentElement.remove()
    }

    function deleteCurrentLi(e) {
        e.currentTarget.parentElement.remove()
    }
}