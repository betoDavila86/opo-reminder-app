import React from 'react';
import './styles.sass';
import { Link, useHistory } from 'react-router-dom';
import Button from '../commons/Button';
import { UilSignout, UilSearchAlt, UilUser } from '@iconscout/react-unicons';
import logo from '../../assets/img/opo-reminder.png'

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
                <div><img src={logo} alt="logo" className="header__logo" /></div>
                <div><p className="header__title">OPO REMINDER</p>
                    <p className="header__subtitle">Don't study harder, study smarter</p></div>
                    
                </>}

                {user && (<>
                    <div className="header__user">
                        <div className="header__top-end">
                            <div>
                                <p onClick={() => history.push('/')} className="header__welcome">Bienvenid@, {user.fullname.split(' ')[0]} </p><span className="header__top-end-icon"><UilUser /></span>
                            </div>
                            <Link to="/sign-in" className="header__logout" onClick={onLogout}><UilSignout size="30" className="header__logout-icon" /></Link>
                        </div>
                        <div className="header__search-container">
                            <form onSubmit={onSubmit} className="header__form">
                                <input type='search' id="search" name='q' placeholder='Título del tema'></input>
                                <Button className="button" type="submit"><UilSearchAlt size="25" /></Button>
                            </form>
                        </div>
                    </div>
                </>)}
            </div>
        </header>
    </>)
}
export default Header;
