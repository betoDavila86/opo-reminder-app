const saveImage = require('../../../logic/save-image')
const Busboy = require('busboy')

module.exports = (req, res, handleError) => {
    const { userId, params: { subjectId } } = req

    const busboy = new Busboy({ headers: req.headers })

    try {
        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            filename = 'subject01'
            saveImage(userId, subjectId, file, filename)
        })

        busboy.on('finish', () => {
            res.json({ msg: 'uploaded!' });
        })

        req.pipe(busboy)
    } catch (error) {
        handleError(error)
    }
}