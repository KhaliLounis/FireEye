const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b6f791f3f3fc05",
      pass: "c2c72dcb4ef560"
    }
});
exports.main = async (email) => {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: ' <noreply@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Fire Alert", // Subject line
      text: "there is a Fire in your region !!", // plain text body
      html: `there is a Fire in your region !!`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
   
  }

  
  exports.resetPassword = async (email,code) => {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '<assistini@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Reset Password Code ", // Subject line
      text: "Hello, Copy this code please ", // plain text body
      html: `<h1>${code}</h1>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
   
  }
