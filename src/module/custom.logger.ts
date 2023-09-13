import { Injectable, Inject } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class CustomLoggerService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  writeLog(
    type: string,
    method: string,
    url: string,
    title: string,
    object: any,
  ) {
    if (type === 'error') {
      this.logger.error(`\n\t[${method}] ${url} ${title}`, object);
    } else if (type === 'warn') {
      this.logger.warn(`\n\t[${method}] ${url} ${title}`, object);
    } else if (type === 'info') {
      this.logger.info(`\n\t[${method}] ${url} ${title}`, object);
    }
  }
}
