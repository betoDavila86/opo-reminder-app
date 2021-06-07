module.exports = (subjects, typeSorting = undefined) => {
    if (typeSorting === 'by-knowledge') {
        const filteredSubjects = subjects.filter(subject => subject.knowledge === 'nada');
        return filteredSubjects.sort((a, b) => new Date(a.setGoalDate) - new Date(b.setGoalDate));

    } else if (typeSorting === 'by-date') {
        return subjects.sort((a, b) => new Date(a.setGoalDate) - new Date(b.setGoalDate));
        
    } else if (typeSorting === undefined) return;
}