const bookSelection = require('./bookSelection')
const { assert, expect } = require('chai');


describe('Tests bookSelection object', ()=>{
    describe('Tests isGenreSuitable function', ()=>{
        it('Should return not suitable for kids when age equal to 12 and genre equal to Thriller', ()=>{
            expect(bookSelection.isGenreSuitable('Thriller',12)).to.equal("Books with Thriller genre are not suitable for kids at 12 age")
        });
        it('Should return not suitable for kids when age equal to 12 and genre equal to Horror', ()=>{
            expect(bookSelection.isGenreSuitable('Horror',12)).to.equal("Books with Horror genre are not suitable for kids at 12 age")
        });
        it('Should return not suitable for kids when age less than 12 and genre equal to Horror', ()=>{
            expect(bookSelection.isGenreSuitable('Horror',10)).to.equal("Books with Horror genre are not suitable for kids at 10 age")
        });
        it('Should return not suitable for kids when age less than 12 and genre equal to Thriller', ()=>{
            expect(bookSelection.isGenreSuitable('Thriller',10)).to.equal("Books with Thriller genre are not suitable for kids at 10 age")
        });
        it('Should return suitable for kids when age less than 12 and genre equal to other', ()=>{
            expect(bookSelection.isGenreSuitable('Comedy',10)).to.equal("Those books are suitable")
        });
        it('Should return suitable for kids when age more than 12 and genre equal to Thriller', ()=>{
            expect(bookSelection.isGenreSuitable('Thriller',14)).to.equal("Those books are suitable")
        });
        it('Should return suitable for kids when age more than 12 and genre equal to Horror', ()=>{
            expect(bookSelection.isGenreSuitable('Horror',14)).to.equal("Those books are suitable")
        });
        it('Should return suitable for kids when age more than 12 and genre equal to other', ()=>{
            expect(bookSelection.isGenreSuitable('Investing',14)).to.equal("Those books are suitable")
        });
    })
    describe('Tests isItAffordable function', ()=>{
        it('Should return invalid input if price is string',()=>{
            expect(()=>bookSelection.isItAffordable('7',7)).to.throw("Invalid input")
        })
        it('Should return invalid input if price is array',()=>{
            expect(()=>bookSelection.isItAffordable([],7)).to.throw("Invalid input")
        })
        it('Should return invalid input if price is object',()=>{
            expect(()=>bookSelection.isItAffordable({},7)).to.throw("Invalid input")
        })
        it('Should return invalid input if price is boolean',()=>{
            expect(()=>bookSelection.isItAffordable(true,7)).to.throw("Invalid input")
        })
        it('Should return invalid input if budget is string',()=>{
            expect(()=>bookSelection.isItAffordable(7,'7')).to.throw("Invalid input")
        })
        it('Should return invalid input if budget is array',()=>{
            expect(()=>bookSelection.isItAffordable(7,[])).to.throw("Invalid input")
        })
        it('Should return invalid input if budget is object',()=>{
            expect(()=>bookSelection.isItAffordable(7,{})).to.throw("Invalid input")
        })
        it('Should return invalid input if budget is boolean',()=>{
            expect(()=>bookSelection.isItAffordable(7,false)).to.throw("Invalid input")
        })
        it('Should return not enought money if result is lower than 0',()=>{
            expect(bookSelection.isItAffordable(7,5)).to.equal("You don't have enough money")
        })
        it('Should return you bought a book if result is more than 0',()=>{
            expect(bookSelection.isItAffordable(7,10)).to.equal("Book bought. You have 3$ left")
        })
        it('Should return you bought a book if result is equal than 0',()=>{
            expect(bookSelection.isItAffordable(7,7)).to.equal("Book bought. You have 0$ left")
        })
    })
    describe('Tests suitableTitles function', ()=> {
        it('Should return invalid input if booksArray is number', ()=>{
            expect(()=>bookSelection.suitableTitles( 6,'Horror')).to.throw("Invalid input")
        })
        it('Should return invalid input if booksArray is undefined', ()=>{
            expect(()=>bookSelection.suitableTitles( undefined,'Comedy')).to.throw("Invalid input")
        })
        it('Should return invalid input if booksArray is object', ()=>{
            expect(()=>bookSelection.suitableTitles( {},'Comedy')).to.throw("Invalid input")
        })
        it('Should return invalid input if booksArray is boolean', ()=>{
            expect(()=>bookSelection.suitableTitles( false,'Comedy')).to.throw("Invalid input")
        })
        it('Should return invalid input if booksArray is string', ()=>{
            expect(()=>bookSelection.suitableTitles( 'JS','Comedy')).to.throw("Invalid input")
        })
        it('Should return invalid input if wantedGenre is number', ()=>{
            expect(()=>bookSelection.suitableTitles( ['JS-advance'],7)).to.throw("Invalid input")
        })
        it('Should return invalid input if wantedGenre is array', ()=>{
            expect(()=>bookSelection.suitableTitles( ['JS-advance'],[7])).to.throw("Invalid input")
        })
        it('Should return invalid input if wantedGenre is object', ()=>{
            expect(()=>bookSelection.suitableTitles( ['JS-advance'],{})).to.throw("Invalid input")
        })
        it('Should return invalid input if wantedGenre is undefined', ()=>{
            expect(()=>bookSelection.suitableTitles( ['JS-advance'],undefined)).to.throw("Invalid input")
        })
        it('Should return invalid input if wantedGenre is boolean', ()=>{
            expect(()=>bookSelection.suitableTitles( ['JS-advance'],true)).to.throw("Invalid input")
        })
        it('Should return resultArr if parametars are correct type', ()=>{
            
            expect(bookSelection.suitableTitles( [{title: 'JS', genre: 'Comedy'}],'Comedy')).to.deep.equal(['JS'])
        })
    })
})


