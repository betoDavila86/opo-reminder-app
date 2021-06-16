import './styles.sass'
import { useParams, useHistory } from 'react-router-dom';
import Card from '../commons/Card'
import Button from '../commons/Button'

const EditSubjectForm = ({ subject, onConfirmEdit }) => {

    const params = useParams();
    const history = useHistory();
    const id = params.subjectId;

    const { number, title, creator, description, knowledge, setGoalDate, studyFrequency } = subject

    const onSubmit = event => {
        event.preventDefault();

        const { target: { description: { value: description }, knowledge: { value: knowledge }, setGoalDate: { value: setGoalDate }, studyFrequency: { value: studyFrequency }
        } } = event;

        const update = {
            description,
            knowledge,
            setGoalDate,
            studyFrequency
        };

        onConfirmEdit(id, update);
    }

    return (
        <div className="subject__container">
            <span className="subject__back" onClick={() => history.replace(`/my-subjects/${id}`)}>Atrás</span>
            <Card className="detail">
                <div className="subject__header">
                    <h1>{number}. {title}</h1>
                    <div className="subject__separator"></div>
                    <p className="subject__creator">{creator.fullname}</p>
                </div>
                <form onSubmit={onSubmit} className="subject__form">
                    <label htmlFor="description">Descripción: </label>
                    <textarea
                        name="description"
                        id="description"
                        rows="5"
                        cols="42"
                        defaultValue={description} />
                    <div className="input-items">
                        <label htmlFor="studyFrequency">Estudio </label>
                        <select name="studyFrequency" required>
                            <option defaultValue={studyFrequency}>{studyFrequency}</option>
                            <option value="diario">Diario</option>
                            <option value="bisemanal">2x semana</option>
                            <option value="trisemanal">3x semana</option>
                            <option value="semanal">Semanal</option>
                            <option value="quincenal">Quincenal</option>
                            <option value="mensual">Mensual</option>
                        </select>

                        <label htmlFor="knowledge">¿Me lo sé? </label>
                        <select name="knowledge" required>
                            <option defaultValue={knowledge}>{knowledge}</option>
                            <option value="nada">Nada</option>
                            <option value="regular">Regular</option>
                            <option value="bien">Bien</option>
                            <option value="muy bien">Muy bien</option>
                        </select>
                        <label htmlFor="setGoalDate">Objetivo: </label>
                        <input
                            name="setGoalDate"
                            type="date"
                            id="setGoalDate"
                            min="2021-01-01"
                            max="2030-12-31"
                            defaultValue={setGoalDate.split('T')[0]} />
                    </div>
                    <div className="subject__btn-container">
                        <Button className="button" type="submit">Confirmar</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
export default EditSubjectForm;