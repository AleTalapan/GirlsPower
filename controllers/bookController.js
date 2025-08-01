const booksService = require('../services/bookServices.js');

// GET /books
exports.getAllBooks = (req, res) => {
  const books = booksService.getBooks();
  res.status(200).json(books);
};

// GET /books/:id
exports.getBookById = (req, res) => {
  const book = booksService.getBookById(req.params.id);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json(book);
};

// POST /books
exports.createBook = (req, res) => {
  try {
    const newBook = booksService.addBook(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /books/:id
exports.updateBook = (req, res) => {
  try {
    const updatedBook = booksService.updateBook(req.params.id, req.body);
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// HEAD /books/:id
exports.checkBookExists = (req, res) => {
  const exists = booksService.bookExists(req.params.id);
  return res.sendStatus(exists ? 200 : 404);
};
