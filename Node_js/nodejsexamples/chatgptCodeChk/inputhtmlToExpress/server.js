const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const uri = 'mongodb+srv://komerajaya7259:eihlGz2XfQOM3FoJ@secondcluster.vzmnsfg.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const userInputSchema = new mongoose.Schema({
  userInput: String,
});

const UserInput = mongoose.model('UserInput', userInputSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit', async (req, res) => {
  const userInputValue = req.body.userInput;

  // Save to MongoDB
  try {
    const newUserInput = new UserInput({ userInput: userInputValue });
    await newUserInput.save();
    res.send(`Input value saved to MongoDB: ${userInputValue}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving to database.');
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
