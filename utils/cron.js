const fs = require('fs');
const moment = require('moment');
const cron = require('node-cron');
const LOG_DIR = 'logs';
const EXPIRED_DAYS = 15;

const task = cron.schedule(
    `0 0 1,${EXPIRED_DAYS} * *`,
    () => {
        fs.readdir(`./${LOG_DIR}`, (err, files) => {
            if (err) {
                return;
            }
            files.forEach(file => {
                const regRes = file.match(/(\d{4}-\d{2}-\d{2}).{1,}/);
                const fileDate = moment(regRes[1], 'YYYY-MM-DD', true);
                if (fileDate.isValid()) {
                    if (moment().diff(fileDate, 'd') >= EXPIRED_DAYS) {
                        fs.unlink(`./${LOG_DIR}/${file}`, (err) => {
                            if (err) {
                                console.log(err.message);
                                return;
                            }
                            console.log(`${file} is deleted`);
                        })
                    }
                } else {
                    console.log('Date match file is invalid')
                }
            });
        });
    }, false);

module.exports = {
    task,
};