const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    time:{type:Date, default:Date.now}
});

const User = mongoose.model('User', userSchema);

module.exports = { User };