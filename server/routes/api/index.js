const { Router } = require('express')
const jwtParser = require('../../middlewares/jwt-parser');

const {
    handleRegisterUser,
    handleCreateSubject,
    handleAddSubjectToCollector,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleRetrieveSubject,
    handleDeleteSubject,
    handleRetrieveAllSubjectsByUser,
    handleDeleteUser,
    handleSearchSubjects,
    handleModifySubject,
    handleSaveImage,
} = require('./handlers/index')

const router = new Router()

const withErrorHandling = require('./helpers/handle-error')

// register user
router.post('/api/users', withErrorHandling(handleRegisterUser))

// retrieve user
router.get('/api/users', jwtParser, withErrorHandling(handleRetrieveUser))

// authenticate user
router.post('/api/users/auth', withErrorHandling(handleAuthenticateUser))

// user profile deletion
router.delete('/api/users/delete', jwtParser, withErrorHandling(handleDeleteUser))

// create subject
router.post('/api/subjects', jwtParser, withErrorHandling(handleCreateSubject));

// retrieve subject
router.get('/api/subjects/:subjectId', jwtParser, withErrorHandling(handleRetrieveSubject));

// retrieve user's subjects
router.get('/api/subjects', jwtParser, withErrorHandling(handleRetrieveAllSubjectsByUser));

// search subjects
router.get('/api/search/subjects', jwtParser, withErrorHandling(handleSearchSubjects))

// delete subject
router.delete('/api/subjects/delete/:subjectId', jwtParser, withErrorHandling(handleDeleteSubject));

// add subject to the collector(opo-bombo)
router.patch('/api/bombo/:subjectId', jwtParser, withErrorHandling(handleAddSubjectToCollector))

// Update a subject
router.patch('/api/subjects/:subjectId', jwtParser, withErrorHandling(handleModifySubject));

// Upload a picture for the subject
router.post('/api/upload/:subjectId', jwtParser, withErrorHandling(handleSaveImage));

module.exports = router