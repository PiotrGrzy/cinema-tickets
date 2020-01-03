import React from 'react';

import './seat.scss';

const Seat = props => {
  let styles = { backgroundColor: '#3ebd60' };
  if (!props.available) styles = { backgroundColor: '#bd4b3e' };

  return (
    <div className="seat" style={styles} onClick={props.click}>
      <p className="seat__number">{props.number}</p>
    </div>
  );
};

export default Seat;
