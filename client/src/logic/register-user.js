const context = require('./context');
const { validations: { validations } } = require('../utils');
const fetch = require('./fetch')

module.exports = function (fullname, email, password) {
    validations.stringFrontend(fullname, 'nombre del usuario');
    validations.email(email);
    validations.stringFrontend(email, 'email del usuario');
    validations.stringFrontend(password, 'contraseña del usuario');

    const data = {
        fullname,
        email,
        password
    }

    return (async () => await fetch.post(`${this.API_URL}/users`, data))();

}.bind(context);