import './styles.sass';
import { NavLink } from 'react-router-dom';
import libros from '../../assets/img/libros.jpg';
import { UilBooks } from '@iconscout/react-unicons';

const Landing = () => {
    return (
        <section className="landing">
            <div className="landing__header">
                <NavLink to="/sign-in" className="landing__btn">Acceso</NavLink>
                <NavLink to="/sign-up" className="landing__btn">Registro</NavLink>
            </div>
            <div className="landing__pre">
                <h3>Introduciendo <span className="landing__pre--name">OPO REMINDER</span></h3><span><UilBooks size="40" className="landing__pre-icon" /></span>
            </div>
            <div className="landing__title">
                <div className="landing__img">
                    <img src={libros} alt="libros" className="landing__logo-img" width="300" />
                </div>
                <h1 className="landing__intro">Una mejor manera de organizar el estudio de tu oposición</h1>
                <div className="landing__intro-separator"></div>
                <p className="landing__description">Añade temas, establece fechas objetivo, gestiona el estudio según lo que sabes de cada tema e incluso puedes simular
                    y evaluar tus conocimientos con nuestro "bombo" de temas aleatorios</p>
                <div className="landing__start">
                    <NavLink to="/sign-up" className="landing__btn">¡Empezamos!</NavLink>
                </div>
            </div>
            <div className="landing__small">
                <span className="landing__small-text">Aplicación en proceso de mejora. Cualquier tipo de feedback positivo será muy bien recibido.</span>
            </div>
        </section>
    );
}
export default Landing;