module.exports = {
    context: require('./context'),
    isAuth: require('./is-auth'),
    registerUser: require('./register-user'),
    authenticateUser: require('./authenticate-user'),
    retrieveUser: require('./retrieve-user'),
    createSubject: require('./create-subject'),
    retrieveMySubjects: require('./retrieve-my-subjects'),
    retrieveSubjectDetail: require('./retrieve-subject-detail'),
    searchSubjects: require('./search-subjects'),
    modifySubject: require('./modify-subject'), 
    removeSubject: require('./remove-subject'),
    sortSubjects: require('./sort-subjects'),
    raffleSubjects: require('./raffle')
}