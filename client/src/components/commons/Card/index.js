import React from 'react';
import './styles.sass'

const Card = ({ className, children }) => {
    return <div className={`card ${className}`}>{children}</div>;
};

export default Card;