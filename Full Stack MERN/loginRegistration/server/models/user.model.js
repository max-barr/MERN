const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(val),
            message: "Please enter a valid email"
        },
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
});

// Virtual 'confirm password' field
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));

// Check to make sure passwords match
UserSchema.pre("validate", function (next) {
    console.log("inside pre validate");
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match");
    }
    next();
});

// Hash the password
UserSchema.pre("save", function (next) {
    console.log("inside hash");
    bcrypt
        .hash(this.password, 10)
        .then((hash) => {
            // set mongo doc password to the hash
            this.password = hash;
            console.log("HASHING");
            // go to the next thing: the controller
            next();
        })
        .catch((err) => {
            console.log("Inside error block");
            console.log(err);
        });
});

module.exports = mongoose.model("User", UserSchema);