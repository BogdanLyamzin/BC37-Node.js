const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

/*
const data = {
    to: "kinedav149@huvacliq.com",
    subject: "Test email",
    html: "<p>Test email</p>"
};
*/

const sendEmail = async (data) => {
    const email = {...data, from: "bogdan.lyamzin.d@gmail.com"};
    await sgMail.send(email);
    return true;
}

module.exports = sendEmail;