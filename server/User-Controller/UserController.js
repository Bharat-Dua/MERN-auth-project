const UserModel = require("../Models/UserModel");
const otp_Generator = require("otp-generator");
const bcrypt = require("bcrypt");
const sendEmail = require("../Email Service/sendEmail");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const isUserExist = await UserModel.findOne({ email });
    if (isUserExist) {
      res.status(400).json({ message: `User with ${email} already exists` });
    }

    // Generate an OTP token
    const verificationToken = otp_Generator.generate(6, {
      specialChars: false,
      upperCaseAlphabets: false,
    });

    // Set token expiration time
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await UserModel({
      username,
      email,
      password: hashedPassword,
      verificationToken: {
        token: verificationToken,
        expires: expires,
      },
    });
    console.log(newUser);
    console.log(req.body);
    await newUser.save();
    const emailBody = `<p>Please click on the link to verify your account, <b>http://localhost:3000/user/verify/${verificationToken}</b></p>`;
    const subject = "verification email";
    await sendEmail({ email, subject, emailBody });
    res.status(201).json({ message: "user saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json("login");
  } catch (error) {
    res.json("error login ", error);
  }
};

module.exports = { register, login };
