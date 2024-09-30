const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    number: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },

}
,
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;