const context = require('./context');
const { errors: { NotFoundError, NotAllowedError }, validations: { validations } } = require('../utils');

module.exports = function (email, password) {
    validations.stringFrontend(email, 'email del usuario');
    validations.email(email);
    validations.stringFrontend(password, 'contraseña del usuario');

    const data = {
        email,
        password
    }

    return (async () => {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json' }
        };

        const response = await fetch(`${this.API_URL}/users/auth`, options);

        const { status } = response;

        if (status === 200) {
            const { token, msg } = await response.json();

            this.storage.token = token;

            return msg;
        }

        if (status >= 400 && status < 500) {
            const { error } = await response.json();

            if (status === 401) {
                throw new NotAllowedError(error);
            }

            if (status === 404) {
                throw new NotFoundError(error);
            }

            throw new Error(error);
        }

        throw new Error('server error');
    })();
}.bind(context);