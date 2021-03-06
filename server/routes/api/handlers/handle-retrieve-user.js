const retrieveUser = require('../../../logic/retrieve-user')

module.exports = (req, res, handleError) => {
    try {
        const { userId } = req

        retrieveUser(userId)
            .then(user => res.status(200).json(user))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}