const mongoose = require('mongoose');
 
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  author: {
    type: String,
    required: [true, 'Author is required']
  }
}, { timestamps: true });
 
module.exports = mongoose.model('Book', bookSchema);