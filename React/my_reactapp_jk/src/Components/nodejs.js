// Node.js server using Express and handling POST request with bodyParser
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const receivedData = req.body;
  console.log('Received data from React:', receivedData);

  // Process the data as needed

  // Send a response back to React if needed
  res.json({ message: 'Data received on the server' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
