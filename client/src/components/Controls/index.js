import React from 'react';
import './styles.sass';
import { NavLink } from 'react-router-dom';

function Controls({ user }) {
    return (<>
        {user && (<>
            <nav className="nav">
                <div className="nav__flex">
                    <div className="nav__header">
                        <p>Opciones</p>
                    </div>
                    <ul className="nav__list">
                        <NavLink
                            to="new-subject"
                            className="nav__option"
                            activeClassName="active">Nuevo tema
                            </NavLink>
                        <NavLink
                            to="my-subjects"
                            className="nav__option"
                            activeClassName="active">Mis temas
                            </NavLink>
                        <NavLink
                            to="priority"
                            className="nav__option"
                            activeClassName="active">Prioritarios
                            </NavLink>
                    </ul>
                </div>
            </nav>
        </>)}
    </>)
}

export default Controls;