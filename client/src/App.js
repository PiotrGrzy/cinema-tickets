import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchMovies } from "./actions";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import MoviesList from "./components/MoviesList";
import MovieSeats from "./components/MovieSeats";

import "./app.scss";

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies().catch(err => console.log(err));
  }

  // mainComp = () => {
  //   return (
  //     <div>
  //       <p>{this.state.response}</p>
  //       <form onSubmit={this.handleSubmit}>
  //         <p>
  //           <strong>Post to Server:</strong>
  //         </p>
  //         <input
  //           type="text"
  //           value={this.state.post}
  //           onChange={e => this.setState({ post: e.target.value })}
  //         />
  //         <button type="submit">Submit</button>
  //       </form>
  //       <p>{this.state.responseToPost}</p>
  //     </div>
  //   );
  // };

  render() {
    return (
      <Router>
        <div className="App">
          {<NavBar />}
          <main className="main">
            <Route path="/" exact component={MoviesList} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/:id" exact component={MovieSeats} />
          </main>
          {<Footer />}
        </div>
      </Router>
    );
  }
}

export default connect(null, { fetchMovies })(App);
