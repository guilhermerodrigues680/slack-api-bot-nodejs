const winston = require('winston');

const logger = winston.createLogger({
  level: 'silly',
  //format: winston.format.json(),
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  //defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `app.log` e maxsize 5MB
    //
    //new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/app.log' , maxsize: 5e+6 }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = {
  logger
}