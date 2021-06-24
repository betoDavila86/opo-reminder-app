import './styles.sass';
import { NavLink } from 'react-router-dom';
import { UilSearchPlus } from '@iconscout/react-unicons';

const SubjectList = ({ subjects, onDetail }) => {

    return (
        <>
            <div className="list__container">
                <ul className="list">
                    {subjects.map(({ id, title, number, setGoalDate }) => {
                        return <li onClick={() => onDetail(id)} className="list__item" key={id}>
                            <NavLink activeClassName='active' to={`/my-subjects/${id}`}>
                                <div className="list__item-header">
                                    <h2>{number}. {title}</h2>
                                    <span><UilSearchPlus size="40" className="list__item-icon" /></span>
                                </div>
                                <p>Objetivo: {setGoalDate.split('T')[0]}</p>
                            </NavLink>
                        </li>
                    })}
                </ul>
            </div>
        </>
    );
}

export default SubjectList;