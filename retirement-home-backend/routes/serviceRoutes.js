const express = require('express');
const { getServices, addService } = require('../controllers/serviceController');

const router = express.Router();

router.route('/').get(getServices).post(addService);

module.exports = router;

const upload = require('../config/multer');

// Route to upload an image
router.post('/upload', upload.single('image'), (req, res) => {
  res.json({ imagePath: `/uploads/${req.file.filename}` });
});
