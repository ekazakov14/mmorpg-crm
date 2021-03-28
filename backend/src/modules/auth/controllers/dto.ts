import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { UserCreateDto } from '../../users/controllers/dto';

export class LoginDto {
  @IsString()
  @ApiProperty()
  public readonly login: string;

  @IsString()
  @ApiProperty()
  public readonly password: string;
}

export class LoginOkResponse {
  @ApiProperty()
  public readonly access_token: string;
}

export class RegisterDto extends UserCreateDto {}
