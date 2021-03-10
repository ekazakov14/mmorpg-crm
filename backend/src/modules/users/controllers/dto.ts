import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateDto {
  @IsString()
  @MinLength(6)
  @MaxLength(16)
  @ApiProperty()
  public readonly username: string;

  @IsString()
  @IsEmail()
  @ApiProperty()
  public readonly email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @ApiProperty()
  public readonly password: string;
}

export class UpdateDto extends CreateDto {}
