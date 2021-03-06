import winston from 'winston';


// Winston CLI reference;
//
// cliConfig.levels = {
//   error: 0,
//   warn: 1,
//   help: 2,
//   data: 3,
//   info: 4,
//   debug: 5,
//   prompt: 6,
//   verbose: 7,
//   input: 8,
//   silly: 9,
// };


winston.cli();
winston.remove( winston.transports.Console );

winston.add( winston.transports.Console, {
    level       : 'info',
    prettyPrint : true,
    colorize    : true,
    silent      : false,
    timestamp   : true
} );


export default winston;
