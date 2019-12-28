import React from 'react';
import { Link } from 'react-router-dom';

import './movie.scss';

const Movie = ({ movie }) => {
  const path = `/movies/${movie.id}`;
  return (
    <li className="movie">
      <div className="movie__img-box">
        <img src={movie.imageURL} alt="" className="movie__img" />
      </div>
      <div className="movie__info">
        <h3 className="movie__title">{movie.title}</h3>
        <span className="movie__time">Time: {movie.time}mins</span>
        <span className="movie__tags">
          {movie.tags.map(tag => tag).join('/')}
        </span>
        <p className="movie__description">{movie.description}</p>
        <Link to={path} className="movie__link">
          Book ticket
        </Link>
      </div>
    </li>
  );
};

export default Movie;
