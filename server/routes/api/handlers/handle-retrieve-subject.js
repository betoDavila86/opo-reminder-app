const retrieveSubject = require('../../../logic/retrieve-subject')

module.exports = (req, res, handleError) => {
    try {
        const { userId, params: { subjectId } } = req

        retrieveSubject(userId, subjectId)
            .then(subject => res.status(200).json({ subject }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}