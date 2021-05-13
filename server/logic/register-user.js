const validations = require('../routes/api/helpers/validations')
const { ConflictError } = require('../utils/custom-errors')
const { User } = require('../models')
const bcryptjs = require('bcryptjs')

/**
 * Registers a new user to the user's API
 * 
 * @param {string} fullname user's fullname
 * @param {string} email user's unique e-mail
 * @param {string} password user's password
 * 
 * @returns {undefined} on successful registration
 * 
 * @throws {ConflictError} on server error or user registered already
 */

module.exports = function (fullname, email, password) {
    validations.string(fullname, 'nombre')
    validations.email(email)
    validations.string(password, 'password')

    return User
        .findOne({ email })
        .then(user => {
            if (user) throw new ConflictError(`El usuario con email ${email} ya está registrado`)

            return bcryptjs.hash(password, 10)
        })
        .then(hash => User.create({ fullname, email, password: hash }))
        .then(() => { })
}