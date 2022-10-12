const library = require('./library');
const { assert, expect } = require('chai')

describe('Testing library object functunality', ()=>{

    describe('Testing calcPriceOfBook function', ()=>{
        it('Invalid input - nameOfBook set as number' , ()=>{
            expect(()=>library.calcPriceOfBook(7,7)).to.throw("Invalid input")
        })
        it('Invalid input - nameOfBook set as floating num' , ()=>{
            expect(()=>library.calcPriceOfBook(7.77,7)).to.throw("Invalid input")
        })
        it('Invalid input - nameOfBook set as array', ()=>{
            expect(()=>library.calcPriceOfBook([],7)).to.throw("Invalid input")
        })
        it('Invalid input - nameOfBook set as object', ()=>{
            expect(()=>library.calcPriceOfBook({},7)).to.throw("Invalid input")
        })
        it('Invalid input - nameOfBook set as boolean', ()=>{
            expect(()=>library.calcPriceOfBook(true,7)).to.throw("Invalid input")
        })
        it('Invalid input - year set as string', ()=>{
            expect(()=>library.calcPriceOfBook('GameOfThrones','Imp')).to.throw("Invalid input")
        })
        it('Invalid input - year set as array', ()=>{
            expect(()=>library.calcPriceOfBook('GameOfThrones',[])).to.throw("Invalid input")
        })
        it('Invalid input - year set as object', ()=>{
            expect(()=>library.calcPriceOfBook('GameOfThrones',{})).to.throw("Invalid input")
        })
        it('Invalid input - year set as boolean', ()=>{
            expect(()=>library.calcPriceOfBook('GameOfThrones',true)).to.throw("Invalid input")
        })
        it('Invalid input - year set as floating', ()=>{
            expect(()=>library.calcPriceOfBook('GameOfThrones',7.77)).to.throw("Invalid input")
        })
        it('Valid data and year is below 1980', ()=>{
            expect(library.calcPriceOfBook('Troy', 1955)).to.equal(`Price of Troy is 10.00`)
        })
        it('Valid data and year is above 1980', ()=>{
            expect(library.calcPriceOfBook('RichDadPoorDad', 2003)).to.equal(`Price of RichDadPoorDad is 20.00`)
        })
        it('Valid data and year is equal 1980', ()=>{
            expect(library.calcPriceOfBook('Troy', 1980)).to.equal(`Price of Troy is 10.00`)
        })
    })

    describe('Testing findBook function', ()=>{
        it('Should throw an error if bookArr length is 0',()=>{
            expect(()=>library.findBook([], 'GoT')).to.throw(`No books currently available`)
        })
        it('Should return result if book is found',()=>{
            expect(library.findBook(['GOT', 'House of the Dragon', 'A song of ice and fire'], 'GOT')).to.equal(`We found the book you want.`)
        })
        it('Should return result if book is Not found',()=>{
            expect(library.findBook(['GOT', 'House of the Dragon', 'A song of ice and fire'], 'GoT')).to.equal(`The book you are looking for is not here!`)
        })
    })

    describe('Testing arrangeTheBooks function', ()=>{
        it('Invalid input - arrangeTheBooks set as string' , ()=>{
            expect(()=>library.arrangeTheBooks('GoT')).to.throw("Invalid input")
        })
        it('Invalid input - arrangeTheBooks set as array' , ()=>{
            expect(()=>library.arrangeTheBooks([7])).to.throw("Invalid input")
        })
        it('Invalid input - arrangeTheBooks set as object' , ()=>{
            expect(()=>library.arrangeTheBooks({})).to.throw("Invalid input")
        })
        it('Invalid input - arrangeTheBooks set as boolean' , ()=>{
            expect(()=>library.arrangeTheBooks(true)).to.throw("Invalid input")
        })
        it('Invalid input - arrangeTheBooks set as floating' , ()=>{
            expect(()=>library.arrangeTheBooks(7.77)).to.throw("Invalid input")
        })
        it('Invalid input - arrangeTheBooks set as negative' , ()=>{
            expect(()=>library.arrangeTheBooks(-3)).to.throw("Invalid input")
        })
        it('Retrung result if countOfBooks is less than free space' , ()=>{
            expect(library.arrangeTheBooks(2)).to.equal("Great job, the books are arranged.")
        })
        it('Retrung result if countOfBooks is equal to free space' , ()=>{
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.")
        })
        it('Retrung result if countOfBooks is more than free space' , ()=>{
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.")
        })
    })
})