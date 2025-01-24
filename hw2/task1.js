console.log('\nTask 1.')

class Library {
  #books = []

  constructor (...books) {
    let newBooks = []
    books.forEach(book => {
      if (newBooks.includes(book)) {
        throw new Error('Книги не должны содержать дублекатов.')
      }
      newBooks.push(book)
    })
    this.#books = books
  }

  get allBooks () {
    return this.#books
  }

  addBook (title) {
    if (this.#books.includes(title)) {
      throw new Error('Такая книга уже есть.')
    }
    this.#books.push(title)
  }

  removeBook (title) {
    let id = this.#books.indexOf(title)
    if (id === -1) {
      throw new Error('Такой книги нет.')
    }
    this.#books.splice(id, 1)
  }

  hasBook (title) {
    return this.#books.includes(title)
  }
}

let library = new Library('book1', 'book2', 'book3', 'book4', 'book5')
console.log(library.allBooks)

// Ошибка: "Книги не должны содержать дублекатов."
//let library2 = new Library('book1','book2','book1')

library.addBook('newBook')
console.log("addBook('newBook')\n", library.allBooks)

// Ошибка: "Такая книга уже есть."
// library.addBook('book1')

library.removeBook('book3')
console.log("removeBook('book3')\n", library.allBooks)

// Ошибка: "Такой книги нет."
//library.removeBook('book10')

console.log("hasBook('book1')\n", library.hasBook('book1'))
console.log("hasBook('book10')\n", library.hasBook('book10'))
