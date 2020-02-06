const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const valueSchema = new Schema({
    name: String,
    birthdate: String
}, {
    timestamps: true
})

const User = mongoose.model('User', valueSchema);
module.exports = User;