import './styles.sass'

const NotFound = ({ type }) => {
    if (type === 'not-found') {
        return (   
            <section className="not-found__container">
                <h1>No se ha encontrado el recurso </h1>
            </section>
        )
    }

    if (type === 'empty') {
        return (   
            <section className="not-found__container">
                <h1>No hay nada que mostrar</h1>
            </section>
        )
    }
}

export default NotFound;