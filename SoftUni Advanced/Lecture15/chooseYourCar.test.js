const { assert, expect } = require('chai');
const chooseYourCar = require('./chooseYourCar')

describe('Tests chooseYourCar obj', ()=>{
    describe('choosingType methood', ()=>{
        it('Should return invalid input if year is bellow 1900 ',()=>{
            expect(()=>chooseYourCar.choosingType('Limo','Red', 1850)).to.throw("Invalid Year")
        })
        it('Should return invalid input if year is above  2022 ',()=>{
            expect(()=>chooseYourCar.choosingType('Limo','Red', 2042)).to.throw("Invalid Year")
        })
        it('Should return input if type is Sedan is above 2010 ',()=>{
            expect(chooseYourCar.choosingType('Sedan','Red', 2011)).to.equal(`This Red Sedan meets the requirements, that you have.`)
        })
        it('Should return input if type is Sedan is equal 2010 ',()=>{
            expect(chooseYourCar.choosingType('Sedan','Red', 2010)).to.equal(`This Red Sedan meets the requirements, that you have.`)
        })
        it('Should return input if type is Sedan is below 2010 ',()=>{
            expect(chooseYourCar.choosingType('Sedan','Red', 2000)).to.equal(`This Sedan is too old for you, especially with that Red color.`)
        })
        it('Should throw error if type is not Sedan',()=>{
            expect(()=>chooseYourCar.choosingType('Limo','Red', 2000)).to.throw(`This type of car is not what you are looking for.`)
        })
        it('Should throw error input if year is other',()=>{
            expect(()=>chooseYourCar.choosingType('Limo','Red', 2010)).to.throw(`This type of car is not what you are looking for.`)
        })
    })
    describe('Tests brandName method',()=>{
        it('Should throw error if first par is a string ',()=>{
            expect(()=>chooseYourCar.brandName('Limo', 1)).to.throw("Invalid Information!")
        })
        it('Should throw error if first par is a num ',()=>{
            expect(()=>chooseYourCar.brandName(7, 1)).to.throw("Invalid Information!")
        })
        it('Should throw error if first par is a obj ',()=>{
            expect(()=>chooseYourCar.brandName({}, 1)).to.throw("Invalid Information!")
        })
        it('Should throw error if first par is a undefined ',()=>{
            expect(()=>chooseYourCar.brandName(undefined, 1)).to.throw("Invalid Information!")
        })
        it('Should throw error if first par is a boolean ',()=>{
            expect(()=>chooseYourCar.brandName(true, 1)).to.throw("Invalid Information!")
        })
        it('Should throw error if second par is a string ',()=>{
            expect(()=>chooseYourCar.brandName([], 'red')).to.throw("Invalid Information!")
        })
        it('Should throw error if second par is a floating ',()=>{
            expect(()=>chooseYourCar.brandName([], 7.77)).to.throw("Invalid Information!")
        })
        it('Should throw error if second par is a obj ',()=>{
            expect(()=>chooseYourCar.brandName([], {})).to.throw("Invalid Information!")
        })
        it('Should throw error if second par is a boolean ',()=>{
            expect(()=>chooseYourCar.brandName([], true)).to.throw("Invalid Information!")
        })
        it('Should throw error if second par is a negative ',()=>{
            expect(()=>chooseYourCar.brandName([], -7)).to.throw("Invalid Information!")
        })
        it('Should throw error if second par is a more than length ',()=>{
            expect(()=>chooseYourCar.brandName(['BMW'], 2)).to.throw("Invalid Information!")
        })
        it('Should throw error if second par is a equal than length ',()=>{
            expect(()=>chooseYourCar.brandName(['BMW', 'Toyata'], 2)).to.throw("Invalid Information!")
        })
        it('Should throw error if both par is a floating ',()=>{
            expect(()=>chooseYourCar.brandName(8.23, 7.77)).to.throw("Invalid Information!")
        })
        it('Should return result ',()=>{
            expect(chooseYourCar.brandName(['BMW', 'Toyata', 'Mercedes'], 1)).to.equal('BMW, Mercedes')
        })
    })
    describe('Tests carFuelConsumption methood',()=>{
        it('Should throw error with first par string and sec- num ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption('Limo', 10)).to.throw("Invalid Information!")
        })
        it('Should throw error with first par arr and sec- num ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption([], 10)).to.throw("Invalid Information!")
        })
        it('Should throw error with first par obj and sec- num ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption({}, 10)).to.throw("Invalid Information!")
        })
        it('Should throw error with first par boolean and sec- num ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(true, 10)).to.throw("Invalid Information!")
        })
        it('Should throw error with first par undefined and sec- num ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(undefined, 10)).to.throw("Invalid Information!")
        })
        it('Should throw error with first par negative and sec- num ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(-7, 10)).to.throw("Invalid Information!")
        })
        it('Should throw error with first par zero and sec- num ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(0, 10)).to.throw("Invalid Information!")
        })
        it('Should throw error with first par num and sec - string ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(7, '10')).to.throw("Invalid Information!")
        })
        it('Should throw error with first par num and sec - arr ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(7, [])).to.throw("Invalid Information!")
        })
        it('Should throw error with first par num and sec - obj ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(7, {})).to.throw("Invalid Information!")
        })
        it('Should throw error with first par num and sec - undefined ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(7, undefined)).to.throw("Invalid Information!")
        })
        it('Should throw error with first par num and sec - boolean ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(7, true)).to.throw("Invalid Information!")
        })
        it('Should throw error with first par num and sec - negative ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(7, -5)).to.throw("Invalid Information!")
        })
        it('Should throw error with first par num and sec - zero ',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(7, 0)).to.throw("Invalid Information!")
        })
        it('Should throw error with both par are zero',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(0, 0)).to.throw("Invalid Information!")
        })
        it('Should throw error with both par are negative',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(-7, -3)).to.throw("Invalid Information!")
        })
        it('Should throw error with both par are incorect tyoe',()=>{
            expect(()=>chooseYourCar.carFuelConsumption(true, [])).to.throw("Invalid Information!")
        })
        it('Should return input wiht liters under 7',()=>{
            expect(chooseYourCar.carFuelConsumption(100, 0.2)).to.equal("The car is efficient enough, it burns 0.20 liters/100 km.")
        })
        it('Should return input wiht liters above 7',()=>{
            expect(chooseYourCar.carFuelConsumption(1, 10)).to.equal("The car burns too much fuel - 1000.00 liters!")
        })
        it('Should return input wiht liters equal 7',()=>{
            expect(chooseYourCar.carFuelConsumption(21, 1.47)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.")
        })
    })
})