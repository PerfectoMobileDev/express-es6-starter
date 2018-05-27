import path from 'path';

import logger from '../core/logger/app-logger';
import sendEmail from '../models/emailSender';
import { getMail3 } from "../jobs-email3/jobs3";


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
        const pathToImage = path.join(__dirname , '/../jobs-email3/images/');
        const mailOptions = {
            from: FROM,
            to: TO,
            subject: SUBJECT,
            html: html,
            attachments: [{
                filename: 'logo.png',
                path: pathToImage + 'logo.png',
                cid: 'logo'
            }]
        };
        res.send('Sending email..');
        sendEmail(mailOptions);
    }
    catch (err) {
        logger.error('Error in sending email - ' + err);
        res.send('Got error in sending email');
    }
};

export default controller;
