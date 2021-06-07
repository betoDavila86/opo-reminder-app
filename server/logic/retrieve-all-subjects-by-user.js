const { User, Subject } = require('../models');
const { NotFoundError } = require('../utils/custom-errors');
const validations = require('../routes/api/helpers/validations');
const subject = require('../models/schemas/subject');

module.exports = (userId) => {
    validations.string(userId, 'Id de usuario');

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`Usuario con id ${userId} no existe`);

        })
        .then(() => {
            return Subject.find({ creator: userId }).populate('creator', 'fullname').lean()
                .then(subjects => {
                    if (subjects.length === 0) return [];

                    subjects.forEach(subject => {
                        subject.id = subject._id.toString()
                        delete subject.creator._id;
                        delete subject._id
                        delete subject.__v
                        subject.number = +subject.number;
                    })
                    return subjects.sort((a, b) => a.number - b.number);
                })
        })
}