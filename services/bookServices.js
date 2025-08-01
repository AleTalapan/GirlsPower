const Book = require('../models/bookModel.js');
 
exports.getBooks = async () => {
  return await Book.find();
};
 
exports.getBookById = async (id) => {
  return await Book.findById(id);
};
 
exports.addBook = async (data) => {
  const { title, author } = data;

  const existingBook = await Book.findOne({ title, author });

  if (existingBook) {
    throw new Error('Cartea există deja.');
  }

  const book = new Book(data);
  return await book.save();
};
 
exports.updateBook = async (id, data) => {
  const { title, author } = data;

  const existingBook = await Book.findOne({ title, author, _id: { $ne: id } });

  if (existingBook) {
    throw new Error('Există deja o altă carte cu acest titlu și autor.');
  }

  return await Book.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};


exports.bookExists = async (id) => {
  const book = await Book.findById(id);
  return !!book;
};