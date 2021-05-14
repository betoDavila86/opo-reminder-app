const { Subject } = require('../models');
const validations = require('../routes/api/helpers/validations')

module.exports = query => {
    validations.string(query, 'consulta de búsqueda');

    return Subject.find({ title: { $regex: `.*${query}.*` } }).populate('creator', 'fullname').lean()
        .then(subjects => {
            if (subjects.length > 0) {
                subjects.forEach(subject => {
                    subject.id = subject._id.toString();
                    delete subject._id;
                    delete subject.__v;

                    subject.creator.id = subject.creator._id.toString();
                    delete subject.creator._id;

                    subject.number = +subject.number;

                })
                return subjects.sort((a, b) => b.number - a.number);
            } else return [];
        })
}