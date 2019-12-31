const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Movie = require('./models/movieSchema');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const movies = require('./movies');

const DB =
  'mongodb+srv://Piotr:abc123456@cluster0-zu8mn.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connection succesfull!');
  });

// API calls
app.get('/api', (req, res) => {
  res.send({ express: 'Get request from Cinema-tickets-API' });
});

app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.send({ results: movies });
  } catch (err) {
    console.log(err);
  }
});

app.post('/api', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
