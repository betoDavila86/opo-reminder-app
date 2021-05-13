const { Schema } = require('mongoose');

module.exports = new Schema({
    number: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    studyFrequency: {
        type: String,
        enum: ['diario', 'bisemanal', 'trisemanal', 'semanal', 'quincenal', 'mensual'],
        default: 'bisemanal',
        required: true
    },
    knowledge: {
        type: String,
        enum: ['nada', 'regular', 'bien', 'muy bien'],
        default: 'nada',
        required: true
    },
    setGoalDate: {
        type: Date,
    },
    description: {
        type: String
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

})