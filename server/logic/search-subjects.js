const { Subject } = require('../models');
const validations = require('../routes/api/helpers/validations')

module.exports = (query, userId) => {
    validations.string(query, 'consulta de búsqueda');
    validations.string(userId, 'ID del usuario');

    return (async () => {
        const subjects = await Subject.find({ title: { $regex: `.*${query}.*`, $options: 'i' } }).populate('creator', 'fullname').lean()
        if (subjects.length > 0) {
            const filteredSubjects = subjects.filter(subject => subject.creator._id.toString() === userId);
            if (filteredSubjects.length > 0) {
                filteredSubjects.forEach(subject => {
                    subject.id = subject._id.toString();
                    delete subject._id;
                    delete subject.__v;

                    if (subject.creator._id) {
                        subject.creator.id = subject.creator._id.toString();
                        delete subject.creator._id;
                    }
                    subject.number = +subject.number;
                })
                return filteredSubjects.sort((a, b) => a.number - b.number);
            } else return [];
        } else return [];
    })();

}