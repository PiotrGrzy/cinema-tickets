const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const mailer = require('./mailer');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const DB =
  'mongodb+srv://Piotr:abc123456@cluster0-zu8mn.mongodb.net/movies?retryWrites=true&w=majority';

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

// GET all movies
app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.send({ results: movies });
  } catch (err) {
    console.log(err);
  }
});

// GET single movie
app.get('/api/movies/:id', async (req, res) => {
  console.log(req);
  try {
    const movie = await Movie.findById(req.params.id);
    res.send({ results: movie });
  } catch (err) {
    console.log(err);
  }
});

// ADD new movie
app.post('/api/movies', async (req, res) => {
  const { title, time, tags, description, seats, id } = req.body;
  try {
    const newMovie = new Movie({
      title,
      time,
      tags,
      description,
      seats,
      id
    });
    const movie = await newMovie.save();
    res.json(movie);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// UPGRADE movie seats
app.put('/api/movies/:id', async (req, res) => {
  try {
    let movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ msg: 'Movie not found' });

    movie = await Movie.findByIdAndUpdate(req.params.id, {
      seats: req.body.seats
    });
    res.send('Reservation of seats....succesfull');
  } catch (err) {
    console.log(err);
  }
});

app.post('/send', async (req, res) => {
  const { email, movie, messageHtml} = req.body;
  try {
    mailer.sendMail(email, movie, messageHtml);
    res.send('Email sent succesfully');
  } catch(err) {
    console.log(err);
  }
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
