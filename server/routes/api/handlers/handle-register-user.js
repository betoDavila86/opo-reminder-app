const registerUser = require('../../../logic/register-user')

module.exports = (req, res, handleError) => {
    try {
        const { body: { fullname, email, password } } = req

        registerUser(fullname, email, password)
            .then(() => res.status(201).json({ msg: 'Usuario registrado correctamente' }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}