import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.sass';

function Navbar({ user, navigation }) {
    return (<>
        {user && (<>
            <nav className="nav">
                <div className="nav__flex">
                    <div className="nav__header">
                        <p>Opciones</p>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__option" onClick={event => {
                            event.preventDefault();

                            navigation('new-subject');
                        }}>{/* <FontAwesomeIcon icon='' /> */}Nuevo tema</li>
                        <li className="nav__option" onClick={event => {
                            event.preventDefault();

                            navigation('my-subjects');
                        }}>{/* <FontAwesomeIcon icon='' /> */}Mis temas</li>
                        <li className="nav__option" onClick={event => {
                            event.preventDefault();

                            navigation('priority-subjects');
                        }}>{/* <FontAwesomeIcon icon='' /> */}Temas prioritarios</li>
                        <li className="nav__option" onClick={event => {
                            event.preventDefault();

                            navigation('opo-bombo');
                        }}>{/* <FontAwesomeIcon icon='' /> */}Opo B0mb0</li>
                    </ul>
                </div>
            </nav>
        </>)}
    </>)
}

export default Navbar;