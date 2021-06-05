import React from 'react';
import './styles.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faGlasses, faUser  } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onSearch, user, onLogout, onGoToHome }) => {
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
                    <div className="header__user">
                        <p className="header__welcome">Bienvenid@, {user.fullname.split(' ')[0]}! <FontAwesomeIcon icon={faUser} size='xs'/></p>
                        <div className="header__top-end">
                            <Link to="/sign-in" className="header__logout" onClick={onLogout}>Logout</Link>
                            <div className="header__search-container">
                                <form onSubmit={onSubmit} className="header__form">
                                    <input type='search' id="search" name='q' placeholder='Título del tema'></input>
                                    <button type="submit"><FontAwesomeIcon icon={faGlasses} size="xl"/></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
        </header>
    </>)
}
export default Header;
