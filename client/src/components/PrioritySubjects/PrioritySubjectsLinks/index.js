import React from 'react';
import './styles.sass';
import { NavLink } from 'react-router-dom';

function PrioritySubjectsLinks({ onFilterSubjects }) {
    return (<>
        <nav className="priority">
            <div className="priority__flex">
                <ul className="priority__list">
                    <NavLink
                        to="/priority?sort=knowledge"
                        className="priority__option"
                        onClick={() => onFilterSubjects('by-knowledge')}
                        activeClassName="active">Por conocimiento
                            </NavLink>
                    <NavLink
                        to="/priority?sort=date"
                        className="priority__option"
                        activeClassName="active"
                        onClick={() => onFilterSubjects('by-date')}>Por fecha
                            </NavLink>
                </ul>
            </div>
        </nav>
    </>)
}

export default PrioritySubjectsLinks;