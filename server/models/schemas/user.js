const { Schema, Types: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
            message: props => `${props.value} no es una dirección de correo válida`
        }
    },

    password: {
        type: String,
        required: true,
        minLength: 8
    },

    authenticated: { type: Date },

    subjectCollector: [{
        type: ObjectId,
        ref: 'Subject'
    }]

})