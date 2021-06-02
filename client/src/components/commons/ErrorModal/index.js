import React from 'react';
import './styles.sass';
import Card from '../Card';
import Button from '../Button'

const ErrorModal = ({ title, message, onHideModal }) => {
    return (
        <div>
            <div onClick={onHideModal} className="backdrop" />
            <Card className="modal">
                <header className="header">
                    <h2>{title}</h2>
                </header>
                <div className="content">
                    <p>{message}</p>
                </div>
                <footer className="actions">
                    <Button clicked={onHideModal}>OK</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;