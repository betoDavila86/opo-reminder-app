const { User } = require('../models');
const { NotFoundError } = require('../utils/custom-errors');
const validations = require('../routes/api/helpers/validations')

module.exports = userId => {
    validations.string(userId, 'id de usuario');

    return User.findById(userId).populate('subjectCollector').lean()
        .then(user => {
            if (!user) throw new NotFoundError(`Usuario con id ${userId} no existe`);

            user.id = user._id.toString();
            delete user.password
            delete user._id
            delete user.__v

            user.subjectCollector.forEach(subject => {
                subject.id = subject._id.toString();
                delete subject._id
                delete subject.__v
            })
            
            return user;
        })
}