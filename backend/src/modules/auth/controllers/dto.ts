import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateDto } from 'src/modules/users/controllers/dto';

export class LoginDto {
  @IsString()
  @ApiProperty()
  public readonly login: string;

  @IsString()
  @ApiProperty()
  public readonly password: string;
}

export class RegisterDto extends CreateDto {}
