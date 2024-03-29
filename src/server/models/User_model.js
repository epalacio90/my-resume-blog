const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type:String, required: true },
    email: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true},
    creation_date: { type: Date, required: true, default: Date.now()}
});

userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(process.env.SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};



userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
