import './styles.sass';

const SubjectList = ({ subjects, onDetail }) => {

    return (
        <>
            <div className="list__container">
                <ul className="list">
                    {subjects.map(({ id, title, number, setGoalDate }) => {
                        return <li onClick={() => onDetail(id)} className="list__item" key={id}>
                            <h2>{number}. {title}</h2>
                            <p>Objetivo: {setGoalDate.split('T')[0]}</p>
                        </li>
                    })}
                </ul>
            </div>
        </>
    );
}

export default SubjectList;