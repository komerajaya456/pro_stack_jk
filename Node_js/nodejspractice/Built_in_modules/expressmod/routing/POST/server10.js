const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET routing');
});

app.get('/', (req, res) => {
  const myobj={name:"komera",age:20}
  res.send('POST routing komera');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
