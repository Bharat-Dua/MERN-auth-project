const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bharatdua13@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async ({ email, subject, emailBody }) => {
  let mailOptions = {
    from: "bharatdua13@gmail.com",
    to: email,
    subject,
    html: emailBody,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
};
module.exports = sendEmail;
