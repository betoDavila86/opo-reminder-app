import React from 'react';
import './styles.sass';
import * as Unicons from '@iconscout/react-unicons';

const Footer = () => {
    let date = new Date();
    date = date.getFullYear();

    return (
        <nav className="footer">
            <div className="footer__container">
                <div>{`©️ ${date} Beto Dávila`}</div><span><a href="https://github.com/betoDavila86" target="_blank" rel="noreferrer"><Unicons.UilGithub size="40" className="footer__icon"/></a></span>
                <span><a href="https://www.linkedin.com/in/alberto-davila-gomez/" target="_blank" rel="noreferrer"><Unicons.UilLinkedin size="40" className="footer__icon"/></a></span>
            </div>
        </nav>
    );
};

export default Footer;