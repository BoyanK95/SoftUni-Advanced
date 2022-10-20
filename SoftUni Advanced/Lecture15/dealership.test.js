const { assert, expect } = require('chai');
const dealership = require('./dealership');

describe('Tests dalerships methods', ()=>{
    describe('Test newCarCost method', ()=>{
        it('Chekc Audi A4 B8 output', ()=>{
            expect(dealership.newCarCost('Audi A4 B8', 25000)).to.equal(10000)
        })
        it('Audi A6 4K output', ()=>{
            expect(dealership.newCarCost('Audi A6 4K', 25000)).to.equal(5000)
        })
        it('Audi A8 D5 output', ()=>{
            expect(dealership.newCarCost('Audi A8 D5', 25000)).to.equal(0)
        })
        it('Audi TT 8J output', ()=>{
            expect(dealership.newCarCost('Audi TT 8J', 15000)).to.equal(1000)
        })
    })
    describe('Tests carEquipment methood', ()=>{
        it('Should retrun extras witdh first index', ()=>{
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'navigation'],[0])).to.deep.equal(['heated seats'])
        })
        it('Should retrun extras witdh second index', ()=>{
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'navigation'],[1])).to.deep.equal(['sliding roof'])
        })
        it('Should retrun extras witdh last index', ()=>{
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'navigation'],[2])).to.deep.equal(['navigation'])
        })
    })
    describe('Tests euroCategory method', ()=>{
        it('Return output if category is bellow 4',()=>{
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })
        it('Return output if category is equal to 4',()=>{
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })
        it('Return output if category is above to 4',()=>{
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })
    })
})