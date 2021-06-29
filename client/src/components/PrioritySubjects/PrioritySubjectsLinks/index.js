import React from 'react';
import './styles.sass';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { UilExclamationOctagon, UilSchedule } from '@iconscout/react-unicons';

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
                        onClick={() => onFilterSubjects('by-knowledge')}>
                        <p>Por prioridad</p><span><UilExclamationOctagon className="priority__option-icon" size="30" /></span>
                    </NavLink>
                    <NavLink
                        exact
                        to={`${match.path}?sort=date`}
                        className="priority__option"
                        onClick={() => onFilterSubjects('by-date')}>
                        <p>Por fecha</p><span><UilSchedule className="priority__option-icon" size="30" /></span>
                    </NavLink>
                </ul>
            </div>
        </nav>
    </>)
}

export default PrioritySubjectsLinks;