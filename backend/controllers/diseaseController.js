const { getAllDiseases, getDiseaseById } = require('../models/diseaseModel');

const getDiseases = (req, res) => {
  const diseases = getAllDiseases();
  res.json({
    status: 'success',
    data: diseases
  });
};

const identifyDisease = (req, res) => {
  const { symptom } = req.body;
  // Di sini, kita bisa melakukan pencocokan data berdasarkan gejala
  const disease = getDiseaseById(symptom);
  
  if (disease) {
    res.json({
      status: 'success',
      data: disease
    });
  } else {
    res.status(404).json({
      status: 'fail',
      message: 'Penyakit tidak ditemukan'
    });
  }
};

module.exports = { getDiseases, identifyDisease };
