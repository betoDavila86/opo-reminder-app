const authenticateUser = require('../../../logic/authentication-user')
const jwt = require('jsonwebtoken')
const { JWT_SECRET, JWT_EXP } = process.env

module.exports = (req, res, handleError) => {
    try {
        const { body: { email, password } } = req

        authenticateUser(email, password)
            .then(userId => {
                const token = jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: JWT_EXP })

                res.status(200).json({ token, msg: "¡Bienvenid@!" })
            })
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}