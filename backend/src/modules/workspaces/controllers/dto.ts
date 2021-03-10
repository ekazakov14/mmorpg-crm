import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateDto {
  @IsString()
  @MinLength(3)
  @MaxLength(16)
  @ApiProperty()
  public readonly name: string;
}

export class UpdateDto extends CreateDto {}
