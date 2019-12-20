import React from 'react';

import './signup.scss';

const Signup = () => {
  return (
    <div className="signup">
      <form action="submit" className="signup__form">
        <label htmlFor="name">Enter your name:</label>
        <input required type="text" className="signup__email" id="name" />
        <label htmlFor="email">Enter your e-mail:</label>
        <input required type="email" className="signup__email" id="email" />
        <label htmlFor="psw">Password:</label>
        <input required type="password" className="signup__password" id="psw" />
        <button className="signup__btn">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
