const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON in request body
app.use(express.json());

// Handling a POST request at '/example' endpoint
app.post('/example', (req, res) => {
  // Access the request body data
  const requestData = req.body;

  // Your logic to handle the data

  // Send a response
  res.send('POST request received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});