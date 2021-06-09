import './styles.sass';

const RaffleList = ({ subjects }) => {
    return (
        <div className="raffle">
            <h1>Temas escogidos</h1>
            <div className="raffle__subjects">
                <ul className="raffle__list">
                    {subjects.map(({ number, title, id }) => {
                        return <li key={id}><p>{number}. {title}</p></li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default RaffleList;