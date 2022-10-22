window.addEventListener('load', solve);

function solve() {
    const genreInput = document.getElementById('genre')
    const nameInput = document.getElementById('name')
    const authorInput = document.getElementById('author')
    const dateInput = document.getElementById('date')
    const addBtn = document.getElementById('add-btn')
    const songColectionSection = document.getElementsByClassName('all-hits-container')[0]
    const likeSection = document.getElementsByClassName('likes')[0]
    const savedSongsSection = document.getElementsByClassName('saved-container')[0]

    addBtn.addEventListener('click', addSong)

    function addSong(e) {
        e.preventDefault()
        let genre = genreInput.value
        let nameOfSong = nameInput.value
        let author = authorInput.value
        let date = dateInput.value

        if (!genre || !nameOfSong || !author || !date) {
            return
        }
        let divRootEl = document.createElement('div')
        let imgEl = document.createElement('img')
        let h2GenreEl = document.createElement('h2')
        let h2NameEl = document.createElement('h2')
        let h2AuthorEl = document.createElement('h2')
        let h3DateEl = document.createElement('h3')
        let saveBtn = document.createElement('button')
        let likeBtn = document.createElement('button')
        let deleteBtn = document.createElement('button')

        imgEl.src = './static/img/img.png'
        h2GenreEl.textContent = `Genre: ${genre}`
        h2NameEl.textContent = `Name: ${nameOfSong}`
        h2AuthorEl.textContent = `Author: ${author}`
        h3DateEl.textContent = `Date: ${date}`

        saveBtn.textContent = `Save song`
        likeBtn.textContent = `Like song`
        deleteBtn.textContent = `Delete`

        saveBtn.classList.add('save-btn')
        likeBtn.classList.add('like-btn')
        deleteBtn.classList.add('delete-btn')
        divRootEl.classList.add('hits-info')

        divRootEl.appendChild(imgEl)
        divRootEl.appendChild(h2GenreEl)
        divRootEl.appendChild(h2NameEl)
        divRootEl.appendChild(h2AuthorEl)
        divRootEl.appendChild(h3DateEl)
        divRootEl.appendChild(saveBtn)
        divRootEl.appendChild(likeBtn)
        divRootEl.appendChild(deleteBtn)
        songColectionSection.appendChild(divRootEl)

        saveBtn.addEventListener('click', saveSong)
        likeBtn.addEventListener('click', likeSong)
        deleteBtn.addEventListener('click', deleteSong)
    }

    function saveSong(e) {
        let divEl = e.currentTarget.parentElement
        let buttonArr = Array.from(divEl.querySelectorAll('button'))
        buttonArr.forEach(button => {
            if (button.className === 'delete-btn') {
                return
            }else{
                button.remove()
            }
        });
        savedSongsSection.appendChild(divEl)
    }
    function likeSong(e) {
        let totalLikes = Number(likeSection.querySelector('p').textContent.split(': ')[1])
        totalLikes++
        likeSection.querySelector('p').textContent = `Total Likes: ${totalLikes}`
        const likeBtn = e.currentTarget
        likeBtn.disabled = true
        
    }
    function deleteSong(e) {
        e.currentTarget.parentElement.remove()
    }
}