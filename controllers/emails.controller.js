import logger from '../core/logger/app-logger'
import sendEmail from '../models/emailSender'


const controller = {};
const FROM = 'hackathon.perfecto@gmail.com';
const TO = 'hackathon.perfecto@gmail.com';

const SUBJECT = 'Reporting Summary';

 const buildHtml = () => {
    return '<br> this is my html </br>';
}

controller.sendEmail = (req, res) => {
     logger.info('preparing to send email');
    try {
        logger.info('building html');
        const html = buildHtml();//send additional needed data from request
        logger.info('constructing mail options');
        const mailOptions = {
            from: FROM,
            to: TO,
            subject: SUBJECT,
            html: html
        };
        res.send('Sending email..');
        sendEmail(mailOptions);
    }
    catch(err) {
        logger.error('Error in sending email - ' + err);
        res.send('Got error in sending email');
    }
};

export default controller;