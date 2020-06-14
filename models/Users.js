const mongoose = require('mongoose');
const UniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true }
})

userSchema.plugin(UniqueValidator);

module.exports = mongoose.model('User', userSchema);