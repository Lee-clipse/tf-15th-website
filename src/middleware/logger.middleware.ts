import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl, body, params, query } = request;
    response.on('finish', () => {
      const { statusCode } = response;
      this.logger.log(
        `\n\t ✦ ${method} ${originalUrl} ${statusCode} ${ip} \n\t ✦ body: ${JSON.stringify(
          body,
        )} \n\t ✦ params: ${JSON.stringify(
          params,
        )} \n\t ✦ query: ${JSON.stringify(query)}`,
      );
    });
    next();
  }
}
