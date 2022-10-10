window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById('add');
    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');
    const furnitureListEl = document.getElementById('furniture-list');

    addBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        let model = modelInput.value
        let year = Number(yearInput.value)
        let description = descriptionInput.value;
        let price = Number(priceInput.value)

        if (!model || !description) {
            return;
        }
        if (year <= 0 && price <= 0) {
            return;
        }

        let rowEl = document.createElement('tr');

        let modelCellEl = document.createElement('td');
        let priceCelEl = document.createElement('td');
        let actionsCellElement = document.createElement('td');
        let InfoBtn = document.createElement('button');
        let buyItNowBtn = document.createElement('button');
        let contentsRowElement = document.createElement('tr')
        let yearContentEl = document.createElement('td');
        let descrContentEl = document.createElement('td');
        
        InfoBtn.textContent = 'More Info';
        InfoBtn.classList.add('moreBtn')
        buyItNowBtn.textContent = 'Buy it';
        buyItNowBtn.classList.add('buyBtn');

        InfoBtn.addEventListener('click', (e)=> {
            if (e.currentTarget.textContent == 'More Info') {  
                e.currentTarget.textContent = 'Less Info';
            } else {
                e.currentTarget.textContent = 'More Info';
            }
        })
        

        modelCellEl.textContent = model
        priceCelEl.textContent = price.toFixed(2)

        actionsCellElement.appendChild(InfoBtn);
        actionsCellElement.appendChild(buyItNowBtn);

        rowEl.classList.add('info');

        rowEl.appendChild(modelCellEl);
        rowEl.appendChild(priceCelEl);
        rowEl.appendChild(actionsCellElement);

        yearContentEl.textContent = `Year: ${year}`;
        descrContentEl.setAttribute('colspan', 3);
        descrContentEl.textContent = `Description: ${description}`;

        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'content';
     
        furnitureListEl.appendChild(rowEl);
        furnitureListEl.appendChild(contentsRowElement);

        
        


        
    })
}
