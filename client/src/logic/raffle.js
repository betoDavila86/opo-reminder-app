const { LengthError, ContentError } = require('../utils/errors');
const { validations } = require('../utils/validations');

module.exports = (totalSubjects, chosenNumberSubjects, subjects) => {
    if (!Array.isArray(subjects)) throw new ContentError(`${subjects} no es un array`);
    validations.type(totalSubjects, 'Nº total de temas', Number);
    validations.type(chosenNumberSubjects, 'Nº de temas escogidos', Number);
    
    if (totalSubjects > subjects.length) {
        throw new LengthError('Nos has añadido suficientes temas aún');
    } else {
        let chosenSubjectsArr = new Array(chosenNumberSubjects);
        let len = subjects.length;
        let takenSubjects = new Array(len);

        while(chosenNumberSubjects--) {
            let subject = Math.floor(Math.random() * len);
            chosenSubjectsArr[chosenNumberSubjects] = subjects[subject in takenSubjects? takenSubjects[subject] : subject];
            takenSubjects[subject] = --len in takenSubjects ? takenSubjects[len] : len;
        }
        return chosenSubjectsArr;
    }
}