import React from 'react';

const Modal = ({ heading, text }) => {
  return (
    <div className="modal">
      <div className="modal__inner">
        <h3 className="modal__heading">{heading}</h3>
        <p className="modal__text">{text}</p>
      </div>
    </div>
  );
};

export default Modal;
