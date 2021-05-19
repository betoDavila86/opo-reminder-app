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
                <p className="header__title">
                    {/* <FontAwesomeIcon icon="book" className="icon" onClick={event => {
                        event.preventDefault();
                        onGoHome()
                    }} /> */}
                OpO Reminder</p>

                {user && (<>
                    <p className="header__welcome">Bienvenido, {user.fullname}!</p>
                    {/* <FontAwesomeIcon icon="user" className="user icon" /> */}
                    <div className="header__nav-container">
                        <nav className="header__nav">
                            <form onSubmit={onSubmit} className="header__search">
                                <label htmlFor="search">Buscar tema</label>
                                <input type='search' id="search" name='q' placeholder='Buscar un tema'></input>
                                <button type="submit">Buscar</button>
                            </form>
                            {/* <FontAwesomeIcon icon="sign-out-alt" className="logout icon" onClick={event => {
                                event.preventDefault();
                                onLogout();
                            }} /> */}
                            <p>Logout</p>
                        </nav>
                    </div>
                </>)}

                {!user && (<>
                    <p className="header__welcome">Entra o Regístrate</p>
                    {/* <FontAwesomeIcon icon="sign-in-alt" className="header__sign-in icon" onClick={event => {
                        event.preventDefault();
                        navigation('/sign-in');
                    }} /> */}
                    {/* <FontAwesomeIcon icon="user" className="header__sign-up icon" onClick={event => {
                        event.preventDefault();
                        navigation('/sign-up');
                    }} /> */}
                </>)}
            </div>
        </header>
    </>)
}
export default Header;
