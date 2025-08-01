require('dotenv').config();
const express = require('express');
const booksRoutes = require('./routes/bookRoutes.js');
const { connectDB } = require('./config/db.js');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT_NUMBER || 3000;

connectDB();

app.use(errorHandler);

app.use(express.json());
app.use('/books', booksRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
