const deleteSubject = require('../../../logic/delete-subject')

module.exports = (req, res, handleError) => {
    try {
        const { userId, params: { subjectId } } = req

        deleteSubject(userId, subjectId)
            .then(() => res.status(200).json({ msg: 'El tema seleccionado fue borrado' }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}