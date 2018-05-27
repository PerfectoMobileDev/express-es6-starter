import logger from "../core/logger/app-logger";

const nodeMailer = require('nodeMailer');

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'hackathon.perfecto@gmail.com',
        pass: 'Hack1234!'
    },
    tls:{
        rejectUnauthorized:false
    }
});

const sendEmail = (mailOptions) => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        logger.info('Message sent: %s', info.messageId);
        logger.info('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    logger.info('Email sent.')
}

export default sendEmail;


