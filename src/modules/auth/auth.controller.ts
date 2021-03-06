import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor (
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  public login(@Body() user: User) {
    return this.authService.login(user);
  }

  @Post('register')
  public register(@Body() user: User) {
    return this.authService.register(user);
  }
}
