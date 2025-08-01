const express = require('express');
const router = express.Router();
const booksController = require('../controllers/bookController.js');

router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);
router.post('/', booksController.createBook);
router.put('/:id', booksController.updateBook);
router.head('/:id', booksController.checkBookExists);

module.exports = router;
