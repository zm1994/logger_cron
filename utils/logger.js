const winston = require('winston');
require('winston-daily-rotate-file');

const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            json: false,
            colorize: true,
            timestamp: true,
        }),
        new winston.transports.DailyRotateFile({
            name: 'file#warn',
            level: "warn",
            filename: './logs/warn.log',
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            colorize: false,
            json: false,
            timestamp: true,
        }),
        new winston.transports.DailyRotateFile({
            name: 'file#error',
            level: "error",
            filename: './logs/error.log',
            datePattern: 'yyyy-MM-dd.',
            handleExceptions: true,
            prepend: true,
            colorize: false,
            json: false,
            timestamp: true,
        })
    ]
});


module.exports = {
    logger
};