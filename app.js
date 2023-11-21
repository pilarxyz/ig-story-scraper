const express = require('express');
const app = express();


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Halaman Utama' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
