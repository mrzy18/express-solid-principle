export default class bookService {
  constructor(bookRepository){
    this.bookRepository = bookRepository;
  }

  getAllBooks(){
    return this.bookRepository.findAll();
  }
  getBookById(id){
    return this.bookRepository.findById(id);
  }
  addBook(newBook){
    return this.bookRepository.create(newBook);
  }
  updateBook(id, book) {
    return this.bookRepository.update(id, book);
  }
  removeBook(id) {
    return this.bookRepository.remove(id);
  }
}