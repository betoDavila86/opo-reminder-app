const context = require('./context');
const fetch = require('./fetch')

module.exports = function (query) {
    return (async () => await fetch.get(`${this.API_URL}/search/subjects/?q=${query}`, `${this.storage.token}`))();
}.bind(context);
