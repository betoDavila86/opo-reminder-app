const searchSubjects = require('../../../logic/search-subjects')

module.exports = (req, res, handleError) => {
    try {
        const { query: { q: query } } = req

        searchSubjects(query)
            .then(subjects => res.status(200).json({ subjects, msg: 'Resultados de su búsqueda' }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}