let books = [];

function validateBook({ title, author }) {
  if (!title || !author || typeof title !== 'string' || typeof author !== 'string') {
    throw new Error("Title and author are required.");
  }
}

exports.getBooks = () => books;

exports.getBookById = (id) => books.find(b => b.id === parseInt(id, 10));

exports.addBook = (data) => {
  validateBook(data);
  const newBook = {
    id: Date.now(),
    title: data.title.trim(),
    author: data.author.trim()
  };
  books.push(newBook);
  return newBook;
};

exports.updateBook = (id, data) => {
  validateBook(data);
  const index = books.findIndex(b => b.id === parseInt(id, 10));
  if (index === -1) throw new Error("Book not found");
  books[index] = { id: parseInt(id, 10), title: data.title.trim(), author: data.author.trim() };
  return books[index];
};

exports.bookExists = (id) => books.some(b => b.id === parseInt(id, 10));
