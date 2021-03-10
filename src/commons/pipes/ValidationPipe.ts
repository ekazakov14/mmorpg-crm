import {
  BadRequestException,
  Injectable,
  ValidationPipe as V,
  ValidationPipeOptions,
} from '@nestjs/common';

const defaultOptions = {
  exceptionFactory: (e) => new BadRequestException(e),
};

@Injectable()
export class ValidationPipe extends V {
  constructor(options: ValidationPipeOptions = {}) {
    const resultOptions: ValidationPipeOptions = {
      ...defaultOptions,
      ...options,
    };

    super(resultOptions);
  }
}
