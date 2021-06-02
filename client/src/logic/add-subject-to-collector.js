const context = require('./context');
const { validations: { validations } } = require('../utils');
const fetch = require('./fetch')

module.exports = function (subjectId) {
    validations.stringFrontend(subjectId, 'ID del tema');

    return (async () => await fetch.patch(`${this.API_URL}/bombo/${subjectId}`, undefined, `${this.storage.token}`))();

}.bind(context);