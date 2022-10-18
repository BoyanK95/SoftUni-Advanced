function solve() {
    const containerElement = document.getElementById('container')
    let inputFields = containerElement.querySelectorAll('input')
    const movieUlSection = document.getElementById('movies').querySelector('ul')
    
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
}