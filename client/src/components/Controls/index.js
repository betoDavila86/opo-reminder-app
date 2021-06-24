import React from 'react';
import './styles.sass';
import { NavLink } from 'react-router-dom';
import { UilEllipsisV, UilPlusCircle, UilListOl, UilFilter, UilArrowRandom } from '@iconscout/react-unicons';

function Controls({ user, onRetrieveMySubjects, onFilterSubjects, onGoToBombo }) {
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
                            onClick={onRetrieveMySubjects}>Lista <span><UilListOl className="nav__option-icon" size="25" /></span>
                        </NavLink>
                        <div className="nav__list-separator"></div>
                        <NavLink
                            to="/priority?sort=date"
                            className="nav__option"
                            activeClassName="active"
                            onClick={() => onFilterSubjects('by-date')}>Filtro <span><UilFilter className="nav__option-icon" size="25" /></span>
                        </NavLink>
                        <div className="nav__list-separator"></div>
                        <NavLink
                            to="/bombo"
                            className="nav__option"
                            activeClassName="active"
                            onClick={onGoToBombo}>Sorteo <span><UilArrowRandom className="nav__option-icon" size="25" /></span>
                        </NavLink>
                        <div className="nav__list-separator"></div>
                    </ul>
                </div>
            </nav>
        </>)}
    </>)
}

export default Controls;