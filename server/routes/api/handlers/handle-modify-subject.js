const modifySubject = require('../../../logic/modify-subject')

module.exports = (req, res, handleError) => {
    try {
        const { userId, params: { subjectId }, body } = req;
        modifySubject(userId, subjectId, body)
            .then(() => {
                res.status(206).json({ msg: 'El tema ha sido modificado' })
            })
            .catch(error => handleError(error))

    } catch (error) {
        handleError(error);
    }
}