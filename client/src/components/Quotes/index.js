import './styles.sass'

const Quotes = () => {
    const quotes = [
        {
            message: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.',
            author: 'Malcolm X'
        },
        {
            message: 'The man who does not read books has no advantage over the one who cannot read them.',
            author: 'Mark Twain'
        },
        {
            message: 'Teachers can open the door, but you must enter it yourself.',
            author: 'Chinese proverb'
        },
        {
            message: 'The beautiful thing about learning is that no one can take it away from you.',
            author: 'B.B. King'
        },
        {
            message: 'The mind is not a vessel to be filled but a fire to be ignited.',
            author: 'Plutarch'
        },
        {
            message: 'Education is the most powerful weapon you can use to change the world.',
            author: 'B.B. King'
        },
        {
            message: 'A person who never made a mistake never tried anything new.',
            author: 'Albert Einstein'
        },
        {
            message: 'You don’t have to be great to start, but you have to start to be great.',
            author: 'Zig Ziglar'
        }
    ]
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <section className="quote__container">
            <h1 className="quote__message">"{randomQuote.message}"</h1>
            <p className="quote__author">{randomQuote.author}</p>
        </section>
    )
}

export default Quotes;