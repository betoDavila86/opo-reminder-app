const addSubjectToCollector = require('../../../logic/add-subject-to-collector')

module.exports = (req, res, handleError) => {
    try {
        const { userId, params: { subjectId } } = req;
        addSubjectToCollector(subjectId, userId)
            .then(() => {
                res.status(200).json({ msg: 'El tema fue añadido correctamente al opo-bombo' })
            })
            .catch(error => handleError(error))

    } catch (error) {
        handleError(error);
    }
}