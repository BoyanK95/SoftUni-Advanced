class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor){
        if (this.books.length >= this.capacity ) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({bookName, bookAuthor, played: false});
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName){
        let searchedBook = this.books.find(book => book.bookName === bookName);

        if (!searchedBook) {
            throw new Error(`${bookName} is not in the collection."`)
        };

        if (searchedBook.played) {
            throw new Error(`${bookName} has already been paid.`)
        }else{
            searchedBook.played = true;
            return `${bookName} has been successfully paid.`
        }
    }

    removeBook(bookName){
        let searchedBook = this.books.find(b => b.bookName === bookName);

        if (!searchedBook) {
            throw new Error("The book, you're looking for, is not found.")
        }
        if (!searchedBook.played) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }else{
            const index = this.books.indexOf(searchedBook);
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`
        }
    }

    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let sortedBook = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            let result = [];
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            sortedBook.map((b) => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`);
            });
            return result.join('\n').trim();
        } else {
            let findBook = this.books.find(b => b.bookAuthor == bookAuthor);

            if (findBook) {
                let result = [];
                let paid = findBook.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${findBook.bookName} == ${findBook.bookAuthor} - ${paid}.`);
                return result.join('\n').trim();
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
        }
    }

}


const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());







