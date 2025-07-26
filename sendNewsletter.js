require("dotenv").config();
const nodemailer = require("nodemailer");
const fs = require("fs");

// Load HTML content from newsletter.html
const htmlContent = fs.readFileSync("newsletter.html", "utf8");

// Create transporter
const transporter = nodemailer.createTransport({
  host: "smtp.strato.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Email options
const mailOptions = {
  from: '"Ghost 👻 @ AI Spark" <ghost@aispark.cloud>',
  to: "thomas@elevenpointventures.com", // Replace with your actual address
  subject: "🧠 AI Spark – Your Daily Tech & Gadget Brief",
  html: htmlContent,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error("❌ Failed to send:", error);
  }
  console.log("✅ Newsletter sent:", info.messageId);
});