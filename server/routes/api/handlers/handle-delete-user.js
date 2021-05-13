const deleteUser = require('../../../logic/delete-user')

module.exports = (req, res, handleError) => {
    try {
        const { userId } = req

        deleteUser(userId)
            .then(() => res.status(200).json({ msg: 'Usuario borrado!' }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}