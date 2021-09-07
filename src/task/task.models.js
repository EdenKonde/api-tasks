const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ModelSchema = new mongoose.Schema({
    description: { type: String, required: true},
    done:{ type: Boolean, default: false},
    createdAt:{ type: Date, default: Date.now},
    updatedAt:{ type: Date, default: ""}
})

module.exports = mongoose.model('Task', ModelSchema)