const validations = require('../routes/api/helpers/validations');
const { Subject, User } = require('../models');
const { NotFoundError } = require('../utils/custom-errors')

module.exports = (userId, subjectId, update) => {
    const { description, studyFrequency, knowledge, setGoalDate } = update;

    validations.string(subjectId, 'ID del tema');
    validations.string(userId, 'ID del tema');
    validations.type(update, 'actualización del tema', Object);
    if (description) validations.string(description, 'descripción del tema');
    if (studyFrequency) validations.string(studyFrequency, 'Frecuencia de estudio');
    if (knowledge) validations.string(knowledge, 'Conocimiento del tema');
    if (setGoalDate) validations.date(setGoalDate);

    return Promise.all([User.findById(userId), Subject.findById(subjectId)])
        .then(([user, subject]) => {
            if (!user) throw new NotFoundError(`Usuario con ID ${userId} no existe`);
            if (!subject) throw new NotFoundError(`Tema con ID ${subjectId} no existe`);
        })
        .then(() => {
            return Subject.findByIdAndUpdate(subjectId, { description, studyFrequency, knowledge, setGoalDate }, { new: true }).lean()
                .then(() => { })
        })
}