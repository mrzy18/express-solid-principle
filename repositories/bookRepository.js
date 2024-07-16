export default class BookRepository {
  constructor() {
    this.books = [
      {
        id: '1',
        title: 'Harry Potter',
        author: 'J.K Rowling',
        year: 2000,
      },
      {
        id: '2',
        title: 'Harry Potter 2',
        author: 'J.K Rowling',
        year: 2002,
      },
    ];
  }

  findAll() {
    return this.books;
  }

  findById(id) {
    return this.books.find((book) => book.id === id);
  }

  create(newBook) {
    this.books.push(newBook);
    return newBook;
  }

  update(id, updateBook) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books[index] = updateBook;
      return updateBook;
    }
    return null;
  }

  remove(id) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) {
      return null;
    }
    this.books.splice(index, 1);
    return true
  }
}
