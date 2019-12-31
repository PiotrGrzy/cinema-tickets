const mongoose = require('mongoose');
var SeatSchema = mongoose.Schema({
  id: Number,
  available: Boolean
});

const MovieSchema = mongoose.Schema(
  {
    title: String,
    id: Number,
    time: Number,
    imageURL: String,
    description: String,
    tags: [],
    seats: [SeatSchema]
  },
  {
    collection: 'movie-list'
  }
);

module.exports = mongoose.model('Movie', MovieSchema, 'movie-list');

// var userSchema = new mongoose.Schema({
//   name: String,
//   email: {
//     type: String, unique:true
//   }
// },
// {
//   collection: 'myuserlist'
// });
