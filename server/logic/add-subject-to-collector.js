const { Subject, User } = require('../models')
const { ConflictError, NotFoundError } = require('../utils/custom-errors')
const validations = require('../routes/api/helpers/validations')

module.exports = (subjectId, userId) => {
    validations.string(subjectId, 'ID del tema');
    validations.string(userId, 'ID del usuario');
    
    return Subject.findById(subjectId)
        .then(subject => {
            if (!subject) throw new NotFoundError(`El tema con id ${subjectId} no ha sido encontrado`);
        })
        .then(() => {
            return User.findById(userId)
                .then((user) => {
                    if (!user) throw new NotFoundError(`El usuario con id ${userId} no existe`);

                    const foundSubject = user.subjectCollector.find(subject => subject._id == subjectId)
                    if (foundSubject) {
                        throw new ConflictError(`El tema con id ${subjectId} ya fue añadido`);
                    } else {
                        user.subjectCollector.push(subjectId);
                        user.save();
                    }
                })
                .then(() => { })
        })
}