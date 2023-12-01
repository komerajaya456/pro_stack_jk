const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  // Process the data as needed

  res.status(200).send('Data received successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
