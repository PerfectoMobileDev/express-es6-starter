import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from './core/logger/app-logger';
import morgan from 'morgan';
import config from './core/config/config.dev';
import emailController from "./controllers/emails.controller";
// import { getEmail } from './jobs-email/jobs';
import { getMail3 } from './jobs-email3/jobs3';

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

app.post('/mail', (req, res) => {
     emailController.sendEmail(req, res);
});

app.get('/mail3', (req, res) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.send(getMail3(req.body));
});

app.listen(port, () => {
    logger.info('server started - ', port);
});

