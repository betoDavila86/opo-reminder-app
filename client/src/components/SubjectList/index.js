import './styles.sass';
import { NavLink } from 'react-router-dom';

const SubjectList = ({ subjects, onDetail }) => {

    return (
        <>
            <div className="list__container">
                <ul className="list">
                    {subjects.map(({ id, title, number, setGoalDate }) => {
                        return <li onClick={() => onDetail(id)} className="list__item" key={id}>
                            <NavLink activeClassName='active' to={`/my-subjects/${id}`}>
                                <h2>{number}. {title}</h2>
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