const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
    from: "bogdan.lyamzin.d@gmail.com",
    to: "kinedav149@huvacliq.com",
    subject: "Test email",
    html: "<p>Test email</p>"
};

sgMail.send(email)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message))