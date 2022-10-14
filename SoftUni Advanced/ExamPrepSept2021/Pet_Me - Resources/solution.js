function solve() {
    let addBtn = document.querySelector('button');
    const adoptionSection = document.getElementById('adoption')
    const firstUlEl = document.querySelectorAll('ul')[0]
    const adoptedSection = document.getElementById('adopted');
    

    addBtn.addEventListener('click', addPet)

    function addPet(e) {
        e.preventDefault()
        const petElements  = Array.from(e.currentTarget.parentElement.querySelectorAll('input'))
        if (!petElements[0].value || !petElements[1].value || !petElements[2].value || !petElements[3].value) {
            return;
        }
        if (parseInt(petElements[1].value) != petElements[1].value) {
            return
            
        }

        const liElement = document.createElement('li');
        let pEl = document.createElement('p');

        let name = petElements[0].value
        let age = petElements[1].value
        let kind = petElements[2].value
        let curentOwner = petElements[3].value

        pEl.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`

        let spantEl = document.createElement('span');
        spantEl.textContent = `Owner: ${curentOwner}`

        let buttonEl = document.createElement('button');
        buttonEl.textContent = 'Contact with owner';

        liElement.appendChild(pEl);
        liElement.appendChild(spantEl);
        liElement.appendChild(buttonEl);
        adoptionSection.querySelector('ul').appendChild(liElement);
        

        petElements[0].value = '';
        petElements[1].value = '';
        petElements[2].value = '';
        petElements[3].value = '';

        buttonEl.addEventListener('click', contactOwner)  
        
    }
    function contactOwner(e) {
        let rootEl = e.target.parentElement
        const newBtn = document.createElement('button');
        newBtn.textContent = 'Yes! I take it!'
        let newOwnerInput = document.createElement('input')
        newOwnerInput.setAttribute('placeholder', 'Enter your names');
        let divEl = document.createElement('div')
        
        e.target.remove()
        divEl.appendChild(newOwnerInput)
        divEl.appendChild(newBtn)
        rootEl.appendChild(divEl)
        
        newBtn.addEventListener('click', adopt)
    }
    function adopt(e) {
        let newPetOwner = e.currentTarget.parentElement.querySelector('input').value
        if (!newPetOwner) {
            return
        }
        let oldLiEl = e.currentTarget.parentElement.parentElement
        oldLiEl.querySelector('span').textContent = `Owner: ${newPetOwner}`
        
        oldLiEl.querySelector('div').remove()

        let checkedBtn = document.createElement('button');
        checkedBtn.textContent = 'Checked';
        oldLiEl.appendChild(checkedBtn);

        adoptedSection.querySelector('ul').appendChild(oldLiEl)
    
        checkedBtn.addEventListener('click', checkpoint)
    }
    function checkpoint(e) {
        e.target.parentElement.remove()
    }
}
