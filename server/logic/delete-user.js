const validations = require('../routes/api/helpers/validations')
const { User, Subject } = require('../models')
const { NotFoundError } = require('../utils/custom-errors');

module.exports = id => {
    validations.string(id, 'id de usuario');

    return User.findById(id)
        .then(user => {
            if (!user) throw new NotFoundError(`usuario con ${id} no existe`);

            if (user.subjectCollector !== 0) {
                return Subject.find({ creator: id })
                    .then(subjects => {
                        return Promise.resolve(subjects.forEach(subject => {
                            User.findByIdAndUpdate(id, { $pull: { subjectCollector: subject._id } })
                                .then(() => { })
                        }))
                    })
                    .then(() => {
                        return Subject.find({ creator: id })
                            .then(subjects => {
                                return Promise.resolve(subjects.forEach(subject => {
                                    Subject.findByIdAndRemove(subject._id)
                                        .then(() => { })
                                }))
                            })
                    })
                    .then(() => User.findByIdAndRemove(id))
                    .then(() => { })
            } else {
                return Subject.find({ creator: id })
                    .then(subjects => {
                        return Promise.resolve(subjects.forEach(subject => {
                            Subject.findByIdAndRemove(subject._id)
                        }))
                    })
                    .then(() => User.findByIdAndRemove(id))
                    .then(() => { })
            }
        })
}
