const express = require('express');
const multer = require('multer');
const path = require('path');
const pool = require('./db');
const app = express();
var cors = require('cors');
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'profileImages');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/upload/:user_id', upload.single('image'), async (req, res) => {
  if (req.file) {
    const user_id = req.params.user_id;

    try {
      // Insert the uploaded image info into the database with user_id
      const imageResult = await pool.query(
        'INSERT INTO user_images (user_id, image_url, uploaded_at) VALUES ($1, $2, $3) RETURNING *',
        [user_id, req.file.path, new Date()]
      );

      res.send('File uploaded and associated with the user in the database');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error occurred while uploading the file');
    }
  } else {
    res.status(400).send('No file uploaded');
  }
});

app.get('/user/:user_id', async (req, res) => {
    const user_id = req.params.user_id;
  
    try {
      const imageResult = await pool.query(
        'SELECT image_url FROM user_images WHERE user_id = $1',
        [user_id]
      );
  
      if (imageResult.rows.length > 0) {
        res.json({ image_url: imageResult.rows[0].image_url });
      } else {
        res.status(404).send('Image not found for this user');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching image');
    }
  });
  



app.listen(4000, () => {
  console.log('Server started on port 4000');
});
