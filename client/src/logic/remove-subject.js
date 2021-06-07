const context = require('./context');
const { validations: { validations } } = require('../utils');
const fetch = require('./fetch')

module.exports = function (subjectId) {
    validations.stringFrontend(subjectId, 'ID del tema');

    return (async () => await fetch.delete(`${this.API_URL}/subjects/delete/${subjectId}`, `${this.storage.token}`))();

}.bind(context);