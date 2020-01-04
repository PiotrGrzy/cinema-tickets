import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__heading">
        Welcome Cinema-Ticket: React - Node.js application
      </h1>
      <p className="home__text">
        This application lets you browse available movies and book tickets with
        e-mail confirmation.
      </p>
      <Link className="home__link" to="/movies">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
