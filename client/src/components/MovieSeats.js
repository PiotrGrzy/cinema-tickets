import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { bookTickets } from '../actions';
import Seat from './Seat';

import './movie-seats.scss';

class MovieSeats extends Component {
  state = {
    marked: [],
  };

  onSeatClick = (e) => {
    const clickedSeat = e.target.closest('.seat');
    const clickedSeatNumber = clickedSeat.firstChild.innerText * 1;

    if (clickedSeat) {
      if (this.state.marked.includes(clickedSeatNumber)) {
        // unmark seat
        clickedSeat.style.backgroundColor = '#3ebd60';
        const marked = this.state.marked.filter(
          (item) => item !== clickedSeatNumber
        );
        this.setState({ marked: marked });
      } else {
        // mark seat
        clickedSeat.style.backgroundColor = '#0394fc';
        this.setState({
          marked: [...this.state.marked, clickedSeatNumber],
        });
      }
    }
  };

  bookTickets = () => {
    if (this.state.marked.length > 0) {
      // send marked seats for reservation
      if (this.props.isSignedIn) {
        const { movie } = this.props;
        const bookSeat = (seatNr) => {
          const seat = movie.seats.find((seat) => seat.id === seatNr);
          seat.available = false;
        };
        this.state.marked.forEach((seatNumber) => bookSeat(seatNumber));
        this.props.bookTickets(movie._id, movie.seats);
        axios({
          method: 'POST',
          url: 'https://cinema-tickets.herokuapp.com/api/send',
          data: {
            email: this.props.email,
            movie: this.props.movie.title,
            messageHtml: this.state.marked,
          },
        });
      } else {
        return alert('U must be signed in to book tickets');
      }
    }
  };

  render() {
    let seats = [];
    if (this.props.movie) {
      seats = this.props.movie.seats;
    }

    return (
      <>
        <div className="screen">SCREEN</div>
        <div className="movies-seats">
          {seats.map((seat) => (
            <Seat
              click={seat.available ? this.onSeatClick : null}
              key={seat.id}
              number={seat.id}
              available={seat.available}
            />
          ))}
        </div>

        <div className="legend">
          <div>
            <span className="box box--green"></span>
            <span>- available</span>
          </div>
          <div>
            <span className="box box--red"></span>
            <span>- already booked</span>
          </div>
        </div>
        <button onClick={this.bookTickets} className="book-btn">
          Book tickets
        </button>
        <div className="movies-seats__link">
          <Link to="/movies">Back to Movie List</Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies.find((movie) => movie._id === ownProps.match.params.id),
    isSignedIn: state.auth.isSignedIn,
    email: state.auth.userEmail,
  };
};

export default connect(mapStateToProps, { bookTickets })(MovieSeats);
