const express = require('express');
const { Pool } = require('pg');
const app = express();
const bodyParser = require('body-parser');
const cartController = require('./controllers/cartController');
const commentController = require('./controllers/commentController');
const profileController = require('./controllers/profileController');
const userDetails = require('./controllers/profileController');


app.use(bodyParser.json());

app.post('/add-to-cart', cartController.addToCart);
app.get('/user-cart/:userId', cartController.getUserCartWithImages);
app.post('/addComment',commentController.addComment);
app.put('/user/:userId', profileController.updateUser);
app.get('/user/:userId',userDetails.getUserDetails);
app.get('/getAllComments',commentController.getAllComments);


const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
