const express = require('express');
const bodyParser = require('body-parser');
const diseaseRoutes = require('./routes/diseaseRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', diseaseRoutes);  // Menggunakan route untuk mengidentifikasi penyakit kulit

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
