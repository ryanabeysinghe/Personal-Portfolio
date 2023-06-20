import nodemailer from 'nodemailer';

const emailUsername = process.env.EMAIL_USERNAME;
const emailPassword = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailUsername,
        pass: emailPassword,
    },
});

export const mailOptions = {
    from: emailUsername,
    to: emailUsername,
};