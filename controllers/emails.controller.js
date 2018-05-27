
import logger from '../core/logger/app-logger'

const controller = {};

controller.getEmail = (req, res) => {
    try {
        logger.info('sending an email');
        res.send('hi!!');
    }
    catch(err) {
        logger.error('Error in getting email - ' + err);
        res.send('Got error in email');
    }
};

export default controller;