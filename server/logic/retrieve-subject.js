const { User, Subject } = require('../models');
const { NotFoundError, AuthError } = require('../utils/custom-errors');
const validations = require('../routes/api/helpers/validations')

module.exports = (userId, subjectId) => {
    validations.string(userId, 'Id de usuario');
    validations.string(subjectId, 'Id del tema');

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`Usuario con id ${userId} no existe`);

        })
        .then(() => {
            return Subject
                .findById(subjectId).populate('creator').lean()
                .then(subject => {
                    if (!subject) throw new NotFoundError(`Tema con id ${subjectId} no encontrado`);
                    if (subject.creator._id.toString() !== userId) throw new AuthError(`No tienes permiso para ver este tema`);

                    subject.id = subject._id;
                    delete subject.__v;
                    delete subject._id;

                    subject.creator.id = subject.creator._id.toString()
                    delete subject.creator._id
                    delete subject.creator.password
                    delete subject.creator.__v
                    delete subject.creator.authenticated

                    return subject;
                })
        })
}