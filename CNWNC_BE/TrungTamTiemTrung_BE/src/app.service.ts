import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {

  logger: Logger;

  constructor(){
    this.logger = new Logger();
  }
  getHello(): string {
    this.logger.log('test')
    return 'Hello World!';
  }
}
