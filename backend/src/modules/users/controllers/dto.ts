import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, Length } from 'class-validator';

const MIN_USERNAME_LENGTH = 6;
const MAX_USERNAME_LENGTH = 16;
const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 20;

export class CreateDto {
  @Length(MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH)
  @ApiProperty()
  public readonly username: string;

  @IsEmail()
  @ApiProperty()
  public readonly email: string;

  @Length(MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH)
  @ApiProperty()
  public readonly password: string;
}

export class UpdateDto {
  @Length(MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH)
  @IsOptional()
  @ApiProperty()
  public readonly username?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty()
  public readonly email?: string;

  @Length(MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH)
  @IsOptional()
  @ApiProperty()
  public readonly password?: string;
}
