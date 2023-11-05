const express = require('express');
const { Pool } = require('./db');
const app = express();
const bodyParser = require('body-parser');
const cartController = require('./controllers/cartController');
const commentController = require('./controllers/commentController');
const profileController = require('./controllers/profileController');
const userDetails = require('./controllers/profileController');
var cors = require('cors');
const multer = require('multer');
const path = require('path');

app.use(cors());

app.use(bodyParser.json());




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'profileImages');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});


const upload = multer({ storage: storage });






app.post('/add-to-cart', cartController.addToCart);
app.get('/user-cart/:userId', cartController.getUserCartWithImages);
app.post('/addComment',commentController.addComment);
app.put('/user/:userId', profileController.updateUser);
app.get('/user/:userId',userDetails.getUserDetails);
app.get('/getAllComments',commentController.getAllComments);
app.post('/upload/:user_id', upload.single('image'), profileController.uploadImage);
app.get('/user/image/:user_id', profileController.getImage);


// app.use('/profileImages', express.static(path.join(__dirname, 'profileImages')));


const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
