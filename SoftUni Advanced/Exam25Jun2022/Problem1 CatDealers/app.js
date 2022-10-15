window.addEventListener("load", solve);

function solve() {
  const modelInput = document.getElementById('model')
  const makeInput = document.getElementById('make');
  const yearInput = document.getElementById('year');
  const fuelTypeInput = document.getElementById('fuel');
  const costInput = document.getElementById('original-cost');
  const sellPriceInput = document.getElementById('selling-price');
  const tableBodySection = document.getElementById('table-body');

  const publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publishCar);

  function publishCar(e) {
    e.preventDefault()
    let make = makeInput.value
    let model = modelInput.value
    let year = yearInput.value
    let fuel = fuelTypeInput.value
    let originalCost = Number(costInput.value)
    let sellPrice = Number(sellPriceInput.value)

    if (!make || !model || !fuel || !year || sellPrice < originalCost) {
      return;
    }
    createTable(make, model, year, fuel, originalCost, sellPrice)

    makeInput.value = '';
    modelInput.value = '';
    yearInput.value = '';
    fuelTypeInput.value = ''
    costInput.value = ''
    sellPriceInput.value = ''
  }
  function createTable(make, model, year, fuel, originalCost, sellPrice) {
    let tableRowEl = document.createElement('tr')
    tableRowEl.classList.add('row')

    let makeTdEl = document.createElement('td')
    let modelTdEl = document.createElement('td')
    let yearTdEl = document.createElement('td')
    let fuelTypeTdEl = document.createElement('td')
    let costPriceTdEl = document.createElement('td')
    let sellPriceTdEl = document.createElement('td')

    let btnTdContainer = document.createElement('td');
    
    let editBtn = document.createElement('button')
    editBtn.className = "action-btn edit";
    editBtn.textContent = `Edit`;

    let sellBtn = document.createElement('button');
    sellBtn.className = "action-btn sell";
    sellBtn.textContent = 'Sell'

    btnTdContainer.appendChild(editBtn)
    btnTdContainer.appendChild(sellBtn)


    makeTdEl.textContent = make
    modelTdEl.textContent = model
    yearTdEl.textContent = year
    fuelTypeTdEl.textContent = fuel
    costPriceTdEl.textContent = originalCost
    sellPriceTdEl.textContent = sellPrice

    tableRowEl.appendChild(makeTdEl)
    tableRowEl.appendChild(modelTdEl)
    tableRowEl.appendChild(yearTdEl)
    tableRowEl.appendChild(fuelTypeTdEl)
    tableRowEl.appendChild(costPriceTdEl)
    tableRowEl.appendChild(sellPriceTdEl)
    tableRowEl.appendChild(btnTdContainer)
    tableBodySection.appendChild(tableRowEl)
  }
}
