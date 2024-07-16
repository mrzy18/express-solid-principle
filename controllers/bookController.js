import Book from '../models/book.js';

export default class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  getAllBooks(req, res) {
    const books = this.bookService.getAllBooks();
    res.json({
      status: 'success',
      data: books,
    });
  }

  getBookById(req, res) {
    const id = req.params.id;
    const book = this.bookService.getBookById(id);
    if (!book) {
      return res.status(404).json({
        status: 'error',
        data: {
          message: `Book with id: ${id} not found`,
        },
      });
    }
    res.json({
      status: 'success',
      data: book,
    });
  }

  createBook(req, res) {
    const { title, author, year } = req.body;
    const book = new Book(Date.now().toString(), title, author, year);
    const createdBook = this.bookService.addBook(book);
    res.status(201).json({
      status: 'success',
      data: createdBook,
    });
  }

  updateBook(req, res) {
    const id = req.params.id;
    const { title, author, year } = req.body;
    const updatedBook = new Book(id, title, author, year);
    const result = this.bookService.updateBook(id, updatedBook);
    if (!result) {
      return res.status(404).json({
        status: 'error',
        data: {
          message: `Book with id: ${id} not found`,
        },
      });
    }
    res.json({
      status: 'success',
      data: result,
    });
  }

  deleteBook(req, res) {
    const id = req.params.id;
    const result = this.bookService.removeBook(id);
    if (!result) {
      return res.status(404).json({
        status: 'error',
        data: {
          message: `Book with id: ${id} not found`,
        },
      });
    }
    res.json({
      status: 'success',
      data: {
        message: `Book with id: ${id} has been deleted`
      },
    });
  }
}
