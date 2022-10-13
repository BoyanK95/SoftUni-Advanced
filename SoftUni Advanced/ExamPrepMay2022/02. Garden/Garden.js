class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }
  addPlant(plantName, spaceRequired) {
    // The plantName is of type string, while the spaceRequired is of type number.
    // • If there is not enough space in the garden for the new plant, throw an Error:
    // "Not enough space in the garden."
    if (spaceRequired > this.spaceAvailable) {
      throw new Error("Not enough space in the garden.");
    }
    // • Otherwise, this function should add the plant with the properties: plantName, spaceRequired, ripe: default false, quantity: default 0 to the plants array, reduce the space available with the space required by the plant, and return:
    // "The {plantName} has been successfully planted in the garden."
    // NOTE: Plant names will be unique
    let currentPlant = {
        plantName,
        spaceRequired,
        ripe: false,
        quantity: 0
    }
    this.plants.push(currentPlant);
    this.spaceAvailable -= spaceRequired;
    return `The ${plantName} has been successfully planted in the garden.`
  }

  ripenPlant(plantName, quantity){
    let currentPlant = this.plants.find(plant => plant.plantName === plantName);
// The quantity is of type number.
// • If the plant is not found, throw an Error:
// "There is no {plantName} in the garden."
// • If the plant is already ripe, throw an Error:
// "The {plantName} is already ripe."
    if (!currentPlant) {
        throw new Error(`There is no ${plantName} in the garden.`);
    }
    
    if (currentPlant.ripe) {
        throw new Error(`The ${plantName} is already ripe.`);
    }
// • If the received quantity is less than or equal to 0, throw an Error:
// "The quantity cannot be zero or negative."
    if (quantity <= 0) {
        throw new Error(`The quantity cannot be zero or negative.`);
    }
// • Otherwise, this function should set the ripe property of the particular plant to true and add the quantity to the quantity property of the plant. If the quantity passed as a parameter is 1, return:
// "{quantity} {plantName} has successfully ripened."
// If the quantity parameter is greater than 1, return:
// "{quantity} {plantName}s have successfully ripened.
    currentPlant.ripe = true;
    currentPlant.quantity = quantity;
    
    let returnMSG = quantity === 1 ?
     `${quantity} ${plantName} has successfully ripened.` :
    `${quantity} ${plantName}s have successfully ripened.`

    return returnMSG;
  }

  harvestPlant(plantName){
    
  }

}

const myGarden = new Garden(250)

console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));