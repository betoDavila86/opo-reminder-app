const context = require('./context');
const { validations: { validations } } = require('../utils');
const fetch = require('./fetch')

module.exports = function (subjectId, update) {
    validations.stringFrontend(subjectId, 'ID del tema');
    validations.type(update, 'actualización', Object);

    return (async () => await fetch.patch(`${this.API_URL}/subjects/${subjectId}`, update, `${this.storage.token}`))();

}.bind(context);