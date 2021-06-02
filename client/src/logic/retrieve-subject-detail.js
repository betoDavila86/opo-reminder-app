const context = require('./context');
const fetch = require('./fetch')

module.exports = function (id) {
    return (async () => await fetch.get(`${this.API_URL}/subjects/${id}`, `${this.storage.token}`))();
}.bind(context);