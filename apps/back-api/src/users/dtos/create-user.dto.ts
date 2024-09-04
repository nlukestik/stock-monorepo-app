import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'Required property',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'Required property',
  })
  @IsString()
  @MinLength(8)
  password: string;
}
