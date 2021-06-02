import React from 'react';
import './styles.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ onSearch, user, navigation, onLogout, onGoHome }) => {
    const onSubmit = event => {
        event.preventDefault();
        const { target: { q: { value: q } } } = event

        onSearch(q);
    }
    return (<>
        <header className="header">
            <div className="header__grid">
                {!user && <>
                    <p className="header__title">OPO REMINDER</p>
                    <p className="header__subtitle">Don't study harder, study smarter</p>
                </>}

                {user && (<>
                    <div className="header__top-user">
                        <p className="header__welcome">Bienvenido, {user.fullname}!</p>
                        <a href="#" className="header__logout" onClick={event => {
                            event.preventDefault();
                            onLogout();
                        }}> Logout</a>
                    </div>
                    <div className="header__nav-container">
                        <nav className="header__nav">
                            <form onSubmit={onSubmit} className="header__search">
                                <label htmlFor="search">Buscar</label>
                                <input type='search' id="search" name='q' placeholder='Título del tema'></input>
                                <button type="submit">Buscar</button>
                            </form>
                        </nav>
                    </div>
                </>)}

                {/* {!user && (<>
                    <p className="header__welcome">Entra o Regístrate</p>
                    <FontAwesomeIcon icon="sign-in-alt" className="header__sign-in icon" onClick={event => {
                        event.preventDefault();
                        navigation('/sign-in');
                    }} />
                    <FontAwesomeIcon icon="user" className="header__sign-up icon" onClick={event => {
                        event.preventDefault();
                        navigation('/sign-up');
                    }} />
                </>)} */}
            </div>
        </header>
    </>)
}
export default Header;
