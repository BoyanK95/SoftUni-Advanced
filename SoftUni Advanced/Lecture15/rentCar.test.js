const rentCar = require('./renCar')
const { assert, expect } = require('chai');


describe('Tests rentCar object funtionality', ()=>{
    describe('Tests searchCar method', ()=>{
        it('Throws invalid input error with string - first par and string -second',()=>{
            expect(()=>rentCar.searchCar('BMW', 'BMW')).to.throw('Invalid input!')
        })
        it('Throws invalid input error with boolean - first par and string -second',()=>{
            expect(()=>rentCar.searchCar(true, 'BMW')).to.throw('Invalid input!')
        })
        it('Throws invalid input error with undefined - first par and string -second',()=>{
            expect(()=>rentCar.searchCar(undefined, 'BMW')).to.throw('Invalid input!')
        })
        it('Throws invalid input error with obj - first par and string -second',()=>{
            expect(()=>rentCar.searchCar({}, 'BMW')).to.throw('Invalid input!')
        })
        it('Throws invalid input error with number - first par and string -second',()=>{
            expect(()=>rentCar.searchCar(7, 'BMW')).to.throw('Invalid input!')
        })
        it('Throws invalid input error with arr - first par and num -second',()=>{
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 7)).to.throw('Invalid input!')
        })
        it('Throws invalid input error with arr - first par and boolean -second',()=>{
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"], true)).to.throw('Invalid input!')
        })
        it('Throws invalid input error with arr - first par and undefined -second',()=>{
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"], undefined)).to.throw('Invalid input!')
        })
        it('Throws invalid input error with arr - first par and object -second',()=>{
            expect(()=>rentCar.searchCar(["Volkswagen", "BMW", "Audi"], {})).to.throw('Invalid input!')
        })
        it('Throws invalid input error with num - first par and object -second',()=>{
            expect(()=>rentCar.searchCar(7, {})).to.throw('Invalid input!')
        })
        it('Throws invalid input error with first par empty arr',()=>{
            expect(()=>rentCar.searchCar([], 'BMW')).to.throw('There are no such models in the catalog!')
        })
        it('Throws invalid input error with first par doesnt match second',()=>{
            expect(()=>rentCar.searchCar(['Audi', 'Porche'], 'BMW')).to.throw('There are no such models in the catalog!')
        })
        it('Returns car',()=>{
            expect(rentCar.searchCar(['Audi', 'BMW','Porche'], 'BMW')).to.equal(`There is 1 car of model BMW in the catalog!`)
        })
    })
    describe('Tests calculatePriceOfCar method', ()=>{
        it('Shoult throw error with number - first par and number - second',()=>{
            expect(()=>rentCar.calculatePriceOfCar(7,7)).to.throw('Invalid input!')
        })
        it('Shoult throw error with arr - first par and number - second',()=>{
            expect(()=>rentCar.calculatePriceOfCar([7],7)).to.throw('Invalid input!')
        })
        it('Shoult throw error with boolean - first par and number - second',()=>{
            expect(()=>rentCar.calculatePriceOfCar(true,7)).to.throw('Invalid input!')
        })
        it('Shoult throw error with undefined - first par and number - second',()=>{
            expect(()=>rentCar.calculatePriceOfCar(undefined,7)).to.throw('Invalid input!')
        })
        it('Shoult throw error with obj - first par and number - second',()=>{
            expect(()=>rentCar.calculatePriceOfCar({},7)).to.throw('Invalid input!')
        })
        it('Shoult throw error with undefined - first par and undefined - second',()=>{
            expect(()=>rentCar.calculatePriceOfCar(undefined,undefined)).to.throw('Invalid input!')
        })
        it('Shoult throw error with correct - first par and undefined - second',()=>{
            expect(()=>rentCar.calculatePriceOfCar('BMW',undefined)).to.throw('Invalid input!')
        })
        it('Shoult throw error with correct - first par and boolean - second',()=>{
            expect(()=>rentCar.calculatePriceOfCar('BMW',true)).to.throw('Invalid input!')
        })
        it('Shoult throw error with correct - first par and arr - second',()=>{
            expect(()=>rentCar.calculatePriceOfCar('BMW',[])).to.throw('Invalid input!')
        })
        it('Shoult throw error with correct - first par and string - second',()=>{
            expect(()=>rentCar.calculatePriceOfCar('BMW','7')).to.throw('Invalid input!')
        })
        it('Shoult return result with correct par',()=>{
            expect(rentCar.calculatePriceOfCar('BMW',7)).to.equal(`You choose BMW and it will cost $315!`)
        })
        it('Shoult throw error with correct - first par and string - second',()=>{
            expect(()=>rentCar.calculatePriceOfCar('Porche',7)).to.throw('No such model in the catalog!')
        })
    })
    describe('Tests checkBudget method', ()=>{
        it('Shoult throw error with string - first par',()=>{
            expect(()=>rentCar.checkBudget('BMW',7, 1500)).to.throw('Invalid input!')
        })
        it('Shoult throw error with string - second par',()=>{
            expect(()=>rentCar.checkBudget(100,"7", 1500)).to.throw('Invalid input!')
        })
        it('Shoult throw error with string - third par',()=>{
            expect(()=>rentCar.checkBudget(100,7, '1500')).to.throw('Invalid input!')
        })
        it('Shoult throw error with string - all par',()=>{
            expect(()=>rentCar.checkBudget('100','7', '1500')).to.throw('Invalid input!')
        })
        it('Shoult throw error with undefined - first par',()=>{
            expect(()=>rentCar.checkBudget(undefined,7, 1500)).to.throw('Invalid input!')
        })
        it('Shoult retrun You rent a car',()=>{
            expect(rentCar.checkBudget(10,7, 1500)).to.equal(`You rent a car!`)
        })
        it('Shoult retrun You rent a car',()=>{
            expect(rentCar.checkBudget(10,7, 70)).to.equal(`You rent a car!`)
        })
        it('Shoult retrun You need bigger budget!',()=>{
            expect(rentCar.checkBudget(100,10, 80)).to.equal('You need a bigger budget!')
        })
    })
})