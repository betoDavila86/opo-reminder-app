import React from 'react';
import './styles.sass';
import Button from '../Button';

function Feedback({ message, onHideModal }) {
    return (<>
        <div className="backdrop" onClick={onHideModal}>
            <div className="feedback">
                <h2 className={`feedback__text`}>{message}</h2>
                <div className="actions">
                    <Button className="button" clicked={onHideModal}>Ok</Button>
                </div>
            </div>
        </div>
    </>)
}

export default Feedback;