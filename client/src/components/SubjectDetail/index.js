import './styles.sass'
import { useParams, useHistory, NavLink } from 'react-router-dom';
import Card from '../commons/Card'
import Button from '../commons/Button';
import { UilAngleRight, UilArrowLeft } from '@iconscout/react-unicons'

const SubjectDetail = ({ subject, onDelete }) => {

    const params = useParams();
    const history = useHistory();
    const id = params.subjectId;

    const { number, title, creator, description, knowledge, studyFrequency, setGoalDate } = subject

    return (
        <div className="subject__container">
            <span className="subject__back" onClick={() => history.replace('/my-subjects')}><UilArrowLeft className="subject__back-icon" size="40" /></span>
            <Card className="detail">
                <div className="subject__header">
                    <h1>{number}. {title}</h1>
                    <div className="subject__separator"></div>
                    <p className="subject__creator">{creator.fullname}</p>
                </div>
                <div className="subject__info">
                    <div>
                        <span><UilAngleRight className="subject__info-icon" size="35" /></span><p><span>Estudio: </span>{studyFrequency}</p>
                    </div>
                    <div>
                        <span><UilAngleRight className="subject__info-icon" size="35" /></span><p><span>¿Me lo sé? </span>{knowledge}</p>
                    </div>
                    <div>
                        <span><UilAngleRight className="subject__info-icon" size="35" /></span><p><span>Objetivo: </span>{setGoalDate.split('T')[0]}</p>
                    </div>
                    <div>
                        <span><UilAngleRight className="subject__info-icon" size="35" /></span><p><span>Descripción: </span>{description}</p>
                    </div>
                </div>
                <div className="subject__modify">
                    <NavLink to={`/subject-modify/${id}`} className="btn">Editar</NavLink>
                    <Button className="delete" clicked={() => onDelete(id)}>Eliminar</Button>
                </div>
            </Card>
        </div>
    );
}
export default SubjectDetail;