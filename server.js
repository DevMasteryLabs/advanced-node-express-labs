require('dotenv').config();
const express = require('express');

const myDB = require('./connection');
const verification = require('./verification/index');

const app = express();

verification(app); // For TESTING
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({message: 'index.handlebars template should be rendered'});
});

const PORT = process.env.PORT || 9000; 

app.listen(PORT, () => {
  console.log('Server is listening ... ');
});
