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

        modelInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
        yearInput.value = '';

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
        let contentsRowElement = document.createElement('tr');
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');
        let totalPriceElement = document.querySelector('.total-price');

        
        InfoBtn.textContent = 'More Info';
        InfoBtn.classList.add('moreBtn')
        buyItNowBtn.textContent = 'Buy it';
        buyItNowBtn.classList.add('buyBtn');

        InfoBtn.addEventListener('click', (e)=> {
            if (e.currentTarget.textContent == 'More Info') {  
                contentsRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info';
            } else {
                contentsRowElement.style.display = 'none';
                e.currentTarget.textContent = 'More Info';
            }
        });

        buyItNowBtn.addEventListener('click', (e)=>{
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            rowEl.remove();
            contentsRowElement.remove();
        });
        

        modelCellEl.textContent = model
        priceCelEl.textContent = price.toFixed(2)

        actionsCellElement.appendChild(InfoBtn);
        actionsCellElement.appendChild(buyItNowBtn);

        rowEl.classList.add('info');

        rowEl.appendChild(modelCellEl);
        rowEl.appendChild(priceCelEl);
        rowEl.appendChild(actionsCellElement);

        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan', 3);
        descriptionContentElement.textContent = `Description: ${description}`;

        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';

        
        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);
     
        furnitureListEl.appendChild(rowEl);
        furnitureListEl.appendChild(contentsRowElement);
        
    })
}
