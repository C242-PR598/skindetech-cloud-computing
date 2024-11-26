const diseases = require('../../data/diseaseData.json');

const getAllDiseases = () => diseases;
const getDiseaseById = (id) => diseases.find(disease => disease.id === id);

module.exports = { getAllDiseases, getDiseaseById };
