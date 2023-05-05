const logger = require("../logger");

const addLogger = (req, res, next) => {
  req.logger = logger;
  req.logger.info(
    `[${req.method}] => ${req.url} - ${new Date().toLocaleTimeString()}`
  );
  next();
};

module.exports = addLogger;
