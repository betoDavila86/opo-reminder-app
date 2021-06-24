import './styles.sass'
import Button from '../../commons/Button';
import RaffleList from '../RaffleList';
import { UilExclamationTriangle } from '@iconscout/react-unicons';

const RaffleForm = ({ onRaffleSubjects, raffledSubjects }) => {

    const submitHandler = (event) => {
        event.preventDefault();
        const { target: {
            numberSubjectsTotal: { value: numberSubjectsTotal },
            numberSubjects: { value: numberSubjects },
        }
        } = event;

        onRaffleSubjects(Number(numberSubjectsTotal), Number(numberSubjects));
    }
    return (<>
        <h3 className="raffle__info"><span><UilExclamationTriangle className="raffle__info-icon" size="35" /></span> 
        Haz un simulacro del sorteo de temas añadidos hasta ahora. El nº de bolas indicarán los temas aleatoriamente escogidos</h3>
        <div className="form__container">
            <h1 className="form__title">Sorteo temas</h1>
            <div className="form__separator"></div>
            <form className="form" onSubmit={submitHandler}>
                <div className="input-field">
                    <label htmlFor="numberSubjectsTotal">Nº de temas totales</label>
                    <input type="text" name="numberSubjectsTotal" required />
                </div>
                <div className="input-field">
                    <label htmlFor="numberSubjects">Nº de bolas</label>
                    <input type="number" name="numberSubjects" required />
                </div>
                <div className="form__button">
                    <Button className="button" type="submit">Sortear</Button>
                </div>
            </form>
        </div >
        {raffledSubjects && raffledSubjects.length ? <RaffleList subjects={raffledSubjects} /> : null}
    </>
    );
}

export default RaffleForm;