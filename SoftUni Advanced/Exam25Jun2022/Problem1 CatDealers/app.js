window.addEventListener("load", solve);

function solve() {
  const modelInput = document.getElementById('model')
  const makeInput = document.getElementById('make');
  const yearInput = document.getElementById('year');
  const fuelTypeInput = document.getElementById('fuel');
  const costInput = document.getElementById('original-cost');
  const sellPriceInput = document.getElementById('selling-price');
  const tableBodySection = document.getElementById('table-body');
  const soldCarsSection = document.getElementById('cars-list');
  let totalProfitMadeInput = document.getElementById('profit')

  

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
    editBtn.addEventListener('click', editCar)

    let sellBtn = document.createElement('button');
    sellBtn.className = "action-btn sell";
    sellBtn.textContent = 'Sell'
    sellBtn.addEventListener('click', sellCar)

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
  function editCar(e) {
    let dataEl = e.currentTarget.parentElement.parentElement
    makeInput.value = dataEl.querySelectorAll('td')[0].textContent
    modelInput.value = dataEl.querySelectorAll('td')[1].textContent
    yearInput.value = dataEl.querySelectorAll('td')[2].textContent
    fuelTypeInput.value = dataEl.querySelectorAll('td')[3].textContent
    costInput.value = dataEl.querySelectorAll('td')[4].textContent
    sellPriceInput.value = dataEl.querySelectorAll('td')[5].textContent

    dataEl.remove()
  }

  function sellCar(e) {
    let dataEl = e.currentTarget.parentElement.parentElement;
    let totalProfit = Number(totalProfitMadeInput.innerText)
    let make = dataEl.querySelectorAll('td')[0].textContent;
    let model = dataEl.querySelectorAll('td')[1].textContent;
    let year = dataEl.querySelectorAll('td')[2].textContent
    let costPrice = Number(dataEl.querySelectorAll('td')[4].textContent);
    let sellPrice = Number(dataEl.querySelectorAll('td')[5].textContent);
    let profitFromCar = sellPrice - costPrice

    totalProfit += profitFromCar;
    Math.round(totalProfit).toFixed(2)

    let rootLiEl = document.createElement('li')
    rootLiEl.classList.add('each-list');

    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    let span3 = document.createElement('span')

    span1.textContent = `${make} ${model}`;
    span2.textContent = `${year}`;
    span3.textContent = profitFromCar;

    rootLiEl.appendChild(span1)
    rootLiEl.appendChild(span2)
    rootLiEl.appendChild(span3)
    soldCarsSection.appendChild(rootLiEl);

    dataEl.remove();

    totalProfitMadeInput.textContent = totalProfit.toFixed(2)
    
  }
}
