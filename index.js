const restify = require('restify');
const { task } = require('./utils/cron');
const { logger } = require('./utils/logger');

respond = (req, res, next) => {
    res.send('hello ' + req.params.name);
    next();
};

const server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(process.env.PORT || 1880, (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('%s listening at %s', server.name, server.url);
    task.start();
});

// logger.warn('warn');
// logger.error('error');