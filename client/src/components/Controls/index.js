import React from 'react';
import './styles.sass';
import { NavLink } from 'react-router-dom';

function Controls({ user, onRetrieveMySubjects, onFilterSubjects, onGoToBombo }) {
    return (<>
        {user && (<>
            <nav className="nav">
                <div className="nav__flex">
                    <div className="nav__header">
                        <p>Opciones</p>
                    </div>
                    <ul className="nav__list">
                        <NavLink
                            to="/new-subject"
                            className="nav__option"
                            activeClassName="active">Nuevo tema
                            </NavLink>
                        <div className="nav__list-separator"></div>
                        <NavLink
                            to="/my-subjects"
                            className="nav__option"
                            activeClassName="active"
                            onClick={onRetrieveMySubjects}>Mis temas
                            </NavLink>
                        <div className="nav__list-separator"></div>
                        <NavLink
                            to="/priority?sort=date"
                            className="nav__option"
                            activeClassName="active"
                            onClick={() => onFilterSubjects('by-date')}>Ordenar
                            </NavLink>
                        <div className="nav__list-separator"></div>
                        <NavLink
                            to="/bombo"
                            className="nav__option"
                            activeClassName="active"
                            onClick={onGoToBombo}>Sorteo
                            </NavLink>
                        <div className="nav__list-separator"></div>
                    </ul>
                </div>
            </nav>
        </>)}
    </>)
}

export default Controls;