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

  invalid(url: string, title: string, object: any) {
    this.logger.warn(`\n\n\t\t⬤ ⬤ ⬤\t\t<<${url}>> ${title}`, object);
  }

  log(title: string) {
    // 사실은 warn임 (로깅 구분 위함)
    this.logger.warn(`\n\n\t⬤ ${title}\n`, {});
  }
}
