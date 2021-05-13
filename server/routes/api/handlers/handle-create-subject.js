const createSubject = require('../../../logic/create-subject')

module.exports = (req, res, handleError) => {
    try {
        const { body: { number, title, studyFrequency, knowledge, setGoalDate, description, creator }, userId } = req

        createSubject(userId, number, title, studyFrequency, knowledge, setGoalDate, description, creator)
            .then(() => res.status(201).json({ msg: 'El tema se ha creado correctamente' }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}