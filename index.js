// const express = require('express')
// const app = express()
// app.use(express.json())
// const PORT = 3000

// var arr = []

// app.get('/books', function(req, res){
//     res.send(arr)
// })

// app.get('/books/:id', function(req, res){
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i].id == req.params.id) {
//             res.send(arr[i])
//             return
//         }
//     }
//     res.send('not found')
// })

// app.post('/books', (req, res) => {
//     if (req.body.title && req.body.author) {
//         const b = {
//             id: Math.floor(Math.random()*10000),
//             name: req.body.title,
//             wr: req.body.author
//         }
//         arr.push(b)
//         res.send(b)
//     } else {
//         res.send("missing fields")
//     }
// })

// app.listen(PORT, () => {
//     console.log("on " + PORT)
// })
const express = require('express');
const booksRoutes = require('./routes/bookRoutes.js');

const app = express();
const PORT = process.env.PORT_NUMBER    || 3000;

app.use(express.json());


app.use('/books', booksRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
