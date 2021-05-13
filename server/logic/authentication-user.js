const { User } = require('../models');
const bcrypt = require('bcryptjs');
const validations = require('../routes/api/helpers/validations')
const { AuthError } = require('../utils/custom-errors')

module.exports = (email, password) => {
    validations.string(email, 'email');
    validations.string(password, 'password');
    validations.email(email);

    return User.findOne({ email })
        .then(user => {
            if (!user) throw new AuthError(`usuario o contraseña incorrectos`);

            return bcrypt.compare(password, user.password)
                .then(match => {
                    if (!match) throw new AuthError(`usuario o contraseña incorrectos`);

                    user.authenticated = new Date();
                    return user.save();
                })
                .then(user => user._id.toString())
        })
}