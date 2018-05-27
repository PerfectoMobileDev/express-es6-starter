import { getMail3 } from '../jobs-email3/jobs3';
import logger from '../core/logger/app-logger'
import sendEmail from '../models/emailSender'


const controller = {};
const FROM = 'hackathon.perfecto@gmail.com';
const TO = 'hackathon.perfecto@gmail.com';

const SUBJECT = 'Reporting Summary';


controller.sendEmail = (req, res) => {
     logger.info('preparing to send email');
    try {
        logger.info('building html');
        const html = getMail3(req.body);
        logger.info('constructing mail options');
        const mailOptions = {
            from: FROM,
            to: TO,
            subject: SUBJECT,
            html: html
        };
        sendEmail(mailOptions);
        res.send('Sending email..');
    }
    catch(err) {
        logger.error('Error in sending email - ' + err);
        res.send('Got error in sending email');
    }
};

export default controller;
