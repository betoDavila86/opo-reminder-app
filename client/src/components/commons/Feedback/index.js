import React from 'react';
import './styles.sass';
import Button from '../Button';
import { useParams, useHistory } from 'react-router-dom';

function Feedback({ message, onHideModal, warning, onRemoveSubject }) {

    const params = useParams();
    const history = useHistory();
    const id = params.subjectId;

    if (warning) {
        message = '¿Estás seguro/a?';
        return (<>
            <div className="backdrop" onClick={onHideModal}>
                <div className="warning">
                    <h2 className={`feedback__text`}>{message}</h2>
                    <div className="actions">
                        <Button className="button" clicked={() => history.goBack()}>Cancelar</Button>
                        <Button className="button" clicked={() => onRemoveSubject(id)}>Aceptar</Button>
                    </div>
                </div>
            </div>
        </>)
    } else {
        return (<>
            <div className="backdrop" onClick={onHideModal}>
                <div className="feedback">
                    <h2 className={`feedback__text`}>{message}</h2>
                    <div className="actions">
                        <Button className="button" clicked={onHideModal}>Ok</Button>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default Feedback;