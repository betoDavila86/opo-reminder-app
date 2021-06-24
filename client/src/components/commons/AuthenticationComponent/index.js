import React from 'react';
import './styles.sass';
import Feedback from '../Feedback';
import { Link } from 'react-router-dom';

function AuthenticationComponent({ title, onLogin, onRegister, error }) {

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
            <input type="text" name="email" className="credentials__input" placeholder="email@mail.com" required />
            <input type="password" name="password" className="credentials__input" placeholder="password" required />

            {error && <Feedback feedback={error} />}

            <button type="submit" className="credentials__submit-button">Continuar</button>
            {title === "Acceso" && <Link to="/sign-up">¿No eres miembro aún? Regístrate</Link>}
            {title === "Registro" && <Link to="/sign-in">¿Ya estás registrado? Accede</Link>}
        </form>
    </>)
}

export default AuthenticationComponent;