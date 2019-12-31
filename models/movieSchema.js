const mongoose = require('mongoose');
var SeatSchema = mongoose.Schema({
  id: Number,
  available: Boolean
});

const MovieSchema = mongoose.Schema({
  title: String,
  id: Number,
  time: Number,
  imageURL: String,
  description: String,
  tags: [],
  seats: [SeatSchema]
});

module.exports = mongoose.model('Movie', MovieSchema, 'movie-list');
