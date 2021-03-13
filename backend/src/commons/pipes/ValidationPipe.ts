import {
  BadRequestException,
  Injectable,
  ValidationPipe as V,
  ValidationPipeOptions,
} from '@nestjs/common';

const defaultOptions: ValidationPipeOptions = {
  exceptionFactory: (e) => new BadRequestException(e),
  whitelist: true,
};

@Injectable()
export class ValidationPipe extends V {
  constructor(options: ValidationPipeOptions = {}) {
    super({
      ...defaultOptions,
      ...options,
    });
  }
}
