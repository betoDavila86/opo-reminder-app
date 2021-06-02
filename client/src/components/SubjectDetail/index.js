import './styles.sass'
import { useParams } from 'react-router-dom';

const SubjectDetail = ({ subject }) => {

    const params = useParams();
    console.log(params.subjectId)

    const { number, title, creator, description, knowledge, setGoalDate } = subject

    return (
        <div className="subject__container">
            <span>Atrás</span>
            <div className="subject__header">
                <h1>{number}. {title}</h1>
                <p>Creado por: {creator.fullname}</p>
            </div>
            <p>Descripción: {description}</p>
            <div className="subject__footer">
                <span>¿Me lo sé? {knowledge}</span>
                <span>Objetivo: {setGoalDate.split('T')[0]}</span>
            </div>
        </div>
    );
}
export default SubjectDetail;