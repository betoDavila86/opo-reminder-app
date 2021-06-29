import React from 'react';
import './styles.sass';
import { NavLink } from 'react-router-dom';
import { UilEllipsisV, UilPlusCircle, UilListOl, UilFilter, UilArrowRandom } from '@iconscout/react-unicons';
import logo from '../../assets/img/opo-reminder.png';

function Controls({ user, onRetrieveMySubjects, onFilterSubjects, onGoToBombo, onGoToHome }) {
    return (<>
        {user && (<>
            <nav className="nav">
                <div className="nav__flex">
                    <div className="nav__header">
                        <p>Opciones </p>
                        <div className="nav__header-icon">
                            <span><UilEllipsisV size="20" /></span>
                        </div>
                    </div>
                    <ul className="nav__list">
                        <NavLink
                            to="/new-subject"
                            className="nav__option"
                            activeClassName="active"><span>Nuevo </span><span><UilPlusCircle className="nav__option-icon" size="25" /></span>
                        </NavLink>
                        <div className="nav__list-separator"></div>
                        <NavLink
                            to="/my-subjects"
                            className="nav__option"
                            activeClassName="active"
                            onClick={onRetrieveMySubjects}><span>Lista </span><span><UilListOl className="nav__option-icon" size="25" /></span>
                        </NavLink>
                        <div className="nav__list-separator"></div>
                        <NavLink
                            to="/priority?sort=date"
                            className="nav__option"
                            activeClassName="active"
                            onClick={() => onFilterSubjects('by-date')}><span>Filtro </span><span><UilFilter className="nav__option-icon" size="25" /></span>
                        </NavLink>
                        <div className="nav__list-separator"></div>
                        <NavLink
                            to="/bombo"
                            className="nav__option"
                            activeClassName="active"
                            onClick={onGoToBombo}><span>Sorteo </span><span><UilArrowRandom className="nav__option-icon" size="25" /></span>
                        </NavLink>
                        <div className="nav__list-separator"></div>
                    </ul>
                    <div className="nav__logo-container">
                        <div className="nav__logo-circle">
                            <img src={logo} alt="logo" className="nav__logo-img" onClick={onGoToHome} />
                        </div>
                    </div>
                </div>
            </nav>
        </>)}
    </>)
}

export default Controls;