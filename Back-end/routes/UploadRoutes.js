// routes/uploadRoutes.js
const express = require('express');
const { uploadFile } = require('../Controllers/UploadController');

const router = express.Router();

router.post('/upload', uploadFile);

module.exports = router;
