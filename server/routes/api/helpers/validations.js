const { ContentError } = require('../../../utils/custom-errors');
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const validDate = require('./valid-date')

module.exports = {
    string(target, name, empty = true) {
        this.type(target, name, String)

        if (empty && !target.trim()) throw new ContentError(`${name} está vacío`)
    },

    stringFrontend(target, name, empty = true) {
        if (typeof target === 'undefined') throw new ContentError(`${name} está vacío`)

        this.type(target, name, String)

        if (empty && !target.trim()) throw new ContentError(`${name} está vacío`)
    },

    email(target) {
        if (!EMAIL_REGEX.test(target)) throw new ContentError(`${target} no es un email válido`)
    },

    type(target, name, type) {
        if (type === String || type === Number || type === Boolean) {
            type = type.name.toLowerCase()
            if (typeof target === 'number' && target.toString() === 'NaN') throw new TypeError(`${name} ${target} no es un ${type}`)
            if (typeof target !== type) throw new TypeError(`${name} ${target} no es un ${type}`)
        } else if (!(target instanceof type)) throw new TypeError(`${name} ${target} no es un ${type.name}`)
    },

    date(target) {
        if (!validDate(target)) throw new ContentError(`${target} no es una fecha válida`)
        // const [year, month, day] = target.split('-')
        // if (!validDate(target) || Number(year) >= new Date().getFullYear() || Number(month) > 12 || Number(day) > 31) throw new ContentError(`${target} no es una fecha válida`)
    },
    
    knowledge(target) {
            const KNOWLEDGE = ['nada', 'regular', 'bien', 'muy bien']
            if (!KNOWLEDGE.includes(target)) throw new ContentError(`${target} no está incluido entre las opciones`)
        },
}