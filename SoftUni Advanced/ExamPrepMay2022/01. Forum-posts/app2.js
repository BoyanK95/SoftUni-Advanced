window.addEventListener("load", solve);

function solve() {
    const postTitleInput = document.getElementById('post-title');
    const postCategoryInput = document.getElementById('post-category');
    const postContentInput = document.getElementById('post-content');
    const publishBtn = document.getElementById('publish-btn');
    const approveSection = document.getElementById('published-list')
    const clearBtn = document.getElementById('clear-btn');

    clearBtn.addEventListener('click', clearPost)

    const reviewUlEl = document.getElementById('review-list')

    publishBtn.addEventListener('click', (e)=>{
        if (!postTitleInput.value || !postCategoryInput.value || !postContentInput) {
            return;
        }
        let title = postTitleInput.value;
        let category = postCategoryInput.value;
        let content = postContentInput.value;

        postTitleInput.value = '';
        postCategoryInput.value = '';
        postContentInput.value = '';

        let liElement = document.createElement('li');
        liElement.classList.add('rpost');
        reviewUlEl.appendChild(liElement);
        
        let articleEl = document.createElement('article');
        liElement.appendChild(articleEl);

        let hElement = document.createElement('h4')
        hElement.textContent = title;
        articleEl.appendChild(hElement);

        const pElement = document.createElement('p');
        pElement.textContent = `Category: ${category}`;
        articleEl.appendChild(pElement);

        const pContentElement = document.createElement('p');
        pContentElement.textContent = `Content: ${content}`;
        articleEl.appendChild(pContentElement);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.setAttribute('class', 'action-btn edit');
        liElement.appendChild(editBtn);

        const approveBtn = document.createElement('button');
        approveBtn.textContent = 'Approve';
        approveBtn.setAttribute('class', 'action-btn approve');
        liElement.appendChild(approveBtn);


        editBtn.addEventListener('click', editPost)
        approveBtn.addEventListener('click', aprovePost)
    });

    function editPost(e) {
        let currentPost = e.target.parentElement;
        let articleContent = currentPost.getElementsByTagName('article')[0].children;

        let titleValue = articleContent[0].textContent;
        let categoryValue = articleContent[1].textContent;
        let contentValue = articleContent[2].textContent;

        postTitleInput.value = titleValue;
        postCategoryInput.value = categoryValue.split(': ')[1];
        postContentInput.value = contentValue.split(': ')[1];

        currentPost.remove()
    }

    function aprovePost(e) {
        let currentPost = e.target.parentElement;
        approveSection.appendChild(currentPost)
        currentPost.querySelectorAll('button').forEach(btn => btn.remove())
    }

    function clearPost(e) {
        Array.from(approveSection.children).forEach(li => li.remove());
    }
}