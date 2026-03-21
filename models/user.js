const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// THIS IS THE KEY - plugin MUST be applied
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);