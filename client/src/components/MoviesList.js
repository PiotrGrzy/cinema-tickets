import React from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';

import './movies-list.scss';

const MoviesList = props => {
  return (
    <ul className="movies-list">
      {props.movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(mapStateToProps)(MoviesList);
