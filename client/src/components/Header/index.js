import React from 'react';
import './styles.sass';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Button from '../commons/Button'

const Header = ({ onSearch, user, onLogout }) => {

    const history = useHistory();

    const onSubmit = event => {
        event.preventDefault();
        const { target: { q: { value: q } } } = event;
        onSearch(q);
        history.replace(`/search?title=${q}`);
        // console.log(location);
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
                        <div className="header__top-end">
                            <p onClick={() => history.push('/')} className="header__welcome">¡Bienvenid@, {user.fullname.split(' ')[0]}!</p>
                            <Link to="/sign-in" className="header__logout" onClick={onLogout}>Logout</Link>
                        </div>
                        <div className="header__search-container">
                            <form onSubmit={onSubmit} className="header__form">
                                <input type='search' id="search" name='q' placeholder='Título del tema'></input>
                                <Button className="button" type="submit">Buscar</Button>
                            </form>
                        </div>
                    </div>
                </>)}
            </div>
        </header>
    </>)
}
export default Header;
