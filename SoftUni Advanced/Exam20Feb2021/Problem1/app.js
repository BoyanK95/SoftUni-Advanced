function solve(){
   const creatorInput = document.getElementById('creator');
   const titleInput = document.getElementById('title');
   const categoryInput = document.getElementById('category');
   const contentInput = document.getElementById('content');
   const postsSection = document.querySelector('main')
   const rootSection = postsSection.querySelector('section')

   const arhiveSection = document.getElementsByClassName('archive-section')[0]
   const archiveOlRootSection = arhiveSection.querySelector('ol')
   

   const createBtn = document.getElementsByClassName('btn create')[0]
   createBtn.addEventListener('click', createArticle)



   function createArticle(e) {
      e.preventDefault()
      let creator = creatorInput.value
      let title = titleInput.value
      let category = categoryInput.value
      let content = contentInput.value

      if (!creator || !title || !category || !content) {
         return
      }

      let articleElement = document.createElement('article');
      let h1El = document.createElement('h1');
      let pCategoryEl = document.createElement('p');
      let categoryStrongEl = document.createElement('strong');
      let creatorStrongEl = document.createElement('strong');
      let pCreatorEl  = document.createElement('p');
      let pPostEl  = document.createElement('p');

      const divBtnContainer = document.createElement('div')
      divBtnContainer.classList.add('buttons')
      const deleteBtn = document.createElement('button')
      deleteBtn.setAttribute('class', 'btn delete')
      const archiveBtn = document.createElement('button')
      archiveBtn.setAttribute('class', 'btn archive')
      divBtnContainer.appendChild(deleteBtn)
      divBtnContainer.appendChild(archiveBtn)
      
      deleteBtn.textContent = 'Delete'
      archiveBtn.textContent = 'Archive'
      
      h1El.textContent = title
      pPostEl.textContent = content
      categoryStrongEl.textContent = category;
      pCategoryEl.textContent = 'Category:'
      pCategoryEl.appendChild(categoryStrongEl)

      pCreatorEl.textContent = 'Creator:'
      creatorStrongEl.textContent = creator
      pCreatorEl.appendChild(creatorStrongEl)


      
      articleElement.appendChild(h1El)
      articleElement.appendChild(pCategoryEl)
      articleElement.appendChild(pCreatorEl)
      articleElement.appendChild(pPostEl)
      articleElement.appendChild(divBtnContainer)
      rootSection.appendChild(articleElement)
      
      creatorInput.value = '';
      titleInput.value = '';
      categoryInput.value = '';
      contentInput.value = '';

      deleteBtn.addEventListener('click', deleteArticle)
      archiveBtn.addEventListener('click', archiveArticle)
   }

   function deleteArticle(e) {
      e.currentTarget.parentElement.parentElement.remove()
      
   }

   function archiveArticle(e) {
      let liElement = document.createElement('li')
      let articleEl = e.currentTarget.parentElement.parentElement
      liElement.textContent = e.currentTarget.parentElement.parentElement.querySelector('h1').textContent
      
      let liArr = Array.from(archiveOlRootSection.querySelectorAll('li'))
     
       archiveOlRootSection.appendChild(liElement)
      liArr.sort((a, b)=> a.innerText > b.innerText?1:-1)
      articleEl.remove()
      debugger
      
   }
  }
