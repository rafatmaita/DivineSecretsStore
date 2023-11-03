const express = require('express');
const { Pool } = require('pg');
const app = express();
const bodyParser = require('body-parser');
const cartController = require('./controllers/cartController');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'DivineSecrets',
  password: 'Rafat#01',
  port: 5432,
});

app.use(bodyParser.json());

app.post('/add-to-cart', cartController.addToCart);
app.get('/user-cart/:userId', cartController.getUserCartWithImages);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
