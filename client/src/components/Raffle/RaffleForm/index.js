import './styles.sass'
import Button from '../../commons/Button';
import RaffleList from '../RaffleList';
import Card from '../../commons/Card';

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
        <Card className="description">Haz un simulacro del sorteo de temas según tu caso. El nº de bolas indicarán los temas aleatoriamente escogidos</Card>
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
                    <Button type="submit">Sortear</Button>
                </div>
            </form>
        </div >
        {raffledSubjects && raffledSubjects.length ? <RaffleList subjects={raffledSubjects} /> : null}
    </>
    );
}

export default RaffleForm;