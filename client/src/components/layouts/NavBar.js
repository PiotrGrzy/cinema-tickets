import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar__logo">Cinema-Tickets</span>
      <ul className="navbar__menu">
        <li className="navbat__menu-item">
          <Link to="/">Movies</Link>
        </li>
        <li className="navbar__menu-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="navbar__menu-item">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
