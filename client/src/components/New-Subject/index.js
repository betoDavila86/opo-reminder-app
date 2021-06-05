import './styles.sass'
import Button from '../commons/Button';
import { useHistory } from 'react-router-dom';

const NewSubject = ({ onAddSubject }) => {

    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();
        const { target: {
            number: { value: number },
            title: { value: title },
            knowledge: { value: knowledge },
            studyFrequency: { value: studyFrequency },
            setGoalDate: { value: setGoalDate },
            description: { value: description }
        }
        } = event;

        onAddSubject(number, title, knowledge, studyFrequency, setGoalDate, description);
        history.push('/my-subjects');
    }
    return (
        <div className="form__container">
            <h1 className="form__title">Nuevo tema</h1>
            <div className="form__separator"></div>
            <form className="form" onSubmit={submitHandler}>
                <div className="input-field">
                    <label htmlFor="number">Número</label>
                    <input type="text" name="number" required />
                </div>
                <div className="input-field">
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" required />
                </div>
                <div className="input-field">
                    <label htmlFor="knowledge">Conocimiento del tema</label>
                    <select name="knowledge" required>
                        <option value="nada">Nada</option>
                        <option value="regular">Regular</option>
                        <option value="bien">Bien</option>
                        <option value="muy bien">Muy bien</option>
                    </select>
                </div>
                <div className="input-field">
                    <label htmlFor="studyFrequency">Frecuencia de estudio</label>
                    <select name="studyFrequency" required>
                        <option value="diario">Diario</option>
                        <option value="bisemanal">2x semana</option>
                        <option value="trisemanal">3x semana</option>
                        <option value="semanal">Semanal</option>
                        <option value="quincenal">Quincenal</option>
                        <option value="mensual">Mensual</option>
                    </select>
                </div>
                <div className="input-field">
                    <label htmlFor="setGoalDate">Fecha objetivo:</label>
                    <input type="date" id="setGoalDate" name="setGoalDate"
                        min="2020-01-01" max="2030-12-31"></input>
                </div>
                <div className="input-field">
                    <label htmlFor="description">Descripción</label>
                    <textarea name="description" rows="5" cols="35" placeholder="Breve descripción del tema a añadir"></textarea>
                </div>
                <Button type="submit">Añadir</Button>
            </form>
        </div >
    );

}

export default NewSubject;