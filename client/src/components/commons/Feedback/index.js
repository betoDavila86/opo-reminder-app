import React from 'react';
import './styles.sass';

function Feedback({ level, message }) {
    return (<>
        <div className="feedback">
            <p className={`feedback__text ${level}`}>{message}</p>
        </div>
    </>)
}

export default Feedback;