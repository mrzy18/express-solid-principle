import express from 'express'
import BookRepository from '../repositories/bookRepository.js'
import BookService from '../services/bookService.js'
import BookController from '../controllers/bookController.js'

const router = express.Router();
const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

router.get('/', (req, res) => bookController.getAllBooks(req, res));
router.get('/:id', (req, res) => bookController.getBookById(req, res));
router.post('/', (req, res) => bookController.createBook(req, res));
router.put('/:id', (req, res) => bookController.updateBook(req, res));
router.delete('/:id', (req, res) => bookController.deleteBook(req, res));

export default router;