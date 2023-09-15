import { Injectable, Inject } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class CustomLoggerService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  error(url: string, title: string, object: any) {
    this.logger.error(`\n\n\t\t⬤ ⬤ ⬤ ⬤ ⬤\t\t<<${url}>> ${title}`, object);
  }

  warn(url: string, title: string, object: any) {
    this.logger.warn(`\n\n\t\t⬤ ⬤ ⬤\t\t<<${url}>> ${title}`, object);
  }
}
