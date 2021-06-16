require('dotenv').config()
const validations = require('../routes/api/helpers/validations')
const { NotFoundError } = require('../utils/custom-errors')
const { User, Subject } = require('../models')
const fs = require('fs')
const path = require('path')

module.exports = function (userId, subjectId, file, filename) {
    validations.string(userId, 'userId')
    validations.string(subjectId, 'subjectId')
    validations.string(filename, 'filename')

    return (async () => {
        const user = await User.findById(userId)
        if (!user) throw new NotFoundError(`Usuario con id ${userId} no encontrado`);

        const toilet = await Subject.findById(subjectId)
        if (!subject) throw new NotFoundError(`Tema con id ${subjectId} no encontrado`)

        const dir = `./data/subjects/${subjectId}`
        if (!fs.existsSync(dir)) fs.mkdirSync(dir)

        let saveTo = path.join(__dirname, `../data/subjects/${subjectId}/${filename}.jpg`)
        file.pipe(fs.createWriteStream(saveTo))
    })()
}