class Bookstore{
    constructor(books){
        this.books = books;
    }

    listBooks(){
        for(const book of this.books){
            console.log(`We have ${book.name} by ${book.author}`)
        }
    }
}

class Book{
    constructor(name, author){
        this.name=name;
        this.author=author
    }
}

const nineteen84 = new Book("1984", "George Orwell")
const hp = new Book("Harry Potter", "J.K Rowling")

const bookstore = new Bookstore([nineteen84, hp])
bookstore.listBooks()

/**
 * 1. Create a class called "Bookstore"
 * 
 * 2.The "Bookstore" constructor has a single parameter
 * called "books" which is an Array of Book Objects.
 * Assign the argument passed in to the instance within the constructor
 * 
 * 3.Create a "listBooks" method on the "Bookstore" class
 * that will loop through and print out all the Books
 * in the Store (assume they have a name and author)
 * so you can format each like this:
 * `${book.name} by ${book.auther}`
 * 
 * 3.Create another class called "Book"
 * 
 * 4.The "Book" constructor has 2 parameters:
 * -name
 * -author
 * Assign these to the instance within the constructor 
 * 
 * 5.Create 2 Books 
 * - 
 * -
 */