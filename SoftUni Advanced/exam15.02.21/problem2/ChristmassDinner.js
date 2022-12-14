class ChristmasDinner {
  constructor(budget) {
    if (budget < 0) {
        throw new Error("The budget cannot be a negative number");
      }
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  shopping(product) {
    let productName = product[0]
    let price = product[1]
    price = Number(price);

    if (this.budget < price) {
        throw new Error("Not enough money to buy this product")
    }
    this.products.push(productName)
    this.budget -= price;
    return `You have successfully bought ${productName}!`
  }

  recipes(recipe){
    let neededProducts = recipe.productsList;
    neededProducts.forEach(p => {
        if (!this.products.includes(p)) {
            throw new Error("We do not have this product")
        }
    });
    this.dishes.push(recipe)
    return `${recipe.recipeName} has been successfully cooked!`
  }

  inviteGuests(name, dish){
    let currentDish = this.dishes.find(d =>d.recipeName === dish)
    let existingGuest = this.guests[name];

    if (!currentDish) {
        throw new Error("We do not have this dish")
    }
    if (existingGuest) {
        throw new Error("This guest has already been invited")
    }
    this.guests[name] = currentDish
    return `You have successfully invited ${name}!`
  }
  showAttendance(){
    let output = [];
    Object.entries(this.guests).forEach(g =>{
        output.push(`${g[0]} will eat ${g[1].recipeName}, which consists of ${g[1].productsList.join(', ')}`)
    })
    return output.join('\n')
  }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
