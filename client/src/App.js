import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovies } from './actions';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import Home from './components/layouts/Home';
import MoviesList from './components/MoviesList';
import MovieSeats from './components/MovieSeats';

import './app.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies().catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          {<NavBar />}
          <main className="main">
            <Route path="/" exact component={Home} />
            <Route path="/movies" exact component={MoviesList} />
            <Route path="/movies/:id" exact component={MovieSeats} />
          </main>
          {<Footer />}
        </div>
      </Router>
    );
  }
}

export default connect(null, { fetchMovies })(App);
