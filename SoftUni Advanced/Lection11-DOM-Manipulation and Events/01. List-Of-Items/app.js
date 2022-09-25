function addItem() {
    let ulItems = document.getElementById('items');
    let newItem = document.getElementById('newItemText');
    
    let liElement = document.createElement('li');
    liElement.textContent = newItem.value;

    ulItems.appendChild(liElement);

    
}