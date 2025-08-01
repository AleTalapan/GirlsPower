const booksService = require('../services/bookServices.js');
 
// GET /books
exports.getAllBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
 
    const books = await booksService.getBooks(page, limit);
    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

// GET /books/:id
exports.getBookById = async (req, res) => {
  try {
    const book = await booksService.getBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get book" });
  }
};
 
// POST /books
exports.createBook = async (req, res) => {
  try {
    const newBook = await booksService.addBook(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
 
// PUT /books/:id
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await booksService.updateBook(req.params.id, req.body);
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
 
// HEAD /books/:id
exports.checkBookExists = async (req, res) => {
  try {
    const exists = await booksService.bookExists(req.params.id);
    return res.sendStatus(exists ? 200 : 404);
  } catch (err) {
    res.status(500).json({ error: "Error checking book existence" });
  }
};