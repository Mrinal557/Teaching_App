// src/routes/ContentRoutes.js
const express = require('express');
const router = express.Router();
const contentController = require('../Controllers/ContentController');
const { protectAdmin } = require('../middleware/authMiddleware');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Upload content (video lectures or test series)
router.post('/upload', protectAdmin, upload.single('file'), contentController.uploadContent);

// Get content by subject and section
router.get('/:subject/:section', contentController.getContentBySubjectAndSection);

module.exports = router;
