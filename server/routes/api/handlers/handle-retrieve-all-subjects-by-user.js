const retrieveAllSubjectsByUser = require('../../../logic/retrieve-all-subjects-by-user');

module.exports = (req, res, handleError) => {
    try {
        const { userId } = req

        retrieveAllSubjectsByUser(userId)
            .then(subjects => res.status(200).json({ subjects }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}