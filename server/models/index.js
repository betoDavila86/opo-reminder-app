const { model } = require('mongoose')
const subject = require('./schemas/subject')
const user = require('./schemas/user')

module.exports = {
    User: model('User', user),
    Subject: model('Subject', subject)
}