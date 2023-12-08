const express = require('express');
const app = express();
const PORT = 3000;


//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit', async (req, res) => {
  const userInputValue = req.body.userInput;

  // Save to MongoDB
  try {
   // const newUserInput = new UserInput({ userInput: userInputValue });
   // await newUserInput.save();
    res.send(`Input value saved to MongoDB: ${userInputValue}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving to database.');
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index10.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
