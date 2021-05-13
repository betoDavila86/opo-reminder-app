const validations = require('../routes/api/helpers/validations')
const { User, Subject } = require('../models')
const { NotFoundError } = require('../utils/custom-errors');

module.exports = (id, subjectId) => {
    validations.string(id, 'id de usuario')
    validations.string(subjectId, 'ID del tema')

    return Promise.all([User.findById(id), Subject.findById(subjectId)])
        .then(([user, subject]) => {
            if (!user) throw new NotFoundError(`usuario con ${id} no existe`)
            if (!subject) throw new NotFoundError(`tema con id ${subjectId} no encontrado`)

        })
        .then(() => User.findByIdAndUpdate(id, { $pull: { subjectCollector: subjectId } }))
        .then(() => Subject.findByIdAndRemove(subjectId))
        .then(() => { })
}