const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  OTP_VerificationToken: {
    OTP: String,
    expires: Date,
  },
  VerificationToken: {
    token: String,
    expires: Date,
  },
});

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;
