import React from 'react';
import './styles.sass'

const Button = ({ clicked, children, type, className }) => {
  return (
    <button
      className={`"button" ${className}`}
      type={type || 'button'}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default Button;