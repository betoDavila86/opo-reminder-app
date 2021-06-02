const context = require('./context');
const fetch = require('./fetch')

module.exports = function () {
    return (async () => await fetch.get(`${this.API_URL}/subjects`, `${this.storage.token}`))();
}.bind(context);