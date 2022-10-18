const { assert, expect } = require('chai');
const flowerShop = require('./flowerShop');

describe('Tests flowerShop object', ()=>{
    describe('Tests calcPriceOfFlowers method', ()=>{
        it('Should return invalid input with number as first par and correct other two par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers(7,7,7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with arr as first par and correct other two par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers([],7,7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with obj as first par and correct other two par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers({},7,7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with boolean as first par and correct other two par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers(true,7,7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with undefined as first par and correct other two par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers(undefined,7,7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and string as second par and num as third par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose','7',7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and float num as second par and num as third par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose',7.77,7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and arr as second par and num as third par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose',[],7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and obj as second par and num as third par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose',{},7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and undefined as second par and num as third par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose',undefined,7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and boolean as second par and num as third par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose',true,7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and num as second par and floatnum as third par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose',7,7.77)).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and num as second par and string as third par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose',7,'7.77')).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and num as second par and arr as third par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose',7,[])).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and num as second par and obj as third par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose',7,{})).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and num as second par and undefined as third par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose',7,undefined)).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and num as second par and boolean as third par',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose',7,true)).to.throw('Invalid input!')
        })
        it('Should return invalid input with string as first par and wrong other input',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers('rose','7',true)).to.throw('Invalid input!')
        })
        it('Should return invalid input with all thre invalid',()=>{
            expect(()=>flowerShop.calcPriceOfFlowers([],'7',true)).to.throw('Invalid input!')
        })
        it('Should return result with valid input',()=>{
            expect(flowerShop.calcPriceOfFlowers('rose',10,3)).to.equal('You need $30.00 to buy rose!')
        })
    })
    describe('Tests checkFlowersAvailable method', ()=>{
        it('Should return flowers are avaiable if flower is in gardenArr',()=>{
            expect(flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`)
        })
        it('Should return flowers are sold if flower is NOT in gardenArr',()=>{
            expect(flowerShop.checkFlowersAvailable("Rose", ["Lily", "Orchid"])).to.equal(`The Rose are sold! You need to purchase more!`)
        })
    })
    describe('Tests sellFlowers method', ()=>{
        it('Should return invalid input with string as first par', ()=>{
            expect(()=>flowerShop.sellFlowers('Rose',1)).to.throw('Invalid input!')
        })
        it('Should return invalid input with number as first par', ()=>{
            expect(()=>flowerShop.sellFlowers(7,1)).to.throw('Invalid input!')
        })
        it('Should return invalid input with obj as first par', ()=>{
            expect(()=>flowerShop.sellFlowers({},1)).to.throw('Invalid input!')
        })
        it('Should return invalid input with undefined as first par', ()=>{
            expect(()=>flowerShop.sellFlowers(undefined,1)).to.throw('Invalid input!')
        })
        it('Should return invalid input with boolean as first par', ()=>{
            expect(()=>flowerShop.sellFlowers(true,1)).to.throw('Invalid input!')
        })
        it('Should return invalid input with correct first par and floatNum - sec par', ()=>{
            expect(()=>flowerShop.sellFlowers(['Rose'],2.5)).to.throw('Invalid input!')
        })
        it('Should return invalid input with correct first par and string - sec par', ()=>{
            expect(()=>flowerShop.sellFlowers(['Rose'],'2.5')).to.throw('Invalid input!')
        })
        it('Should return invalid input with correct first par and undefined - sec par', ()=>{
            expect(()=>flowerShop.sellFlowers(['Rose'],undefined)).to.throw('Invalid input!')
        })
        it('Should return invalid input with correct first par and bollean - sec par', ()=>{
            expect(()=>flowerShop.sellFlowers(['Rose'],true)).to.throw('Invalid input!')
        })
        it('Should return invalid input with correct first par and arr - sec par', ()=>{
            expect(()=>flowerShop.sellFlowers(['Rose'],[5])).to.throw('Invalid input!')
        })
        it('Should return invalid input with correct first par and obj - sec par', ()=>{
            expect(()=>flowerShop.sellFlowers(['Rose'],{})).to.throw('Invalid input!')
        })
        it('Should return invalid input with incorect first par and obj - sec par', ()=>{
            expect(()=>flowerShop.sellFlowers('Rose',{})).to.throw('Invalid input!')
        })
        it('Should return invalid input with correct first par and negative num for second par', ()=>{
            expect(()=>flowerShop.sellFlowers(['Rose'],-7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with incorecy first par and negative num for second par', ()=>{
            expect(()=>flowerShop.sellFlowers('Rose',-7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with correct first par and num outside arr.length - sec par', ()=>{
            expect(()=>flowerShop.sellFlowers(['Rose'],7)).to.throw('Invalid input!')
        })
        it('Should return invalid input with incorect first par and negative num for second par', ()=>{
            expect(()=>flowerShop.sellFlowers('Rose',-7)).to.throw('Invalid input!')
        })
        it('Should return result with correct input', ()=>{
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'],1)).to.equal('Rose / Orchid')
        })
    })
})