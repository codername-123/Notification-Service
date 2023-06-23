const nodemailer = require("nodemailer");
const { GMAIL_ADDR, GMAIL_PASS } = require("./server-config");

const mailSender = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: GMAIL_ADDR,
    pass: GMAIL_PASS,
  },
});

module.exports = mailSender;
