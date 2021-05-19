import React from 'react';
import './styles.sass'

const Button = ({ clicked, children, type }) => {
  return (
    <button
      className="button"
      type={type || 'button'}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default Button;