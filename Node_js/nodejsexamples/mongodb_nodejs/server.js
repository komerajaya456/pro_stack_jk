const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.post('/', (req, res) => {
  // Access data sent from HTML
  const { key1, key2 } = req.body;
 
  // Process data as needed
  const result = {
    message: 'Data1 received successfully',
    data: { key1, key2 },
  };

  // Send a JSON response back to the HTML page
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});