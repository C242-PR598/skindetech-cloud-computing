const express = require('express');
const { getDiseases, identifyDisease } = require('../controllers/diseaseController');
const router = express.Router();

// Endpoint untuk mengambil daftar penyakit
router.get('/diseases', getDiseases);

// Endpoint untuk mengidentifikasi penyakit berdasarkan gejala
router.post('/identify', identifyDisease);

module.exports = router;
