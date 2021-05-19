const context = require('./context');
const { validations: { validations } } = require('../utils');
const fetch = require('./fetch')

module.exports = function () {

    return (async () => await fetch.get(`${this.API_URL}/users`, `${this.storage.token}`))();

}.bind(context);