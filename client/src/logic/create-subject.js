const context = require('./context');
const { validations: { validations } } = require('../utils');
const fetch = require('./fetch')

module.exports = function (number, title, knowledge, studyFrequency, setGoalDate, description) {
    validations.stringFrontend(number, 'número del tema')
    validations.stringFrontend(title, 'título del tema');
    validations.stringFrontend(knowledge, 'conocimiento del tema');
    validations.stringFrontend(studyFrequency, 'frecuencia del estudio del tema');
    validations.date(setGoalDate);
    validations.stringFrontend(description, 'descripción del tema')

    const data = {
        number,
        title,
        knowledge,
        studyFrequency,
        setGoalDate,
        description
    }

    return (async () => await fetch.post(`${this.API_URL}/subjects`, data, `${this.storage.token}`))();

}.bind(context);