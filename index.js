// // var Monitor = require('monitor');
// // var processMonitor = new Monitor({probeClass:'Process'});
//
// var restify = require('restify');
//
// function respond(req, res, next) {
//     res.send('hello ' + req.params.name);
//     next();
// }
//
// var server = restify.createServer();
// server.get('/hello/:name', respond);
// server.head('/hello/:name', respond);
//
// server.listen(8080, function() {
//     console.log('%s listening at %s', server.name, server.url);
// });
//
// // processMonitor.connect()
//
// var intel = require('intel');
// intel.addHandler(new intel.handlers.File('./file.log'));
//
// intel.info('going to a file!');

const winston = require('winston');
require('winston-daily-rotate-file');
const moment = require('moment');

const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            json: false,
            colorize: true,
            timestamp: true,
        }),
        // new winston.transports.File({
        //     name: 'error-file',
        //     level: 'error',
        //     filename: `${moment().format('YYYY-MM-DD')}_error.log`,
        //     json: false,
        //     maxsize: 5242880, //5MB
        //     maxFiles: 5,
        //     maxDays: 1
        // }),
        // new winston.transports.File({
        //     name: 'warn-file',
        //     level: 'warn',
        //     filename: `${moment().format('YYYY-MM-DD')}_warn.log`,
        //     json: false,
        //     maxsize: 5242880, //5MB
        //     maxFiles: 5,
        //     maxDays: 1
        // })
        new winston.transports.DailyRotateFile({
            name: 'file#warn',
            level: "warn",
            filename: './warn.log',
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            maxDays: 15,
            colorize: false,
            json: false,
            timestamp: true,
        }),
        new winston.transports.DailyRotateFile({
            name: 'file#error',
            level: "error",
            filename: './error.log',
            datePattern: 'yyyy-MM-dd.',
            handleExceptions: true,
            prepend: true,
            maxDays: 15,
            colorize: false,
            json: false,
            timestamp: true,
        })
    ]});


logger.warn('test log');
logger.error('error');
// logger.debug('debug');