import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from './core/logger/app-logger';
import morgan from 'morgan';
import config from './core/config/config.dev';
import {getEmail} from './jobs-email/jobs';
import emailController from "./controllers/emails.controller";

// import mails from './routes/mail.route'
// import connectToDb from './db/connect'

const port = config.serverPort;
logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
};

// connectToDb();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev", {"stream": logger.stream}));

// app.use('/mails', mails);

//Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

//Index route
app.post('/mail', (req, res) => {
     emailController.sendEmail(req, res);
});

app.get('/mail2', (req, res) => {
    res.send(getEmail);
});

app.listen(port, () => {
    logger.info('server started - ', port);
});

