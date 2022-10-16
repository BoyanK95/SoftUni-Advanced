const carService = require('./03. Car Service_Resources')
const { assert, expect } = require('chai');

describe('Tests carService', ()=>{
    describe('Tests isItExpensive method', ()=>{
        it('Should return correct output with Engine parametar', ()=>{
            expect(carService.isItExpensive('Engine')).to.be.equal('The issue with the car is more severe and it will cost more money')
        })
        it('Should return correct output with Transmission parametar', ()=>{
            expect(carService.isItExpensive('Transmission')).to.be.equal('The issue with the car is more severe and it will cost more money')
        })
        it('Should return other output with other string parametar', ()=>{
            expect(carService.isItExpensive('Suspension')).to.be.equal('The overall price will be a bit cheaper')
        })
    })
    describe('Tests discount method',()=>{
        it('Should throw Error with strin as first par and num second', ()=>{
            expect(()=>carService.discount('Suspension', 6)).to.throw('Invalid input')
        })
        it('Should throw Error with strong both par', ()=>{
            expect(()=>carService.discount('Suspension', '7' )).to.throw('Invalid input')
        })
        it('Should throw Error with arr first par and num second', ()=>{
            expect(()=>carService.discount([], 7)).to.throw('Invalid input')
        })
        it('Should throw Error with arr first par and arr second', ()=>{
            expect(()=>carService.discount([], [])).to.throw('Invalid input')
        })
        it('Should throw Error with obj input and num second', ()=>{
            expect(()=>carService.discount([], 7)).to.throw('Invalid input')
        })
        it('Should throw Error with obj input and object second', ()=>{
            expect(()=>carService.discount({}, {})).to.throw('Invalid input')
        })
        it('Should throw Error with undefined input and object second', ()=>{
            expect(()=>carService.discount(undefined, {})).to.throw('Invalid input')
        })
        it('Should throw Error with boolean input first par and object second', ()=>{
            expect(()=>carService.discount(true, {})).to.throw('Invalid input')
        })
        it('Should throw Error with boolean input first par and num second', ()=>{
            expect(()=>carService.discount(true, 7)).to.throw('Invalid input')
        })
        it('Should throw Error with boolean input first par and arr second', ()=>{
            expect(()=>carService.discount(true, [])).to.throw('Invalid input')
        })
        it('Should throw Error with num input first par and string second', ()=>{
            expect(()=>carService.discount(2, '5')).to.throw('Invalid input')
        })
        it('Should throw Error with num input first par and obj second', ()=>{
            expect(()=>carService.discount(2, {})).to.throw('Invalid input')
        })
        it('Should throw Error with num input first par and arr second', ()=>{
            expect(()=>carService.discount(2, [])).to.throw('Invalid input')
        })
        it('Should throw Error with num input first par and undefined second', ()=>{
            expect(()=>carService.discount(2, undefined)).to.throw('Invalid input')
        })
        it('Should throw Error with num input first par and boolean second', ()=>{
            expect(()=>carService.discount(2, false)).to.throw('Invalid input')
        })
        it('Should return result with first par over 2 and second below 7', ()=>{
            expect(carService.discount(3, 2)).to.equal('Discount applied! You saved 0.3$')
        })
        it('Should return result with first par over 2 and second equal 7', ()=>{
            expect(carService.discount(3, 7)).to.equal('Discount applied! You saved 1.05$')
        })
        it('Should return result with first par over 2 and second above 7', ()=>{
            expect(carService.discount(3, 8)).to.equal('Discount applied! You saved 1.2$')
        })
        it('Should return result with first par below 2 and second above 7', ()=>{
            expect(carService.discount(1, 8)).to.equal('You cannot apply a discount')
        })
        it('Should return result with first par equal 2 and second above 7', ()=>{
            expect(carService.discount(2, 8)).to.equal('You cannot apply a discount')
        })
    })
    describe('Tests partsToBuy method',()=>{
        it('Should throw Error with first par-num and second- arr', ()=>{
            expect(()=>carService.partsToBuy(6, [7])).to.throw('Invalid input')
        })
        it('Should throw Error with first par - string and second- arr', ()=>{
            expect(()=>carService.partsToBuy('6', [7])).to.throw('Invalid input')
        })
        it('Should throw Error with first par - undefined and second- arr', ()=>{
            expect(()=>carService.partsToBuy(undefined, [7])).to.throw('Invalid input')
        })
        it('Should throw Error with first par - object and second- arr', ()=>{
            expect(()=>carService.partsToBuy({}, [7])).to.throw('Invalid input')
        })
        it('Should throw Error with first par - boolean and second- arr', ()=>{
            expect(()=>carService.partsToBuy(true, [7])).to.throw('Invalid input')
        })
        it('Should throw Error with first par - arr and second- num', ()=>{
            expect(()=>carService.partsToBuy([], 7)).to.throw('Invalid input')
        })
        it('Should throw Error with first par - arr and second- string', ()=>{
            expect(()=>carService.partsToBuy([], '7')).to.throw('Invalid input')
        })
        it('Should throw Error with first par - arr and second- undefined', ()=>{
            expect(()=>carService.partsToBuy([], undefined)).to.throw('Invalid input')
        })
        it('Should throw Error with first par - arr and second- obj', ()=>{
            expect(()=>carService.partsToBuy([], {})).to.throw('Invalid input')
        })
        it('Should throw Error with first par - arr and second- boolean', ()=>{
            expect(()=>carService.partsToBuy([], true)).to.throw('Invalid input')
        })
        it('Should throw Error with first undefined - arr and second- boolean', ()=>{
            expect(()=>carService.partsToBuy(undefined, true)).to.throw('Invalid input')
        })
        it('Should throw Error with first undefined - arr and second- undefined', ()=>{
            expect(()=>carService.partsToBuy(undefined, undefined)).to.throw('Invalid input')
        })
        it('Should throw Error with first obj - arr and second- obj', ()=>{
            expect(()=>carService.partsToBuy({}, {})).to.throw('Invalid input')
        })
        it('Should throw Error with first num - arr and second- num', ()=>{
            expect(()=>carService.partsToBuy(7, 7)).to.throw('Invalid input')
        })
        it('Should throw Error with first num - string and second- str', ()=>{
            expect(()=>carService.partsToBuy("7", '7')).to.throw('Invalid input')
        })
        it('Should return output with correct par', ()=>{
            expect(carService.partsToBuy([{part: "staring wheel", price: 230}], ['staring wheel'])).to.equal(230)
        })
        it('Should return 0 with correct first par is empy', ()=>{
            expect(carService.partsToBuy([], ['staring wheel'])).to.equal(0)
        })
    })

})



