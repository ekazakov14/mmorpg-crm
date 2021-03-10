import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { ValidationPipe } from 'src/commons/pipes/ValidationPipe';
import { User } from 'src/modules/users/entities/user.entity';
import { AuthService } from '../auth.service';
import { LoginDto, RegisterDto } from './dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'login user and return access_token' })
  public login(@Body(new ValidationPipe()) data: LoginDto) {
    return this.authService.login(data);
  }

  @Post('register')
  @ApiOperation({ summary: 'create user and return it object' })
  public register(@Body(new ValidationPipe()) data: RegisterDto) {
    const user = plainToClass(User, data);
    return this.authService.register(user);
  }
}
