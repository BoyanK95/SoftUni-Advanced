function sortCatalogue(inputArr) {
    let products = {}
    for (let item of inputArr) {
        let [productName, productPrice] = item.split(" : ");
        productPrice = Number(productPrice);
       if (!products.hasOwnProperty(productName[0])) {
            products[productName[0]] = {}
       }
       products[productName[0]][productName] = productPrice
    }
    let entries = Object.entries(products).sort((a, b)=> a[0][0].localeCompare(b[0][0]));
    
    for (let i of entries) {
        console.log(i[0]);
        Object.keys(i[1]).sort((a,b) => a.localeCompare(b)).forEach((el) => console.log(`  ${el}: ${i[1][el]}`))
        
    }
}

sortCatalogue(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])