import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/commons/comparePassword';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { LoginDto } from './controllers/dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async login({ login, password }: LoginDto) {
    let user: User;
    const userByUsername = await this.userService.findByUsername(login);

    if (userByUsername) {
      user = userByUsername;
    } else {
      const userByEmail = await this.userService.findByEmail(login);

      if (userByEmail) {
        user = userByEmail;
      } else {
        throw new UnauthorizedException('invalid credentials');
      }
    }

    const isValidCredentials = await comparePassword(password, user.password);

    if (isValidCredentials) {
      const accessToken = this.jwtService.sign({ user });

      return {
        access_token: accessToken,
      };
    } else {
      throw new UnauthorizedException('invalid credentials');
    }
  }

  public register(user: User) {
    return this.userService.create(user);
  }
}
