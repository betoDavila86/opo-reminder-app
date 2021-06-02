import React from 'react';
import './styles.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Feedback from '../Feedback';

function AuthenticationComponent({ title, navigation, onLogin, onRegister, error }) {

    function submitHandler(event) {
        event.preventDefault();

        if (title === 'Registro') {
            const { target: { email: { value: email }, password: { value: password }, fullname: { value: fullname } } } = event;
            onRegister(fullname, email, password)
        } else {
            const { target: { email: { value: email }, password: { value: password } } } = event;
            onLogin(email, password)
        }
    }

    return (<>
        <form className="credentials" onSubmit={submitHandler}>
            <p className="credentials__header">{title}</p>
            <div className="credentials__separator"></div>
            {title === "Registro" && <input type="text" name="fullname" className="credentials__input" placeholder="Pepito Grillo" required />}
            <input type="text" name="email" className="credentials__input" placeholder="tu_email@mail.com" required />
            <input type="password" name="password" className="credentials__input" placeholder="Tu contraseña" required />

            {error && <Feedback feedback={error} />}

            <button type="submit" className="credentials__submit-button">Continuar</button>
            {title === "Acceso" && <a href="" onClick={event => {
                event.preventDefault();
                navigation('/sign-up')
            }}>¿No eres miembro aún? Regístrate</a>}
            {title === "Registro" && <a href="" onClick={event => {
                event.preventDefault();
                navigation('/sign-in')
            }}>¿Ya estás registrado? Accede</a>}
        </form>
    </>)
}

export default AuthenticationComponent;