import {
  Body,
  Controller,
  HttpCode,
  Post,
  Response as Res,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { Response } from 'express';
import { ValidationPipe } from '../../../commons/pipes/ValidationPipe';
import { User } from '../../users/entities/user.entity';
import { AuthService } from '../auth.service';
import { JWT_TOKEN_COOKIE_KEY } from '../constants';
import { LoginDto, RegisterDto } from './dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  @ApiOperation({ summary: 'login user and return access_token' })
  @ApiOkResponse()
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  public async login(
    @Body(new ValidationPipe()) data: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken, user } = await this.authService.login(data);
    res.cookie(JWT_TOKEN_COOKIE_KEY, accessToken, { httpOnly: true });
    return user;
  }

  @Post('register')
  @ApiOperation({ summary: 'create user and return it object' })
  @ApiOkResponse({ type: User })
  public register(@Body(new ValidationPipe()) data: RegisterDto) {
    const user = plainToClass(User, data);
    return this.authService.register(user);
  }

  @Post('logout')
  @ApiOperation({ summary: 'log out the user' })
  @ApiOkResponse()
  public logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie(JWT_TOKEN_COOKIE_KEY);
  }
}
