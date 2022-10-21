class CarDealership{
    constructor(name){
        this.name = name;
        this.availableCars = []
        this.soldCars = []
        this.totalIncome = 0
    }

    addCar (model, horsepower, price, mileage) {
        if (model === '' || Number(horsepower) < 0 || Number(price) < 0 || Number(mileage) < 0) {
            throw new Error("Invalid input!");
        }
        this.availableCars.push({model,horsepower,price,mileage})
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar (model, desiredMileage) {
        const searchedCar = this.availableCars.find(x => x.model === model);
        if (!searchedCar) {
            throw new Error(`${model} was not found!`)
        }
        if (searchedCar.mileage - desiredMileage > 0 && searchedCar.mileage <= 40000) {
            searchedCar.price *= 0.95;
        }else if(searchedCar.mileage - desiredMileage > 40000){
            searchedCar.price *= 0.9;
        }
        this.availableCars = this.availableCars.filter(x => x.model !== model)
        this.soldCars.push({
            model: searchedCar.model,
            horsepower: searchedCar.horsepower,
            soldPrice: searchedCar.price
         })
         this.totalIncome += searchedCar.price;
         return `${searchedCar.model} was sold for ${searchedCar.price.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return 'There are no available cars';
        }
        let result = ['-Available cars:'];
        this.availableCars.map(x => result.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`));
        return result.join('\n');
    }
    salesReport (criteria) {
        if (criteria === "horsepower" || criteria === "model") {
            criteria === "horsepower" ? 
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower):
            this.soldCars.sort((a, b)=> a.model.localeCompare(b.model))
            let result = [`"-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,  `-${this.soldCars.length} cars sold:`]
            this.soldCars.forEach(x => result.push(`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`))
            return result.join('\n')
        }else{
            throw new Error("Invalid criteria!") 

        }

    }
    
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));



