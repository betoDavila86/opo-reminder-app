const validations = require('../routes/api/helpers/validations')
const { ConflictError, NotFoundError } = require('../utils/custom-errors')
const { Subject, User } = require('../models')

module.exports = (userId, number, title, studyFrequency, knowledge, setGoalDate, description, creator) => {
    validations.string(number, 'número de tema');
    validations.string(title, 'título del tema');
    validations.string(studyFrequency, 'frecuencia de estudio');
    validations.string(knowledge, 'conocimiento del tema');
    validations.knowledge(knowledge);
    if (description !== undefined) validations.string(description, 'breve descripción del tema');
    if (setGoalDate !== undefined) validations.date(setGoalDate);
    validations.string(creator, 'creador del tema');

    return User
        .findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`El usuario con id ${userId} no existe`);
        })
        .then(() => {
            return Subject
                .findOne({ number })
                .then(subject => {
                    if (subject && subject.creator.toString() === userId) throw new ConflictError(`Ya añadiste un tema con el número ${number}`);

                })
                .then(() => { Subject.create({ number, title, studyFrequency, knowledge, setGoalDate, description, creator }) })
                .then(() => { })
        })

}