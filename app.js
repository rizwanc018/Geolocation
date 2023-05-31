const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();
const port = 3000;


app.use(express.static('public'));


app.get('/getAddress', async (req, res) => {
  const { lat, lng } = req.query;
  const apiKey = process.env.OPENGATE_API_KEY;

  try {
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${lat}+${lng}`)
    const address = response.data.results[0].formatted;
    res.send({ address });
  } catch (error) {
    res.status(500).send({ error: 'Error fetching address' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
