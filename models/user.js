var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    username: String,
    password: String
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);