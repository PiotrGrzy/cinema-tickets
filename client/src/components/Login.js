import React from 'react';

import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <form action="submit" className="login__form">
        <label htmlFor="email">Enter your e-mail:</label>
        <input type="text" className="login__email" id="email" required />
        <label htmlFor="psw">Password:</label>
        <input type="text" className="login__password" id="psw" required />
        <button className="login__btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
