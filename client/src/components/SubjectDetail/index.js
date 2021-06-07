import './styles.sass'
import { useParams, useHistory, NavLink } from 'react-router-dom';
import Card from '../commons/Card'
import Button from '../commons/Button'

const SubjectDetail = ({ subject, onRemoveSubject }) => {

    const params = useParams();
    const history = useHistory();
    const id = params.subjectId;

    const { number, title, creator, description, knowledge, studyFrequency, setGoalDate } = subject

    return (
        <div className="subject__container">
            <span onClick={() => history.goBack()}>Atrás</span>
            <Card className="detail">
                <div className="subject__header">
                    <h1>{number}. {title}</h1>
                    <div className="subject__separator"></div>
                    <p className="subject__creator">{creator.fullname}</p>
                </div>
                <p><span>Descripción: </span>{description}</p>
                <p><span>Estudio: </span>{studyFrequency}</p>
                <div className="subject__footer">
                    <p><span>¿Me lo sé? </span>{knowledge}</p>
                    <p><span>Objetivo: </span>{setGoalDate.split('T')[0]}</p>
                </div>
                <div className="subject__modify">
                    <NavLink to={`/subject-modify/${id}`} className="btn">Editar</NavLink>
                    <Button clicked={() => onRemoveSubject(id)}>Eliminar</Button>
                </div>
            </Card>
        </div>
    );
}
export default SubjectDetail;