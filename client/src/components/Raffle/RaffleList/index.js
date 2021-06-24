import './styles.sass';
import { UilMedal } from '@iconscout/react-unicons';

const RaffleList = ({ subjects }) => {
    return (
        <div className="raffle">
            <h1 className="raffle__title">Temas escogidos</h1>
            <div className="raffle__subjects">
                <ul className="raffle__list">
                    {subjects.map(({ number, title, id }) => {
                        return <li key={id}>
                            <div>
                                <span><UilMedal size="30" className="raffle__list-icon" /></span><p>{number}. {title}</p>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default RaffleList;