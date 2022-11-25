import { createLogger, format, transports } from 'winston';

const { combine, timestamp, simple, colorize, printf, label } = format;

const logLevels = {
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
  },
};

const myFormat = printf(
  ({ level, message, label, timestamp }) => `${timestamp} [hterferfp] [${label}] [${level}]: ${message}`
);

export const logger = createLogger({
  levels: logLevels.levels,
  format: combine(timestamp(), simple(), colorize(), label({ label: 'API V1' }), myFormat),
  transports: [
    new transports.File({
      maxFiles: 5,
      maxsize: 5120000,
      filename: `${__dirname}/../api-log.log`,
    }),
    new transports.Console(),
  ],
});
