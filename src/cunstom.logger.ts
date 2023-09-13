import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class CustomLogger extends ConsoleLogger {
  debug(message: any, ...optionalParams: any[]) {
    console.debug(`DEBUG ${message}`, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    console.warn(`WARN ${message}`, ...optionalParams);
  }

  log(message: any, ...optionalParams: any[]) {
    console.log(`LOG ${message}`, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]) {
    console.error(`ERROR ${message}`, ...optionalParams);
  }
}
