window.addEventListener("load", solve);

function solve() {
  const fNameInput = document.getElementById('first-name')
  const lNameInput = document.getElementById('last-name')
  const ageInput = document.getElementById('age')
  const storyTitleInput = document.getElementById('story-title')
  const genreInput = document.getElementById('genre')
  const storyInput = document.getElementById('story')
  const publishSection = document.getElementById('preview-list')
  const publishBtn = document.getElementById('form-btn')
  let mainRootDivEl = document.getElementById('main')
  

  publishBtn.addEventListener('click', publishStory)

  function publishStory(e) {
    e.preventDefault()
    let fname = fNameInput.value
    let lname = lNameInput.value
    let age = ageInput.value
    let storyTitle = storyTitleInput.value
    let genre = genreInput.value
    let story = storyInput.value

    if (!fname || !lname || !age || !storyTitle || !genre || !story) {
      return
    }
    
    let liRootEl = document.createElement('li')
    let articleEl = document.createElement('article')
    let h4NameEl = document.createElement('h4')
    let pAgeEl = document.createElement('p')
    let pTitleEl = document.createElement('p')
    let pGenreEl = document.createElement('p')
    let pStoryEl = document.createElement('p')

    let saveBtn = document.createElement('button')
    let editBtn = document.createElement('button')
    let deleteBtn = document.createElement('button')

    saveBtn.textContent = `Save Story`
    editBtn.textContent = `Edit Story`
    deleteBtn.textContent = `Delete Story`

    saveBtn.classList.add('save-btn')
    editBtn.classList.add('edit-btn')
    deleteBtn.classList.add('delete-btn')
    liRootEl.classList.add('story-info')

    h4NameEl.textContent = `Name: ${fname} ${lname}`
    pAgeEl.textContent = `Age: ${age}`
    pTitleEl.textContent = `Title: ${storyTitle}`
    pGenreEl.textContent = `Genre: ${genre}`
    pStoryEl.textContent = story

    liRootEl.appendChild(articleEl)
    articleEl.appendChild(h4NameEl)
    articleEl.appendChild(pAgeEl)
    articleEl.appendChild(pTitleEl)
    articleEl.appendChild(pGenreEl)
    articleEl.appendChild(pStoryEl)

    liRootEl.appendChild(saveBtn)
    liRootEl.appendChild(editBtn)
    liRootEl.appendChild(deleteBtn)

    publishSection.appendChild(liRootEl)


    publishBtn.disabled = true

    saveBtn.addEventListener('click', saveStory)
    deleteBtn.addEventListener('click', deleteStory)
    editBtn.addEventListener('click', editStory)
  }

  function deleteStory(e) {
    e.currentTarget.parentElement.remove()
    publishBtn.disabled = false
  }

  function saveStory(e) {
    document.getElementById('main').querySelectorAll('div').forEach(x => x.remove())
    let h1El = document.createElement('h1')
    h1El.textContent = 'Your scary story is saved!'
    mainRootDivEl.appendChild(h1El)
    

  }
  function editStory(e) {
    console.log(e);
    let liEl = e.currentTarget.parentElement
    liEl.remove()
    publishBtn.disabled = false
  }

}
