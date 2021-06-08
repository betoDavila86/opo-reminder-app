import React from 'react';
import './styles.sass';
import { NavLink, useRouteMatch } from 'react-router-dom';

function PrioritySubjectsLinks({ onFilterSubjects }) {
    const match = useRouteMatch();

    return (<>
        <nav className="priority">
            <div className="priority__flex">
                <ul className="priority__list">
                    <NavLink
                        exact
                        to={`${match.path}?sort=knowledge`}
                        className="priority__option"
                        onClick={() => onFilterSubjects('by-knowledge')}
                        activeClassName="active">Por conocimiento
                            </NavLink>
                    <NavLink
                        exact
                        to={`${match.path}?sort=date`}
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