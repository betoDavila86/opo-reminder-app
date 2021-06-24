import './styles.sass';
import { useEffect, useState } from 'react';
import Spinner from '../commons/Spinner';
import { UilBookOpen } from '@iconscout/react-unicons'

const Quotes = () => {

    const [quote, setQuote] = useState();

    useEffect(() => {
        fetch('https://quotes.rest/qod?category=inspire&language=en', { method: 'GET' })
            .then(response => response.json())
            .then(data => setQuote(data.contents.quotes[0]))
            .catch(error => console.log(error))
    }, []);

    // const quotes = [
    //     {
    //         message: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.',
    //         author: 'Malcolm X'
    //     },
    //     {
    //         message: 'The man who does not read books has no advantage over the one who cannot read them.',
    //         author: 'Mark Twain'
    //     },
    //     {
    //         message: 'Teachers can open the door, but you must enter it yourself.',
    //         author: 'Chinese proverb'
    //     },
    //     {
    //         message: 'The beautiful thing about learning is that no one can take it away from you.',
    //         author: 'B.B. King'
    //     },
    //     {
    //         message: 'The mind is not a vessel to be filled but a fire to be ignited.',
    //         author: 'Plutarch'
    //     },
    //     {
    //         message: 'Education is the most powerful weapon you can use to change the world.',
    //         author: 'B.B. King'
    //     },
    //     {
    //         message: 'A person who never made a mistake never tried anything new.',
    //         author: 'Albert Einstein'
    //     },
    //     {
    //         message: 'You don’t have to be great to start, but you have to start to be great.',
    //         author: 'Zig Ziglar'
    //     },
    //     {
    //         message: 'The way to get started is to quit talking and begin doing.',
    //         author: 'Walt Disney'
    //     },
    //     {
    //         message: 'I think it’s possible to ordinary people to choose to be extraordinary.',
    //         author: 'Elon Musk'
    //     },
    //     {
    //         message: 'I find that the harder I work, the more luck I seem to have.',
    //         author: 'Thomas Jefferson'
    //     }
    // ]

    // const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    if (quote) {
        return (
            <section className="quote__container">
                <div className="quote__top">
                    <h1 className="quote__title">Cita del día</h1>
                    <span className="quote__date">{quote.date}</span>
                    <div className="quote__img">
                        <UilBookOpen size="30" className="quote__img-icon"/>
                    </div>
                </div>
                <h3 className="quote__message">"{quote.quote}"</h3>
                <div className="quote__bottom">
                    <div>
                        {quote.tags.map(tag => {
                            return <span className="quote__tag" key={tag}>#{tag} </span>
                        })}
                    </div>
                    <p className="quote__author">{quote.author}</p>
                </div>
            </section>
        );
    } else {
        return (<Spinner />);
    }

}

export default Quotes;