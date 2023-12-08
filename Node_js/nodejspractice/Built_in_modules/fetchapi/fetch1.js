const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const receivedData = req.body; // Access the data sent in the request body
    console.log('Received data:', receivedData);

    // Process the data and send a response
    res.json({ message: 'Data received successfully' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
